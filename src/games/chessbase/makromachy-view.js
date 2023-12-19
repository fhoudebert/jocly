
(function() {
	
	View.Game.cbDefineView = function() {
		
		var delta3D = {
				'colorFill' : {
					"#": "rgba(50,100,75,1)",
					".": "rgba(200,75,25,1)",
				},
		};

		var board3D = $.extend(true,{},this.cbGridBoardClassic3DMargin,delta3D);

		return {
			coords: {
				"2d": this.cbGridBoard.coordsFn.call(this,this.cbGridBoardClassic2DMargin),
				"3d": this.cbGridBoard.coordsFn.call(this,board3D),
			},
			boardLayout: [
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
	      		".#.#.#.#.#.#.#",
	      		"#.#.#.#.#.#.#.",
			],
			board: {
				"2d": {
					draw: this.cbDrawBoardFn(this.cbGridBoardClassic2DMargin),										
				},
				"3d": {
					display: this.cbDisplayBoardFn(board3D),					
				},
			},
			clicker: {
				"2d": {
					width: 800,
					height: 800,
				},
				"3d": {
					scale: [0.51,0.51,0.51],
				},
			},
			pieces: this.cbFairyPieceStyle({
				"default": {
					"2d": {
						width: 742,
						height: 742,	
					},
					"3d": {
						scale: [0.34,0.34,0.34],
					},
				},
			}),
		};
	}

	/* Make the knight jump when moving */
	View.Board.cbMoveMidZ = function(aGame,aMove,zFrom,zTo) {
		var c=aMove.a;
		if(c=='U'||c=='G') return (zFrom+zTo)/2-(c=='G' ? 0.01 : 0);		// bent slider
		var x=aMove.t%14-aMove.f%14, y=(aMove.t-aMove.f-x)/14;
		var dist=x*x+y*y;
		if(dist>2) { // never jump to adjacent squares
			var oblique=x*y*y*y-y*x*x*x;
			if(c=='Z'||c=='J'||						// oblique leaper
			   oblique&&(c=='N'||c=='A'||c=='M'||c=='W')||			// only the Knight jump
			   dist<9&&(c=='O'||c=='E'||c=='I'||c=='T')||			// second ring
			   aMove.c!==null&&(c=='S'||c=='L'||c=='F'||c=='V'||c=='C')||	// hop capture
			   (c=='K'))							// fast castling
				return Math.max(zFrom,zTo)+1000+100*Math.sqrt(dist);
		}
		return (zFrom+zTo)/2; // slides straight
	}
	
})();
