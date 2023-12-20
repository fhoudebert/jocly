
(function() {
	
	var geometry = Model.Game.cbBoardGeometryGrid(8,8);
	
	Model.Game.cbDefine = function() {
		
		var wolf = this.cbConstants.FLAG_SPECIAL | this.cbConstants.FLAG_SPECIAL_CAPTURE | this.cbConstants.FLAG_THREAT; // wolf-mode flags

		return {
			
			geometry: geometry,
			
			pieceTypes: {

				0: {
					name: 'pawn-w',
					aspect: 'fr-pawn',
					graph: this.cbPawnGraph(geometry,1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					epCatch: true,
				},
				
				1: {
					name: 'ipawn-w',
					aspect: 'fr-pawn',
					graph: this.cbInitialPawnGraph(geometry,1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					initial: [{s:1,p:8},{s:1,p:9},{s:1,p:10},{s:1,p:11},{s:1,p:12},{s:1,p:13},{s:1,p:14},{s:1,p:15}],
					epTarget: true,
				},
				
				2: {
					name: 'pawn-b',
					aspect: 'fr-pawn',
					graph: this.cbPawnGraph(geometry,-1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					epCatch: true,
				},

				3: {
					name: 'ipawn-b',
					aspect: 'fr-pawn',
					graph: this.cbInitialPawnGraph(geometry,-1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					initial: [{s:-1,p:48},{s:-1,p:49},{s:-1,p:50},{s:-1,p:51},{s:-1,p:52},{s:-1,p:53},{s:-1,p:54},{s:-1,p:55}],
					epTarget: true,
				},
				
				4: {
					name: 'knight',
					aspect: 'fr-knight',
					graph: this.cbKnightGraph(geometry),
					value: 2.9,
					abbrev: 'N',
					initial: [{s:1,p:1},{s:1,p:6},{s:-1,p:57},{s:-1,p:62}],
				},
				
				5: {
					name: 'bishop',
					aspect: 'fr-bishop',
					graph: this.cbBishopGraph(geometry),
					value: 3.1,
					abbrev: 'B',
					initial: [{s:1,p:2},{s:1,p:5},{s:-1,p:58},{s:-1,p:61}],
				},

				6: {
					name: 'rook',
					aspect: 'fr-rook',
					graph: this.cbRookGraph(geometry),
					value: 5,
					abbrev: 'R',
					initial: [{s:1,p:0},{s:1,p:7},{s:-1,p:56},{s:-1,p:63}],
					castle: true,
				},

				7: {
					name: 'werewolf',
					aspect: 'fr-wolf',
					graph: this.cbMergeGraphs(geometry,
						this.cbLongRangeGraph(geometry,
							[[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],null,null,3),
						this.cbShortRangeGraph(geometry,
							[[2,0],[0,2],[-2,0],[0,-2],[2,2],[2,-2],[-2,2],[-2,-2]],null,wolf)
						),
					value: 10,
					abbrev: 'W',
					initial: [{s:1,p:3},{s:-1,p:59}],
				},
				
				8: {
					name: 'king',
					aspect: 'fr-king',
					isKing: true,
					graph: this.cbKingGraph(geometry),
					abbrev: 'K',
					initial: [{s:1,p:4},{s:-1,p:60}],
				},
				
			},
			
			promote: function(aGame,piece,move) {
				if(move.c && this.pieces[move.c].t == 7    // captured Werewolf
					&& move.a != 'W' && move.a != 'K') // by non-Werewolf other than King
					return [7];                        // so promote to one
				if(piece.t==1)
					return [0];
				else if(piece.t==3)
					return [2];
				else if(piece.t==0 && geometry.R(move.t)==7)
					return [4,5,6];
				else if(piece.t==2 && geometry.R(move.t)==0)
					return [4,5,6];
				return [];
			},

			castle: {
				"4/0": {k:[3,2],r:[1,2,3],n:"O-O-O"},
				"4/7": {k:[5,6],r:[6,5],n:"O-O"},
				"60/56": {k:[59,58],r:[57,58,59],n:"O-O-O"},
				"60/63": {k:[61,62],r:[62,61],n:"O-O"},
			},
			
			evaluate: function(aGame,evalValues,material) {
				// check lack of material to checkmate
				var white=material[1].count;
				var black=material[-1].count;
				if(!white[0] && !white[1] && !white[4] && !white[5] && !white[6] && !white[7]) { // white king single
					if(!black[2] && !black[3] && !black[6] && !black[7] && (black[4]+black[5]<2 || black[5]<2)) {
						this.mFinished=true;
						this.mWinner=JocGame.DRAW;
					}
				}
				if(!black[2] && !black[3] && !black[4] && !black[5] && !black[6] && !black[7]) { // black king single
					if(!white[0] && !white[1] && !white[6] && !white[7] && (white[4]+white[5]<2 || white[5]<2)) {
						this.mFinished=true;
						this.mWinner=JocGame.DRAW;
					}
				}
				
				// check 50 moves without capture
				if(this.noCaptCount>=100) {
					this.mFinished=true;
					this.mWinner=JocGame.DRAW;					
				}
				
				// motivate pawns to reach the promotion line
				var distPromo=aGame.cbUseTypedArrays?new Int8Array(3):[0,0,0];
				var height=geometry.height;
				var pawns=material[1].byType[0],pawnsLength;
				if(pawns) {
					pawnsLength=pawns.length;
					for(var i=0;i<pawnsLength;i++)
						switch(height-geometry.R(pawns[i].p)) {
						case 2: distPromo[0]++; break;
						case 3: distPromo[1]++; break;
						case 4: distPromo[2]++; break;
						}
				}
				pawns=material[-1].byType[2],pawnsLength;
				if(pawns) {
					pawnsLength=pawns.length;
					for(var i=0;i<pawnsLength;i++)
						switch(geometry.R(pawns[i].p)) {
						case 1: distPromo[0]--; break;
						case 2: distPromo[1]--; break;
						case 3: distPromo[2]--; break;
						}
				}
				if(distPromo[0]!=0)
					evalValues['distPawnPromo1']=distPromo[0];
				if(distPromo[1]!=0)
					evalValues['distPawnPromo2']=distPromo[1];
				if(distPromo[2]!=0)
					evalValues['distPawnPromo3']=distPromo[2];
				
				// motivate knights and bishops to deploy early
				var minorPiecesMoved=0;
				for(var t=4;t<=5;t++)
					for(var s=1;s>=-1;s-=2) {
						var pieces=material[s].byType[t];
						if(pieces)
							for(var i=0;i<pieces.length;i++)
								if(pieces[i].m)
									minorPiecesMoved+=s;
					}
				if(minorPiecesMoved!=0) {
					evalValues['minorPiecesMoved']=minorPiecesMoved;
				}
			},
			
		};
	}

	var OriginalApplyMove = Model.Board.ApplyMove;
	Model.Board.ApplyMove = function(aGame,move) {
		if(move.via !== undefined) { // locust capture, remove victim
			var piece1=this.pieces[move.kill];
			this.zSign^=aGame.bKey(piece1);
			this.board[piece1.p]=-1;
			piece1.p=-1;
			piece1.m=true;
			this.noCaptCount=0;
		}
		OriginalApplyMove.apply(this, arguments);
	}

	var OriginalQuickApply = Model.Board.cbQuickApply;
	Model.Board.cbQuickApply = function(aGame,move) {
		var tmp = OriginalQuickApply.apply(this, arguments);
		if(move.via !== undefined) { // locust victim
			this.board[move.via] = -1; // remove it
			this.pieces[move.kill].p = -1;
			tmp.unshift({ // and schedule its revival in UnApply
				i: move.kill,
				f: -1,
				t: move.via,
			});
		}
		return tmp;
	}

	var OriginalMoveGen = Model.Board.cbGeneratePseudoLegalMoves;
	Model.Board.cbGeneratePseudoLegalMoves = function(aGame) {
		this.specials = []; // to collect the wolf moves
		var moves = OriginalMoveGen.apply(this, arguments);
		var $this = this;
		this.specials.forEach(function(move){ // vet candidate (Wolf) moves
			var mid = move.f + move.t >> 1;
			var victim = $this.board[mid];
			if(victim < 0) return;        // slide did already reach move.t
			moves.push({ // reach target through jump
				f: move.f,
				t: move.t,
				c: move.c,
				a: move.a
			});

			if($this.pieces[victim].s != $this.mWho) // jumped over foe
				moves.push({ // also try to capture it
					f: move.f,
					t: move.t,
					c: move.c,
					via: mid,
					kill: victim,
					a: move.a
				});

		});
		return moves;
	}

	var OriginalToString = Model.Move.ToString;
	Model.Move.ToString = function(format) {
		if(this.via !== undefined) { // locust capture	(computer form currently undefined)		
			return this.a + 'x' + geometry.PosName(this.via) +
					(this.c == null ? '-' : 'x') + geometry.PosName(this.t);
		}
		return OriginalToString.call(this, format);
	}

	
})();
