/*
 * Copyright(c) 2013-2014 - jocly.com
 *
 * You are allowed to use and modify this source code as long as it is exclusively for use in the Jocly API. 
 *
 * Original authors: Jocly team
 *
 */
 

(function() {
	
	var geometry = Model.Game.cbBoardGeometryGrid(10,8);
	
	Model.Game.cbDefine=function(){
        p = this.cbPiecesFromFEN(geometry, "rnabqkbmnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNABQKBMNR");
        p.setValues({P:1, N:2.9, B:3.1, R:5, Q:9, M:7.8, A:6});
        return p;

    }
	
})();
