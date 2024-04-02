
(function(){

    var firstRow=0;
	var lastRow=9;
	var firstCol=0;
	var lastCol=9;

	var geometry=Model.Game.cbBoardGeometryGrid(10,10);

	Model.Game.cbDefine=function(){

		var $this = this;

        function ShipGraph() {
		    var flags = $this.cbConstants.FLAG_MOVE | $this.cbConstants.FLAG_CAPTURE;
		    var graph={};
		    for(var pos=0;pos<geometry.boardSize;pos++) {
			    graph[pos]=[];
			    [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(function(delta) { // loop on all 4 diagonals
				    var pos1=geometry.Graph(pos,delta);
				    if(pos1!=null) {
					    for(var dir=1;dir<2;dir++) { // dir=0 for row, dir=1 for column
						    var nbMax = (dir==0) ? lastRow : lastCol;
						    var away=[] // hold the sliding line
						    for(var n=1;n<nbMax;n++) {
							    var delta2=[];
							    delta2[dir]=delta[dir]*n;
							    delta2[1-dir]=0; // delta2 is now only about moving orthogonally, away from the piece
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
			    });
		    }
		    return $this.cbMergeGraphs(geometry,
		       $this.cbShortRangeGraph(geometry,[[-1,-1],[-1,1],[1,-1],[1,1]]),
		       graph
		    );
	    }

// graphs
	/** Move graph for the Snake */
	    SnakeGraph = function(geometry,confine){
            return $this.cbSkiGraph(geometry,[[0,1],[0,-1]],1);
	    }

		function HoplitGraph() {
			var graph = $this.cbShortRangeGraph(geometry, [[2,-2],[-2,-2]], 0, $this.cbConstants.FLAG_MOVE ); // double pushes
			for(var pos=0;pos<geometry.boardSize;pos++) {
				if(pos < 70 || pos >= 79) graph[pos] = [];
			}
                        var graph2 = $this.cbShortRangeGraph(geometry, [[1,-1],[-1,-1]], 0, $this.cbConstants.FLAG_MOVE ); // non-captures
			graph = $this.cbMergeGraphs(geometry, graph, graph2 );
			graph2 = $this.cbShortRangeGraph(geometry, [[0,-1]], 0, $this.cbConstants.FLAG_CAPTURE ); // captures
			return $this.cbMergeGraphs(geometry, graph, graph2 );
		}

    return{
      geometry:geometry,
      pieceTypes:{
				0: {
					name: 'pawn',
					aspect: 'fr-pawn',
					graph: this.cbPawnGraph(geometry,1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					epCatch: false,
				},
				
				1: {
					name: 'ipawn',
					aspect: 'fr-pawn',
					graph: this.cbInitialPawnGraph(geometry,1),
					value: 1,
					abbrev: '',
					fenAbbrev: 'P',
					initial: [{s:1,p:20},{s:1,p:21},{s:1,p:22},{s:1,p:23},{s:1,p:24},{s:1,p:25},{s:1,p:26},{s:1,p:27},{s:1,p:28},{s:1,p:29}],
					epTarget: false,
				},
				
				2: {
					name: 'heilotes',
					aspect: 'fr-berolina',
					graph: HoplitGraph(geometry),
					value: 1,
					abbrev: '',
					fenAbbrev: 'H',
					epCatch: false,
				},

				3: {
					name: 'iheilotes',
					aspect: 'fr-berolina',
					graph: HoplitGraph(geometry),
					value: 1,
					abbrev: 'H',
					fenAbbrev: 'H',
					initial: [{s:-1,p:70},{s:-1,p:71},{s:-1,p:72},{s:-1,p:73},{s:-1,p:74},{s:-1,p:75},{s:-1,p:76},{s:-1,p:77},{s:-1,p:78},{s:-1,p:79}],
					epTarget: false,
				},
				
				4: {
					name: 'knight',
					aspect: 'fr-knight',
					graph: this.cbKnightGraph(geometry),
					value: 3.25,
					abbrev: 'N',
					initial: [{s:1,p:12},{s:1,p:17}],
				},
				
				5: {
					name: 'bishop',
					aspect: 'fr-bishop',
					graph: this.cbBishopGraph(geometry),
					value: 3.5,
					abbrev: 'B',
					initial: [{s:1,p:13},{s:1,p:16}],
				},

				6: {
					name: 'rook',
					aspect: 'fr-rook',
					graph: this.cbRookGraph(geometry),
					value: 5,
					abbrev: 'R',
					initial: [{s:1,p:11},{s:1,p:18}],
					castle: true,
				},

				7: {
					name: 'queen',
					aspect: 'fr-queen',
					graph: this.cbQueenGraph(geometry),
					value: 9.5,
					abbrev: 'Q',
					initial: [{s:1,p:14}],
				},
				
				8: {
					name: 'king',
					aspect: 'fr-king',
					isKing: 1,
					graph: this.cbKingGraph(geometry),
					abbrev: 'K',
					initial: [{s:1,p:15}],
				},
				
				9: {
					name: 'homoioi',//Spartiate
					aspect: 'fr-machine',
					graph: this.cbShortRangeGraph(geometry,[[0,-1],[0,1],[1,0],[-1,0],[-2,0],[0,2],[0,-2],[2,0]]),
					value: 3.1,
					abbrev: 'S',
					initial: [{s:-1,p:84},{s:-1,p:85}],
				},
				//Períoikoi skiritai Heílôtes Homoioi
				10: {
					name: 'skiritai',
					aspect: 'fr-admiral',
					graph: this.cbMergeGraphs(geometry,
            						this.cbShortRangeGraph(geometry, [[-1,0],[1,0]], 0, this.cbConstants.FLAG_MOVE ),
							this.cbShortRangeGraph(geometry, [[-1,-1],[-1,1],[1,-1],[1,1],[-2,-2],[-2,2],[2,-2],[2,2]])),
					value: 3.6,
					abbrev: 'L',
					initial: [{s:-1,p:81},{s:-1,p:88}],
				},
				
				11: {
					name: 'stratiarkhos',
					aspect: 'fr-proper-crowned-rook',
					graph: this.cbMergeGraphs(geometry,
            						this.cbRookGraph(geometry),
							this.cbShortRangeGraph(geometry, [[1,1], [-1,1], [1,-1], [-1,-1]])),
					value: 7,
					abbrev: 'G',
					initial: [{s:-1,p:82}],
				},
				
				12: {
					name: 'polemarchos',
					aspect: 'fr-proper-cardinal',
					graph: this.cbMergeGraphs(geometry,
            						this.cbBishopGraph(geometry),
							this.cbKnightGraph(geometry)),
					value: 8,
					abbrev: 'W',
					initial: [{s:-1,p:87}],
				},

				13: {
					name: 'king',
					aspect: 'fr-king',
					isKing: 1,
					graph: this.cbKingGraph(geometry),
					value: 4.50,
					abbrev: 'K',
					initial: [{s:-1,p:83}],
				},
				
				14: {
					name: 'king',
					aspect: 'fr-king',
					isKing: 2,
					graph: this.cbKingGraph(geometry),
					value: 4.50,
					abbrev: 'K',
					initial: [{s:-1,p:86}],
				},
				15: {
					name : 'Camel',
					abbrev : 'M',
					/*aspect : 'fr-camel',
					graph: this.cbShortRangeGraph(geometry,[[-3,-1],[-3,1],[3,-1],[3,1],[1,3],[1,-3],[-1,3],[-1,-3]]),
					value : 2.5,*/

					aspect : 'fr-wizard',
					graph : this.cbWizardGraph(geometry),
					value : 4.5,
                    initial: [{s:1,p:1},{s:1,p:8}],

					
				},
				16: {
					name : 'epibates',
					abbrev : 'X',
					aspect : 'fr-ship',
					graph : ShipGraph(geometry),
					value : 4.5,
                    initial: [{s:-1,p:90},{s:-1,p:99}],
				},
				17: {
	            	name: 'manticore',
	            	aspect: 'fr-rhino2',
	            	graph: this.cbRhinoGraph(geometry),
	            	value: 6,
	            	abbrev: 'U',
	            	initial: [{s:1,p:4},],
	            },	
				18: {
	            	name: 'griffon',
	            	aspect: 'fr-griffon',
	            	graph : this.cbGriffonGraph(geometry),
	            	value: 8,
	            	abbrev: 'A',
	            	initial: [{s:1,p:5},],
	            },
                19: {
                  name : 'amazon',
                  abbrev : 'Z',
                  aspect : 'fr-amazon',
                  graph : this.cbMergeGraphs(geometry,
                              this.cbKnightGraph(geometry),
                              this.cbQueenGraph(geometry)),
                  value : 12,
                  initial: [{s:-1,p:94}],
                },
                20: {
                  name : 'centaur',
                  abbrev : 'C',
                  aspect : 'fr-crowned-knight',
                  graph : this.cbMergeGraphs(geometry,
                    this.cbKnightGraph(geometry),
                    this.cbKingGraph(geometry)),
                  value : 5.25,
                  initial: [{s:-1,p:95}],
                },
                21: {
                  name : 'archer',
                  abbrev : 'V',
                  aspect : 'fr-bow',
                  graph : this.cbLongRangeGraph(geometry,[[-1,-1],[1,1],[-1,1],[1,-1]],null,this.cbConstants.FLAG_MOVE | this.cbConstants.FLAG_SCREEN_CAPTURE),
                  value : 2.5,
                  initial: [{s:1,p:3},{s:1,p:6}],
                },
                22: {
                  name : 'phoenix',
                  abbrev : 'F',
                  aspect : 'fr-phoenix',
                  graph : this.cbShortRangeGraph(geometry,[[2,2],[2,-2],[-2,2],[-2,-2],[1,0],[-1,0],[0,1],[0,-1]]),
                  value : 4,
                  initial: [{s:-1,p:80},{s:-1,p:89}],
                },
				23: {
					name: 'immortals',
					/*aspect: 'fr-sword',
					graph: this.cbMergeGraphs(geometry,
						this.cbLongRangeGraph(geometry,[[0,1],[0,-1]]),
						this.cbShortRangeGraph(geometry,[[1,0],[-1,0]])
						),
					value: 2.5,*/

                    aspect : 'fr-cobra',
                    graph : SnakeGraph(geometry),
                    value : 3.5,

					abbrev: 'D',
					initial: [{s:1,p:10},{s:1,p:19}],
				},
			},

			promote: function(aGame,piece,move) {
				if(piece.t==1)
					return [0];
				else if(piece.t==3)
					return [2];
				else if(piece.t==0 && geometry.R(move.t)==lastRow)
					return [4,5,6,7,13,17,18];
				else if(piece.t==2 && geometry.R(move.t)==firstRow) {
					if(this.kings[-1] < 0)    // King #1 missing
						return [9,10,11,12,13,16,20]; // so can promote to K #1
					if(this.kings[-2] < 0)    // King #2 missing
						return [9,10,11,12,14,16,20]; // so can promote to K #2
					return [9,10,11,12,16,20];
				}
				return [];
			},

			castle:{
				"4/0":{k:[3,2],r:[1,2,3],n:"O-O-O"},
				"4/7":{k:[5,6],r:[6,5],n:"O-O"},
			},

			evaluate: function(aGame,evalValues,material,totalPieces) {
				// check lack of material to checkmate
				var white=material[1].count;
				var black=material[-1].count;
				if(totalPieces[1] == 1) { // white king single
					var n = totalPieces[-1];
					if(n<3 && (black[10] || n==1)) { // KKL or KK
						this.mFinished=true;
						this.mWinner=JocGame.DRAW;
					}
				}
				if(totalPieces[-1] == 1) { // black king single
					var n = totalPieces[1];
					if(n<4 && (white[4]==2 || n==2 && white[4]+white[5])) { // KNNK, KNK or KBK
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
				for(var t=13;t<=15;t+=2)
					for(var s=1;s>=-1;s-=2) {
						var pieces=material[s].byType[t-5*s>>1];
						if(pieces)
							for(var i=0;i<pieces.length;i++)
								if(pieces[i].m)
									minorPiecesMoved+=s;
					}
				if(minorPiecesMoved!=0) {
					evalValues['minorPiecesMoved']=minorPiecesMoved;
				}
				if(black[12] + black[13] == 2) {
					var diff = evalValues["pieceValue"];
					var sum = diff/evalValues["pieceValueRatio"] - 1;
					evalValues["pieceValue"] -= 4.5; // value of spare King
					evalValues["pieceValueRatio"] = (diff - 4.5)/(sum + 5.5);
				}
			},
			
		};
	}

	function TrackKings(thiss,move) {
		if(move.c != null) { // test if King was captured
			if(move.t == thiss.kings[-1]) thiss.kings[-1] = -1; else
			if(move.t == thiss.kings[-2]) thiss.kings[-2] = -1;
		}
	}

	var OriginalApplyMove = Model.Board.ApplyMove;
	Model.Board.ApplyMove = function(aGame,move) {
		TrackKings(this,move);
		OriginalApplyMove.apply(this, arguments);
	}

	var OriginalQuickApply = Model.Board.cbQuickApply;
	Model.Board.cbQuickApply = function(aGame,move) {
		var saved = {       // remember King locations
			firstKing:  this.kings[-1],
			secondKing: this.kings[-2],
		};
		TrackKings(this,move);
		var tmp = OriginalQuickApply.apply(this, arguments);
		tmp.unshift(saved);
		return tmp;
	}

	var OriginalQuickUnapply = Model.Board.cbQuickUnapply;
	Model.Board.cbQuickUnapply = function(aGame,undo) {
		var saved = undo.shift();
		this.kings[-1] = saved.firstKing; // restore King locations
		this.kings[-2] = saved.secondKing;
		OriginalQuickUnapply.call(this, aGame, undo);
	}

	var OriginalGetAttackers = Model.Board.cbGetAttackers;
	Model.Board.cbGetAttackers = function(aGame,pos,who,isKing) {
		if(isKing == 100 && who == -1) { // called to see if Spartans in check
			if(this.kings[-2] < 0) return OriginalGetAttackers.call(this, aGame, this.kings[-1], -1, true);
			if(this.kings[-1] < 0) return OriginalGetAttackers.call(this, aGame, this.kings[-2], -1, true);
			var checkers = OriginalGetAttackers.call(this, aGame, this.kings[-1], -1, true);
			if(checkers.length <= 0) return checkers; // King #1 not attacked => OK
			return OriginalGetAttackers.call(this, aGame, this.kings[-2], -1, true);
		}
		return OriginalGetAttackers.apply(this, arguments);
	}

	var OriginalSEE = Model.Board.cbStaticExchangeEval;
	Model.Board.cbStaticExchangeEval = function(aGame,pos,who,isKing) {
		royal = this.kings[-2] < 0 ? 13 : // detect if only one King
		        this.kings[-1] < 0 ? 14 : 0; // and if so, which one
		if(!royal) // more Kings; use configured value for sorting and scoring
			return OriginalSEE.apply(this,arguments);
		var oldValue = aGame.g.pTypes[royal].value;

		aGame.g.pTypes[royal].value = 100; // use high value for last remaining King
		var tmp = OriginalSEE.apply(this,arguments);
		aGame.g.pTypes[royal].value = oldValue;
		return tmp;
	}

	var OriginalEvaluate = Model.Board.Evaluate;
	Model.Board.Evaluate = function(aGame) {
		var king = (this.kings[-2] > this.kings[-1] ? this.kings[-2] : this.kings[-1]); // backward-most (present) King
		var saved = this.kings[-1];
		this.kings[-1] = king; // use safest (?) King in eval
		OriginalEvaluate.apply(this, arguments);
		this.kings[-1] = saved; // be sure not to mess with the original tracking
	}

})();
