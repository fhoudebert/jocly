
(function(){

	var geometry=Model.Game.cbBoardGeometryGrid(10,10);

	Model.Game.cbDefine=function(){

		var f = this.cbConstants.FLAG_SPECIAL_CAPTURE;

		return{
			geometry:geometry,

			pieceTypes:{
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
					initial: [{s:1,p:20},{s:1,p:21},{s:1,p:22},{s:1,p:23},{s:1,p:24},{s:1,p:25},{s:1,p:26},{s:1,p:27},{s:1,p:28},{s:1,p:29}],
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
					initial: [{s:-1,p:70},{s:-1,p:71},{s:-1,p:72},{s:-1,p:73},{s:-1,p:74},{s:-1,p:75},{s:-1,p:76},{s:-1,p:77},{s:-1,p:78},{s:-1,p:79}],
					epTarget: true,
				},
				
				4: {
					name: 'knight',
					aspect: 'fr-knight',
					graph: this.cbKnightGraph(geometry),
					value: 2.75,
					abbrev: 'N',
					initial: [{s:1,p:11},{s:1,p:18},{s:-1,p:81},{s:-1,p:88}],
				},
				
				5: {
					name: 'bishop',
					aspect: 'fr-bishop',
					graph: this.cbBishopGraph(geometry),
					value: 4,
					abbrev: 'B',
					initial: [{s:1,p:12},{s:1,p:17},{s:-1,p:82},{s:-1,p:87}],
				},

				6: {
					name: 'rook',
					aspect: 'fr-rook',
					graph: this.cbRookGraph(geometry),
					value: 5,
					abbrev: 'R',
					initial: [{s:1,p:0},{s:1,p:9},{s:-1,p:90},{s:-1,p:99}],
					castle: true,
				},

				7: {
					name: 'queen',
					aspect: 'fr-proper-queen',
					graph: this.cbQueenGraph(geometry),
					value: 9.5,
					abbrev: 'Q',
					initial: [{s:1,p:15},{s:-1,p:84}],
				},
				
				8: {
					name: 'king',
					aspect: 'fr-king',
					isKing: true,
					graph: this.cbKingGraph(geometry),
					abbrev: 'K',
					initial: [{s:1,p:5},{s:-1,p:94}],
				},
				
				9: {
					name: 'dwarf',
					aspect: 'fr-man',
					graph: this.cbKingGraph(geometry),
					value: 2.7,
					abbrev: 'D',
					initial: [{s:1,p:10},{s:1,p:19},{s:-1,p:80},{s:-1,p:89}],
				},
				
				10: {
					name: 'elf',
					aspect: 'fr-saint',
					graph: this.cbMergeGraphs(geometry,
						this.cbBishopGraph(geometry),
						this.cbShortRangeGraph(geometry, [[1,0],[0,1],[0,-1],[-1,0]])
						),
					value: 5.5,
					abbrev: 'E',
					initial: [{s:1,p:13},{s:-1,p:86}],
				},
				
				11: {
					name: 'goblin',
					aspect: 'fr-proper-crowned-rook',
					graph: this.cbMergeGraphs(geometry,
						this.cbRookGraph(geometry),
						this.cbShortRangeGraph(geometry, [[1,1],[-1,1],[1,-1],[-1,-1]])
						),
					value: 7,
					abbrev: 'G',
					initial: [{s:1,p:16},{s:-1,p:83}],
				},
				
				12: {
					name: 'wizard',
					aspect: 'fr-lion',
					graph: this.cbMergeGraphs(geometry,
						this.cbKingGraph(geometry),
						this.cbKnightGraph(geometry),
						this.cbShortRangeGraph(geometry,
							[[2,0],[0,2],[-2,0],[0,-2], [2,2],[2,-2],[-2,2],[-2,-2]]),
						this.cbShortRangeGraph(geometry,
							[[1,0],[0,1],[-1,0],[0,-1], [1,1],[1,-1],[-1,1],[-1,-1]], null, f)
						),
					value: 15,
					abbrev: 'W',
					initial: [{s:1,p:14},{s:-1,p:85}],
				},
			},

			promote: function(aGame,piece,move) {
				if(piece.t==1)
					return [0];
				else if(piece.t==3)
					return [2];
				else if(piece.t==0 && geometry.R(move.t)==7)
					return [4,5,6,7];
				else if(piece.t==2 && geometry.R(move.t)==2)
					return [4,5,6,7];
				return [];
			},

			castle:{
				"5/0": {k:[4,3,2],r:[1,2,3],n:"O-O-O"},
				"5/9": {k:[6,7,8],r:[8,7],n:"O-O"},
				"94/90": {k:[93,92,91],r:[91,92],n:"O-O"},
				"94/99": {k:[95,96,97],r:[98,97,96],n:"O-O-O"},
			},

			evaluate: function(aGame,evalValues,material,totalPieces) {
				// check lack of material to checkmate
				var white=material[1].count;
				var black=material[-1].count;
				if(totalPieces[1] == 1) { // white king single
					var n = totalPieces[-1];
					if(n<4 && (black[4]==2 || n==2 && black[4]+black[5] || n==1)) {
						this.mFinished=true;
						this.mWinner=JocGame.DRAW;
					}
				}
				if(totalPieces[-1] == 1) { // black king single
					var n = totalPieces[1];
					if(n<4 && (white[4]==2 || n==2 && white[4]+white[4])) {
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

	var lionxlion; // 'tunnel parameter' to cbGetAttackers (Yeghh!)

	var OriginalQuickApply = Model.Board.cbQuickApply;
	Model.Board.cbQuickApply = function(aGame,move) {
		var tmp = OriginalQuickApply.apply(this, arguments);
		lionxlion = -2;
		if(move.c != null && this.pieces[move.c].t == 12) { // move captures Lion
			if(move.a == 'W') lionxlion = move.t;              // remember location of LxL capture
			else if(this.lastMove && this.lastMove.c && this.pieces[this.lastMove.c].t == 12)
				lionxlion = -3;                            // flags 'iron Lion'
		}
		if(move.via !== undefined) { // remove locust victim
			this.board[move.via] = -1;
			this.pieces[move.kill].p = -1;
			tmp.unshift({
				i: move.kill,
				f: -1,
				t: move.via,
			});
//			lionxlion = -2; // In Chu Shogi we should test here for P or GB bridge
		}
		return tmp;
	}

	var OriginalMoveGen = Model.Board.cbGeneratePseudoLegalMoves;
	Model.Board.cbGeneratePseudoLegalMoves = function(aGame) {
		var $this = this;
		this.specials = []; // for collecting locust captures

		var moves = OriginalMoveGen.apply(this, arguments);

		this.specials.forEach(function(move){ // candidate moves: Lion to occupied adjacent squares
			var graph = aGame.g.pTypes[8].graph[move.t]; // King graph at locust square
			var n = graph.length;
			for(var j=0; j<n; j++) { // all directions for second leg
				var to2 = graph[j][0] & 0xffff; // & MASK;
				var victim2 = (to2 == move.f ? -1 : $this.board[to2]); // no self-capt on igui!
				if(victim2 < 0 || $this.pieces[victim2].s != $this.mWho) // valid 2nd leg
					moves.push({
						f: move.f,
						t: to2,
						c: victim2 < 0 ? null : victim2,
						a: 'W',
						via: move.t,
						kill: move.c
					});
			}
		});

		return moves;
	}

	var OriginalGetAttackers = Model.Board.cbGetAttackers;
	Model.Board.cbGetAttackers = function(aGame,pos,who,isKing) {
		if(isKing) { // called for check test
			if(lionxlion == -3) return [1]; // capture of iron Lion: always illegal
			var checkers = OriginalGetAttackers.call(this, aGame, pos, who, true);
			if(checkers.length > 0) return checkers; // in any case in check if King in check
			if(lionxlion >= 0) // legality test of LxL
				return OriginalGetAttackers.call(this, aGame, lionxlion, who, false);
			return []; // King and royal Lion both safe
		}
		return OriginalGetAttackers.apply(this, arguments);
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
