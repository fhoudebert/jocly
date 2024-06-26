
(function(){

	var geometry=Model.Game.cbBoardGeometryGrid(8,8);

	Model.Game.cbDefine=function(){

		var $this = this;
		var c=this.cbConstants;
		var boundTypes=[5,6,11]; // Elephant, Mortar and Adjutant

		// Movement/capture graph for the cobra

		function CobraGraph(range) {
			var flags = c.FLAG_MOVE | c.FLAG_CAPTURE;
			var graph={};
			for(var pos=0;pos<geometry.boardSize;pos++) {
				graph[pos]=[];
				for(var i=0; i<8; i++) {
					var delta = [[-2,-1],[1,2],[2,1],[1,-2],[-2,1],[-1,2],[2,-1],[-1,-2]][i]; // first (Knight) jumps
					var pos1=geometry.Graph(pos,delta);
					if(pos1!=null) {
						var away=[] // hold the sliding line
						for(var n=0;n<range;n++) { // run along line, starting at corner
							var delta2=[delta[0],delta[1]];
							var dir = i&1; // index of coordinate of delta with value +/- 2
							delta2[1-dir]=0; // zero the other (which was +/- 1)
							delta2[dir]=delta[dir]*n>>1; // and take next step along the line
							var pos2=geometry.Graph(pos1,delta2);
							if(pos2!=null) {
								away.push(pos2 | flags);
							}
						}
						if(away.length>0)
							graph[pos].push($this.cbTypedArray(away));
					}					
				}
			}
			return graph;
		}

		// Movement/capture graph for the aanca (adapted from Metamachy's eagle)

		function AancaGraph() {
			var flags = c.FLAG_MOVE | c.FLAG_CAPTURE;
			var graph={};
			for(var pos=0;pos<geometry.boardSize;pos++) {
				graph[pos]=[];
				for(var i=0; i<4; i++) {
					var delta = [[-1,0],[0,1],[1,0],[0,-1]][i]; // first (orthogonal)steps
					var pos1=geometry.Graph(pos,delta);
					if(pos1!=null) {
						for(var j=-1;j<2;j+=2) { // 1 or -1, for two opposite directions of deflection
							var away=[] // hold the sliding line
							for(var n=1;n<7;n++) { // board is 8 cells long, so only consider max 7 cell displacements
								var delta2=[delta[0],delta[1]];
								var dir = i&1; // index of non-zero coordinate of delta (which was ordered for that purpose)
								delta2[dir]=delta[dir]*n; // magnify it
								delta2[1-dir]=j*delta2[dir]; // delta2 is now only about moving diagonally, away from the piece
								var pos2=geometry.Graph(pos1,delta2);
								if(pos2!=null) {
									if(n==1) // possible to slide at least 1 cell, make sure the diagonal cell is not occupied, but cannot move to this cell
										away.push(pos1 | $this.cbConstants.FLAG_STOP);
									away.push(pos2 | flags);
								}
							}
							if(away.length>0)
								graph[pos].push($this.cbTypedArray(away));
						}
					}					
				}
			}
			return $this.cbMergeGraphs(geometry,
			   $this.cbShortRangeGraph(geometry,[[0,-1],[0,1],[1,0],[-1,0]]),
			   graph
			);
		}

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
					value: 3.25,
					abbrev: 'N',
					initial: [{s:-1,p:62},{s:1,p:6}],
				},
				
				5: {
					name: 'elephant',
					aspect: 'fr-elephant',
					graph: this.cbShortRangeGraph(geometry,
						[[1,-1],[1,1],[-1,1],[-1,-1],[-2,2],[2,2],[2,-2],[-2,-2]]),
					value: 3.4,
					abbrev: 'E',
					initial: [{s:1,p:2},{s:-1,p:58}],
				},

				6: {
					name: 'mortar',
					aspect: 'fr-cannon2',
					graph: this.cbShortRangeGraph(geometry,
						[[3,-3],[3,3],[-3,3],[-3,-3],[-2,2],[2,2],[2,-2],[-2,-2]]),
					value: 2.6,
					abbrev: 'M',
					initial: [{s:1,p:5},{s:-1,p:61}],
				},

				9: {
					name: 'unicorn',
					aspect: 'fr-unicorn',
					graph: this.cbMergeGraphs(geometry,
						this.cbKnightGraph(geometry),
						this.cbShortRangeGraph(geometry, [[0,-1],[0,1],[1,0],[-1,0]])
						),
					value: 4.8,
					abbrev: 'U',
					initial: [{s:1,p:0},{s:-1,p:56}],
					castle: true,
				},
				
				8: {
					name: 'king',
					aspect: 'fr-king',
					isKing: true,
					graph: this.cbKingGraph(geometry),
					abbrev: 'K',
					initial: [{s:1,p:4},{s:-1,p:60}],
				},
				
				7: {
					name: 'phoenix',
					aspect: 'fr-phoenix',
					graph: this.cbShortRangeGraph(geometry,
						[[0,-1],[0,1],[1,0],[-1,0],[-2,2],[2,2],[2,-2],[-2,-2]]),
					value: 3.1,
					abbrev: 'F',
					initial: [{s:-1,p:57},{s:1,p:1}],
				},
				
				10: {
					name: 'cobra',
					aspect: 'fr-cobra',
					graph: CobraGraph(2),
					value: 5.5,
					abbrev: 'C',
					initial: [{s:1,p:7},{s:-1,p:63}],
					castle: true,
				},
				
				11: {
					name: 'adjutant',
					aspect: 'fr-proper-crowned-rook',
					graph: this.cbMergeGraphs(geometry,
            						this.cbBishopGraph(geometry),
							this.cbLongRangeGraph(geometry, [[-2,0],[2,0],[0,-2],[0,2]])
						),
					value: 7,
					abbrev: 'J',
				},
				
				12: {
					name: 'acromantula',
					aspect: 'fr-spider',
					graph: AancaGraph(),
					value: 7.5,
					abbrev: 'A',
					initial: [{s:-1,p:59},{s:1,p:3}],
				},
				
				13: {
					name: 'wbrute',
					aspect: 'fr-corporal',
					graph: this.cbShortRangeGraph(geometry,
						[[1,-1],[-1,1],[1,1],[-1,-1],[0,-1]],null,c.FLAG_MOVE|c.FLAG_CAPTURE_KING),
					value: 0.9,
					abbrev: 'B',
					initial: [{s:1,p:-1},{s:1,p:-1},{s:1,p:-1},{s:1,p:-1},{s:1,p:-1},{s:1,p:-1},{s:1,p:-1},{s:1,p:-1}],
				},
				
				14: {
					name: 'bbrute',
					aspect: 'fr-corporal',
					graph: this.cbShortRangeGraph(geometry,
						[[1,-1],[-1,1],[1,1],[-1,-1],[0,1]],null,c.FLAG_MOVE|c.FLAG_CAPTURE_KING),
					value: 0.9,
					abbrev: 'B',
					initial: [{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1},{s:-1,p:-1}],
				}

			},

			promote: function(e,piece,move) {
				if(piece.t==1)
					return [0];
				else if(piece.t==3)
					return [2];
				else if(piece.t==0 && geometry.R(move.t)==7)
					return [4,5,6,7,9,10,11,13];
				else if(piece.t==2 && geometry.R(move.t)==0) {
					return [4,5,6,7,9,10,11,14];
				}
				return [];
			},

			castle:{
				"4/0":{k:[3,2],r:[1,2,3],n:"O-O-O"},
				"4/7":{k:[5,6],r:[6,5],n:"O-O"},
				"60/56":{k:[59,58],r:[57,58,59],n:"O-O-O"},
				"60/63":{k:[61,62],r:[62,61],n:"O-O"}
			},

			evaluate: function(aGame,evalValues,material,pieceCount) {

				var $this=this;

				function Draw() {
					$this.mFinished=true;
					$this.mWinner=JocGame.DRAW;
				}

				var wm=material[1], bm=material[-1];
				var white=wm.count;
				var black=bm.count;
				var wpawns=white[0]+white[1];
				var bpawns=black[2]+black[3];

				// color binding
				var cnt=[0,0,0,0];
				for(var i=0;i<3;i++) { // three color-bound types
					var type=boundTypes[i];
					var pieces=wm.byType[type];
					if(pieces) for(var j=0;j<pieces.length;j++) {
						var sqr=pieces[j].p;
						cnt[sqr*9>>3&1]++;
					}
					var pieces=bm.byType[type];
					if(pieces) for(var j=0;j<pieces.length;j++) {
						var sqr=pieces[j].p;
						cnt[(sqr*9>>3&1)+2]++;
					}
				}
				if(cnt[0]!=cnt[1]) evalValues.pieceValue-=0.5; // pair bonus
				if(cnt[2]!=cnt[3]) evalValues.pieceValue+=0.5;
				if(pieceCount[1]-wpawns==2 && pieceCount[-1]-bpawns==2 && (cnt[0]+cnt[3]==0 || cnt[1]+cnt[2]==0)) {
					var adv=wpawns-bpawns;
					if(adv<3 && adv>-3) evalValues.pieceValue-=0.4*adv; // unlike color bounds
				}
				
				// check lack of material to checkmate
				if(pieceCount[1]==1 && bpawns==0) { // white king single, black no Pawns
					if(pieceCount[-1] < 3) Draw();
					if(cnt[2]*cnt[3]==0 && pieceCount[-1]-cnt[2]-cnt[3]==1) Draw();
				}
				if(pieceCount[-1]==1 && wpawns==0) { // black king single, white no Pawns
					if(pieceCount[1] < 3) Draw();
					if(cnt[0]*cnt[1]==0 && pieceCount[1]-cnt[0]-cnt[1]==1) Draw();
				}
				
				// check 50 moves without capture
				if(this.noCaptCount>=128) Draw();

				// motivate pawns to reach the promotion line
				var distPromo=aGame.cbUseTypedArrays?new Int8Array(3):[0,0,0];
				var height=geometry.height;
				var pawns=wm.byType[0],pawnsLength;
				if(pawns) {
					pawnsLength=pawns.length;
					for(var i=0;i<pawnsLength;i++)
						switch(height-geometry.R(pawns[i].p)) {
						case 2: distPromo[0]++; break;
						case 3: distPromo[1]++; break;
						case 4: distPromo[2]++; break;
						}
				}
				pawns=bm.byType[2],pawnsLength;
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
				for(var t=4;t<=7;t++)
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

	function Pair(aBoard,move) { // add new Brute on from-square
		var brute=aBoard.board[move.t]-8;
		aBoard.board[move.f]=brute;
		aBoard.pieces[brute].p=move.f;
		return brute;
	}

	var OriginalApplyMove=Model.Board.ApplyMove;
	Model.Board.ApplyMove=function(aGame,move){
		OriginalApplyMove.apply(this,arguments);
		if(move.pr && move.pr>12)
			this.zSign^=aGame.bKey(this.pieces[Pair(this,move)]);
	}

	var OriginalQuickApply=Model.Board.cbQuickApply;
	Model.Board.cbQuickApply=function(aGame,move){
		var undo=OriginalQuickApply.apply(this,arguments);
		if(move.pr && move.pr>12)
			undo.unshift({i:Pair(this,move), f:move.f, t:-1});
		return undo;
	}

})();
