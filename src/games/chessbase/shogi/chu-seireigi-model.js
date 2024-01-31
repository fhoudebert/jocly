
(function(){
	var geometry = Model.Game.cbDropGeometry(12,12,0);
	
	Model.Game.cbOnStaleMate = -1; // stalemate = last player wins
	Model.Game.cbMaxRepeats = 4;

	Model.Game.cbSetPawnLimit(1);

  Model.Game.cbPerpEval = function(board, aGame) {
		var loop = aGame.GetRepeatOccurence(board, 1) >> 1;
		if(board.oppoCheck >= loop) return -board.mWho;
		if(board.check >= loop) return board.mWho;
		return JocGame.DRAW; // draw if neither is perpetually checking
  }

	Model.Game.cbMateEval = function(board) { // detect Pawn-drop mate
		var m = board.lastMove;
		var piece = board.pieces[board.board[m.t]];
		if(piece.t < 2) { // Pawn
		  var f = geometry.C(m.f);
		  if(f==1 || f==geometry.width-2) return board.mWho; // dropped: flip result
		}
		return -board.mWho;
  }

	Model.Game.cbDefine = function() {
		
		var $this = this;
		var hitrun=this.cbConstants.FLAG_HITRUN;		// for Lion's adjacent enemy, to add 2nd leg
		var locust=this.cbConstants.FLAG_CHECKER		// for Falcon & Eagle jump, to empty...
			 | this.cbConstants.FLAG_SPECIAL_CAPTURE;	// ... or occupied
		var igui=this.cbConstants.FLAG_RIFLE;	
        var adjacent=[[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[0,1],[0,-1],[1,0]];
		var definition = {
			
			geometry: geometry,
			
			pieceTypes: {

				0: {
					name: 'pawn-w',
					aspect: 'sh-pawn',
					graph: this.cbDropGraph(geometry, [[0,1]],[],0,1),
					value: 0.8,
					abbrev: '',
					fenAbbrev: 'P',
					initial: [{s:1,p:50},{s:1,p:51},{s:1,p:52},{s:1,p:53},{s:1,p:54},{s:1,p:55},{s:1,p:56},{s:1,p:57},{s:1,p:58},{s:1,p:59},{s:1,p:60},{s:1,p:61}],
					demoted: 1,
					hand: 0,
				},
				
				1: {
					name: 'pawn-b',
					aspect: 'sh-pawn',
					graph: this.cbDropGraph(geometry, [[0,-1]],[],1,0),
					value: 0.8,
					abbrev: '',
					fenAbbrev: 'P',
					initial: [{s:-1,p:130},{s:-1,p:131},{s:-1,p:132},{s:-1,p:133},{s:-1,p:134},{s:-1,p:135},{s:-1,p:136},{s:-1,p:137},{s:-1,p:138},{s:-1,p:139},{s:-1,p:140},{s:-1,p:141}],
					demoted: 0,
					hand: 0,
				},

				2: {
					name: 'lance-w',
					aspect: 'sh-lance',
					graph: this.cbDropGraph(geometry, [],[[0,1]],0,1),
					value: 2,
					abbrev: 'L',
					initial: [{s:1,p:2},{s:1,p:13}],
					demoted: 3,
					hand: 1,
				},
				
				3: {
					name: 'lance-b',
					aspect: 'sh-lance',
					graph: this.cbDropGraph(geometry, [],[[0,-1]],1,0),
					value: 2,
					abbrev: 'L',
					initial: [{s:-1,p:178},{s:-1,p:189}],
					demoted: 2,
					hand: 1,
				},
				
				4: {
					name: 'knight-w',
					aspect: 'sh-knight',
					graph: this.cbDropGraph(geometry, [[1,2],[-1,2]],[],0,2),
					value: 1.3,
					abbrev: 'N',
					initial: [{s:1,p:19},{s:1,p:28}],
					demoted: 5,
					hand: 2,
				},
				
				5: {
					name: 'knight-b',
					aspect: 'sh-knight',
					graph: this.cbDropGraph(geometry, [[1,-2],[-1,-2]],[],2,0),
					value: 1.3,
					abbrev: 'N',
					initial: [{s:-1,p:163},{s:-1,p:172}],
					demoted: 4,
					hand: 2,
				},
				
				6: {
					name: 'silver-w',
					aspect: 'sh-silver',
					graph: this.cbDropGraph(geometry, [[0,1],[1,1],[1,-1],[-1,1],[-1,-1]],[]),
					value: 2.3,
					abbrev: 'S',
					initial: [{s:1,p:5},{s:1,p:10}],
					demoted: 7,
					hand: 3,
				},
				
				7: {
					name: 'silver-b',
					aspect: 'sh-silver',
					graph: this.cbDropGraph(geometry, [[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],[]),
					value: 2.3,
					abbrev: 'S',
					initial: [{s:-1,p:181},{s:-1,p:186}],
					demoted: 6,
					hand: 3,
				},
				
				8: {
					name: 'bishop',
					aspect: 'sh-bishop',
					graph: this.cbDropGraph(geometry, [],[[1,1],[1,-1],[-1,1],[-1,-1]]),
					value: 3.9,
					abbrev: 'B',
					initial: [{s:1,p:38},{s:-1,p:153}],
					hand: 5,
				},

				9: {
					name: 'rook',
					aspect: 'sh-rook',
					graph: this.cbDropGraph(geometry, [], [[0,1],[1,0],[-1,0],[0,-1]]),
					value: 4.9,
					abbrev: 'R',
					initial: [{s:1,p:41},{s:-1,p:150}],
					castle: true,
					hand: 6,
				},

				10: {
					name: 'gold-w',
					aspect: 'sh-gold',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1]],[]),
					value: 2.8,
					abbrev: 'G',
					initial: [{s:1,p:6},{s:1,p:9}],
					demoted: 11,
					hand: 4,
				},
				
				11: {
					name: 'gold-b',
					aspect: 'sh-gold',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,-1],[-1,-1]],[]),
					value: 2.8,
					abbrev: 'G',
					initial: [{s:-1,p:182},{s:-1,p:185}],
					demoted: 10,
					hand: 4,
				},
				12: {
					name: 'elephant-w',
					aspect: 'sh-elephant',
					value: 4,
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[1,-1],[-1,-1],[1,1],[-1,1]],[[1,1],[-1,1]]),
					abbrev: 'E',
					demoted: 13,
					hand: 5,
					initial: [{s:1,p:8}],
				},

				
				13: {
					name: 'elephant-b',
					aspect: 'sh-elephant',
					graph: this.cbDropGraph(geometry, [[-1,1],[1,1],[1,0],[-1,0],[0,-1],[1,-1],[-1,-1]],[[1,-1],[-1,-1]]),
					value: 4,
					abbrev: 'E',
					demoted: 12,
					hand: 5,
					initial: [{s:-1,p:183}],
				},

				14: {
					name: 'copper-w',
					aspect: 'sh-copper',
					graph: this.cbShortRangeGraph(geometry,[[0,1],[0,-1],[-1,1],[1,1]]),
					value: 2.3,
					abbrev: 'C',
					hand: 6,
					demoted: 15,
					initial: [{s:1,p:4},{s:1,p:11}],
				},

				15: {
					name: 'copper-b',
					aspect: 'sh-copper',
					graph: this.cbShortRangeGraph(geometry,[[0,1],[0,-1],[-1,-1],[1,-1]]),
					value: 2.3,
					abbrev: 'C',
					hand: 6,
					demoted: 14,
					initial: [{s:-1,p:180},{s:-1,p:187}],
				},
				16: {
					name: 'wolf-w',
					aspect: 'sh-wolf',
					graph: this.cbDropGraph(geometry, [[1,1],[1,0],[-1,0],[-1,1]],[[0,1],[0,-1]]),
					value: 5.4,
					abbrev: 'W',
					hand: 7,
					demoted: 17,
					initial: [{s:1,p:36},{s:1,p:43}],
				},

				17: {
					name: 'wolf-b',
					aspect: 'sh-wolf',
					graph: this.cbDropGraph(geometry, [[-1,-1],[1,0],[-1,0],[1,-1]],[[0,1],[0,-1]]),
					value: 5.4,
					abbrev: 'W',
					hand: 7,
					demoted: 16,
					initial: [{s:-1,p:148},{s:-1,p:155}],
				},
				18: {
					name: 'ram-w',
					aspect: 'sh-ram',
					graph: this.cbDropGraph(geometry, [],[[1,1],[-1,1]]),
					value: 3.1,
					hand: 8,
					abbrev: 'RS',
					demoted: 19,
					initial: [{s:1,p:3},{s:1,p:12}],
					
				},
				19: {
					name: 'ram-b',
					aspect: 'sh-ram',
					graph: this.cbDropGraph(geometry, [],[[1,-1],[-1,-1]]),
					value: 3.1,
					hand: 8,
					abbrev: 'RS',
					demoted: 18,
					initial: [{s:-1,p:179},{s:-1,p:188}],
				},
				20: {
					name: 'bear-w',
					aspect: 'sh-bear',
					graph: this.cbDropGraph(geometry, [[0,-1],[1,0],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1],[2,1],[-2,1]],[]),
					value: 4.4,
					hand: 9,
					abbrev: 'SB',
					demoted: 21,
					
					initial: [{s:1,p:21},{s:1,p:26}],
					
				},
				21: {
					name: 'bear-b',
					aspect: 'sh-bear',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1],[2,-1],[-2,-1]] ,[]),
					
					value: 4.4,
					hand: 9,
					abbrev: 'SB',
					demoted: 20,
					initial: [{s:-1,p:165},{s:-1,p:170}],

				},

				22: {
					name: 'leopard-w',
					aspect: 'sh-leopard',
					graph: this.cbDropGraph(geometry, [[-1,1],[1,1],[0,-1]],[[-1,0],[1,0]]),
					value: 4.9,
					hand: 10,
					abbrev: 'GL',
					demoted: 23,
					initial: [{s:1,p:35},{s:1,p:44}],
					
				},
				23: {
					name: 'leopard-b',
					aspect: 'sh-leopard',
					graph: this.cbDropGraph(geometry, [[-1,-1],[1,-1],[0,1]],[[-1,0],[1,0]]),
					
					value: 4.9,
					hand: 10,
					abbrev: 'GL',
					demoted: 22,
					initial: [{s:-1,p:147},{s:-1,p:156}],

				},

				24: {
					name: 'swallow-w',
					aspect: 'sh-swallow',
					graph: this.cbDropGraph(geometry, [[-2,2],[0,2],[2,2]],[]),
					value: 1.8,
					hand: 11,
					abbrev: 'FS',
					demoted: 25,
					initial: [{s:1,p:34},{s:1,p:45}],
					
				},
				25: {
					name: 'swallow-b',
					aspect: 'sh-swallow',
					graph: this.cbDropGraph(geometry, [[-2,-2],[0,-2],[2,-2]],[]),
					
					value: 1.8,
					hand: 11,
					abbrev: 'FS',
					demoted: 24,
					initial: [{s:-1,p:146},{s:-1,p:157}],

				},
				26: {
					name: 'rabbit-w',
					aspect: 'sh-rabbit',
					value: 4.2,
					graph: this.cbDropGraph(geometry, [],[[1,1],[0,1],[-1,1]]),
					abbrev: 'RU',
					demoted: 27,
					hand: 12,
					initial: [{s:1,p:37},{s:1,p:42}],
				},
				27: {
					name: 'rabbit-b',
					aspect: 'sh-rabbit',
					graph: this.cbDropGraph(geometry, [],[[1,-1],[0,-1],[-1,-1]]),
					value: 4.2,
					abbrev: 'RU',
					demoted: 26,
					hand: 12,
					initial: [{s:-1,p:149},{s:-1,p:154}],
				},

				28: {
					name: 'owl-w',
					aspect: 'sh-owl',
					graph: this.cbDropGraph(geometry, [[0,1],[-1,0],[0,-1],[1,0],[-1,2],[1,2],[2,1],[2,-1],[-2,1],[-2,-1],[-1,-2],[1,-2]],[]),
					value: 5.6,
					hand: 13,
					abbrev: 'OL',
					demoted: 29,
					initial: [{s:1,p:24}],
				},

				29: {
					name: 'owl-b',
					aspect: 'sh-owl',
					graph: this.cbDropGraph(geometry, [[0,1],[-1,0],[0,-1],[1,0],[-1,2],[1,2],[2,1],[2,-1],[-2,1],[-2,-1],[-1,-2],[1,-2]],[]),
					value: 5.6,
					demoted: 28,
					hand: 13,
					abbrev: 'OL',
					initial: [{s:-1,p:167}],	
				},
				30: {
					name: 'crow-w',
					aspect: 'sh-crow',
					graph: this.cbDropGraph(geometry, [[1,1],[-1,-1],[1,-1],[-1,1],[0,2],[2,2],[-2,2],[0,-2],[2,0],[-2,-2],[-2,0],[2,-2]],[]),
					value: 5.2,
					demoted: 31,
					hand: 14,
					abbrev: 'CR',
					
					initial: [{s:1,p:23}],
					
				},
				31: {
					name: 'crow-b',
					aspect: 'sh-crow',
					graph: this.cbDropGraph(geometry, [[1,1],[-1,-1],[1,-1],[-1,1],[0,2],[2,2],[-2,2],[0,-2],[2,0],[-2,-2],[-2,0],[2,-2]],[]),
					value: 5.2,
					demoted: 30,
					hand: 14,
					abbrev: 'CR',
					initial: [{s:-1,p:168}],
				},

				32: {
					name: 'p-pawn-w',
					aspect: 'sh-tokin',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1]],[]),
					value: 2.6,
					abbrev: '+P',
					demoted: 1,
				},
				
				33: {
					name: 'p-pawn-b',
					aspect: 'sh-tokin',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,-1],[-1,-1]],[]),
					value: 2.6,
					abbrev: '+P',
					demoted: 0,
				},
				
				34: {
					name: 'p-lance-w',
					aspect: 'sh-promoted-lance',
					graph: this.cbDropGraph(geometry, [[2,1],[2,-1],[-2,1],[-2,-1],[0,1],[0,-1]],[[1,0],[-1,0]]),
					value: 4.5,
					abbrev: '+L',
					demoted: 3,
				},
				
				35: {
					name: 'p-lance-b',
					aspect: 'sh-promoted-lance',
					graph: this.cbDropGraph(geometry, [[2,1],[2,-1],[-2,1],[-2,-1],[0,1],[0,-1]],[[1,0],[-1,0]]),
					value: 4.5,
					abbrev: '+L',
					demoted: 2,
				},
				
				36: {
					name: 'p-knight-w',
					aspect: 'sh-promoted-knight',
					graph: this.cbDropGraph(geometry, [[-2,2],[2,2],[0,2],[1,-2],[-1,-2],[0,1],[1,1],[1,-1],[-1,1],[-1,-1]],[]),
					value: 3.7,
					abbrev: '+N',
					demoted: 5,
				},
				
				37: {
					name: 'p-knight-b',
					aspect: 'sh-promoted-knight',
					graph: this.cbDropGraph(geometry, [[-2,-2],[2,-2],[0,-2],[1,2],[-1,2],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],[]),
					value: 3.7,
					abbrev: '+N',
					demoted: 4,
				},
				
				38: {
					name: 'p-silver-w',
					aspect: 'sh-promoted-silver',
					graph: this.cbDropGraph(geometry, [[1,1],[1,0],[-1,0],[-1,1]],[[0,1],[0,-1]]),
					value: 4,
					abbrev: '+S',
					demoted: 7,
				},
				
				39: {
					name: 'p-silver-b',
					aspect: 'sh-promoted-silver',
					graph: this.cbDropGraph(geometry, [[-1,-1],[1,0],[-1,0],[1,-1]],[[0,1],[0,-1]]),
					value: 4,
					abbrev: '+S',
					demoted: 6,
				},
				
				40: {
					name: 'horse',
					aspect: 'sh-horse',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1]],[[1,1],[1,-1],[-1,1],[-1,-1]]),
					value: 5.4,
					abbrev: '+B',
					demoted: 8,
				},
				
				41: {
					name: 'dragon',
					aspect: 'sh-dragon',
					graph: this.cbDropGraph(geometry, [[1,1],[1,-1],[-1,1],[-1,-1]], [[0,1],[1,0],[-1,0],[0,-1]]),
					value: 6.3,
					abbrev: '+R',
					demoted: 9,
				},
				42: {
					name: 'p-gold-w',
					aspect: 'sh-promoted-gold',
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[1,-1],[-1,-1],[1,1],[-1,1]],[[1,1],[-1,1]]),
					value: 4,
					abbrev: '+G',
					demoted: 11,
				},
				43: {
					name: 'p-gold-b',
					aspect: 'sh-promoted-gold',
					graph: this.cbDropGraph(geometry, [[-1,1],[1,1],[1,0],[-1,0],[0,-1],[1,-1],[-1,-1]],[[1,-1],[-1,-1]]),
					value: 4,
					abbrev: '+G',
					demoted: 10,
				},
				44: {
					name: 'p-elephant-w',
					aspect: 'sh-teacher',
					graph: this.cbDropGraph(geometry, [[0,1],[-1,0],[-1,-1],[1,-1]],[[1,1],[0,1],[0,-1],[-1,1]]),
					value: 7,
					abbrev: '+E',
					demoted: 13,
				},
				45: {
					name: 'p-elephant-b',
					aspect: 'sh-teacher',
					graph: this.cbDropGraph(geometry, [[-1,1],[1,1],[1,0],[-1,0]],[[1,-1][0,1],[0,-1],[-1,-1]]),
					value: 7,
					abbrev: '+E',
					demoted: 12,
				},
				46: {
					name: 'p-copper-w',
					aspect: 'sh-promoted-leopard',
					graph: this.cbDropGraph(geometry, [[-1,1],[1,1],[0,-1]],[[-1,0],[1,0]]),
					value: 4,
					abbrev: '+C',
					demoted: 15,
				},
				47: {
					name: 'p-copper-b',
					aspect: 'sh-promoted-leopard',
					graph: this.cbDropGraph(geometry, [[-1,-1],[1,-1],[0,1]],[[-1,0],[1,0]]),
					value: 4,
					abbrev: '+C',
					demoted: 14,
				},
				48: {
					name: 'p-wolf-w',
					aspect: 'sh-boar',
					graph: this.cbDropGraph(geometry, [],[[0,1],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]]),
					value: 7.2,
					abbrev: '+W',
					demoted: 17,
				},
				49: {
					name: 'p-wolf-b',
					aspect: 'sh-boar',
					graph: this.cbDropGraph(geometry, [],[[0,1],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]]),
					value: 7.2,
					abbrev: '+W',
					demoted: 16,
				},
				50: {
					name: 'p-ram-w',
					aspect: 'sh-stag',
					graph: this.cbDropGraph(geometry, [[1,0],[-1,0],[1,2],[-1,2],[1,-2],[-1,-2]],[[0,1],[0,-1]]),
					value: 5.6,
					abbrev: '+RS',
					demoted: 19,
				},
				51: {
					name: 'p-ram-b',
					aspect: 'sh-stag',
					graph: this.cbDropGraph(geometry, [[1,0],[-1,0],[1,2],[-1,2],[1,-2],[-1,-2]],[[0,1],[0,-1]]),
					value: 5.6,
					abbrev: '+RS',
					demoted: 18,
				},		
				52: {
					name: 'p-bear-w',
					aspect: 'sh-dog',
					graph: this.cbDropGraph(geometry, [[-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1]],[[0,1],[1,1],[-1,1]]),
					value: 6,
					abbrev: '+SB',
					demoted: 21,
				},
				53: {
					name: 'p-bear-b',
					aspect: 'sh-dog',
					graph: this.cbDropGraph(geometry, [[-2,1],[-1,1],[0,1],[1,1],[2,1]] ,[[0,-1],[-1,-1],[1,-1]]),
					value: 6,
					abbrev: '+SB',
					demoted: 20,
				},

				54: {
					name: 'p-leopard-w',
					aspect: 'sh-ox',
					graph: this.cbDropGraph(geometry, [[-1,-1],[0,-1],[1,-1]],[[0,1],[1,1],[-1,1]]),
					value: 7,
					abbrev: '+GL',
					demoted: 23,
				},
				55: {
					name: 'p-leopard-b',
					aspect: 'sh-ox',
					graph: this.cbDropGraph(geometry, [[-1,1],[0,1],[1,1]] ,[[0,-1],[-1,-1],[1,-1]]),
					value: 7,
					abbrev: '+GL',
					demoted: 22,
				},
				56: {
					name: 'p-swallow-w',
					aspect: 'sh-bird',
					graph: this.cbDropGraph(geometry, [[-1,2],[1,2],[-2,1],[-1,1],[0,1],[1,1], [2,1],[0,-1],[0,2],[0,-2],[2,-2],[0,-2],[-2,-2]],[]),
					value: 5.5,
					abbrev: '+FS',
					demoted: 25,
				},
				57: {
					name: 'p-swallow-b',
					aspect: 'sh-bird',
					graph: this.cbDropGraph(geometry, [[-2,2],[0,2],[2,2],[0,1],[-2,0],[2,0], [-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1],[-2,-1],[-2,-1]],[]),
					value: 5.5,
					abbrev: '+FS',
					demoted: 24,
				},
				58: {
					name: 'p-rabbit-w',
					aspect: 'sh-fox',
					value: 4.9,
					graph: this.cbDropGraph(geometry, [[-1,-1],[0,-1],[1,-1]],[[1,1],[0,-1],[-1,1]]),
					abbrev: '+RU',
					demoted: 27,
					
				},
				59: {
					name: 'p-rabbit-b',
					aspect: 'sh-fox',
					graph: this.cbDropGraph(geometry, [[1,1],[-1,1],[0,-1]],[[-1,-1],[0,+1],[1,-1]]),
					value: 4.9,
					abbrev: '+RU',
					demoted: 26,
					
				},


				60: {
					name: 'p-eagle-w',
					aspect: 'sh-eagle',
					graph: this.cbMergeGraphs(geometry,
						this.cbShortRangeGraph(geometry,[[1,1],[-1,1],[2,2],[-2,2]]),
						this.cbShortRangeGraph(geometry,[[1,1],[-1,1]], null, igui),
						this.cbShortRangeGraph(geometry,[[2,2],[-2,2]], null, locust),
						this.cbLongRangeGraph(geometry,[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,-1]])
						),
					value: 10,
					demoted: 30,
					abbrev: '+OL',
					fenAbbrev: '+D',
				},
				61: {
					name: 'p-eagle-b',
					aspect: 'sh-eagle',
					graph: this.cbMergeGraphs(geometry,
						this.cbShortRangeGraph(geometry,[[1,-1],[-1,-1],[2,-2],[-2,-2]]),
						this.cbShortRangeGraph(geometry,[[1,-1],[-1,-1]], null, igui),
						this.cbShortRangeGraph(geometry,[[2,-2],[-2,-2]], null, locust),
						this.cbLongRangeGraph(geometry,[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1]])
						),
					value: 10,
					demoted: 29,
					abbrev: '+OL',
					fenAbbrev: '+D',
				},
				62: {
					name: 'p-falcon-w',
					aspect: 'sh-falcon',
					graph: this.cbMergeGraphs(geometry,
						this.cbShortRangeGraph(geometry,[[0,1],[0,2]]),
						this.cbShortRangeGraph(geometry,[[0,1]], null, igui),
						this.cbShortRangeGraph(geometry,[[0,2]], null, locust),
						this.cbLongRangeGraph(geometry,[[1,0],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]])
						),
					value: 8.75,
					demoted: 32,
					abbrev: '+CR',
					fenAbbrev: '+H',
				},
				63: {
					name: 'p-falcon-b',
					aspect: 'sh-falcon',
					graph: this.cbMergeGraphs(geometry,
						this.cbShortRangeGraph(geometry,[[0,-1],[0,-2]]),
						this.cbShortRangeGraph(geometry,[[0,-1]], null, igui),
						this.cbShortRangeGraph(geometry,[[0,-2]], null, locust),
						this.cbLongRangeGraph(geometry,[[1,0],[-1,0],[0,1],[1,1],[1,-1],[-1,1],[-1,-1]])
						),
					value: 8.75,
					demoted: 31,
					abbrev: '+CR',
					fenAbbrev: '+H',
				},
				64: {
					name: 'king',
					aspect: 'sh-jade',
					isKing: true,
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],[]),
					abbrev: 'K',
					initial: [{s:-1,p:184}],
				},
				65: {
					name: 'king',
					aspect: 'sh-king',
					isKing: true,
					graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],[]),
					abbrev: 'K',
					initial: [{s:1,p:7}],
				},
				66: {
					name: 'lion',
					aspect: 'sh-lion',
                    graph: this.cbDropGraph(geometry, [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1],[2,0],[0,2],[-2,0],[0,-2], [2,2],[2,-2],[-2,2],[-2,-2]],[]),
					//this.cbLongRangeGraph(geometry,[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,-1]])
					value: 15.6,
					abbrev: 'LN',
					fenAbbrev: 'N',
					initial: [{s:1,p:39},{s:-1,p:152}]
				},
				67: {
					name: 'queen',
					aspect: 'sh-queen',
					graph: this.cbDropGraph(geometry, [],[[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]),
					value: 11,
					abbrev: 'FK',
					fenAbbrev: 'Q',
					initial: [{s:1,p:40},{s:-1,p:151}],
				},

			},
			
			promote: function(aGame,piece,move) {

				var start_promo_type = 32;
                // piece promotable
				if(piece.t >= start_promo_type && piece.t < 61)
					return [];
				var f = geometry.C(move.f);
				if(f < 2 || f > 13) return []; // no promotion on drops
				var f = geometry.R(move.f);
				var t = geometry.R(move.t);
				if(piece.s == 1) {
					if(t > 7 || f > 7)
						return	piece.t < 6 && t > 10 - (piece.t > 3)
						?	[piece.t+start_promo_type]
						:	[piece.t, piece.t+start_promo_type];
				} else {
					if(t < 4 || f < 4)
						return	piece.t < 6 && t < 1 + (piece.t > 3)
						?	[piece.t+start_promo_type]
						:	[piece.t, piece.t+start_promo_type];
				}
				return [];
			},

			evaluate: function(aGame,evalValues,material) {

			},

		};

		return this.cbAddHoldings(geometry, definition);
	}

})();
