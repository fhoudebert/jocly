exports.games = (function () {
	var modelScripts = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/classic-model.js",
		"famous/classic-db.min.js"
	]
	var config_model_gameOptions_levelOptions = {
		"checkFactor": 0.2,
		"pieceValueFactor": 1,
		"posValueFactor": 0.1,
		"averageDistKingFactor": -0.01,
		"castleFactor": 0.1,
		"minorPiecesMovedFactor": 0.1,
		"pieceValueRatioFactor": 1,
		"endingKingFreedomFactor": 0.01,
		"endingDistKingFactor": 0.05,
		"distKingCornerFactor": 0.1,
		"distPawnPromo1Factor": 0.3,
		"distPawnPromo2Factor": 0.1,
		"distPawnPromo3Factor": 0.05
	}
	var config_model_gameOptions = {
		"preventRepeat": true,
		"uctTransposition": "state",
		"uctIgnoreLoop": false,
		"levelOptions": config_model_gameOptions_levelOptions
	}
	var config_model_levels = {
		"name": "easy",
		"label": "Easy",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 1000
	}
	var config_model_levels_2 = {
		"name": "fast",
		"label": "Fast [1sec]",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxDuration": 1,
		"isDefault": true
	}
	var config_model_levels_3 = {
		"name": "medium",
		"label": "Medium",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 10000,
		"maxDuration": 10
	}
	var config_model_levels_4 = {
		"name": "strong",
		"label": "Strong",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 20000,
		"maxDuration": 15
	}
	var config_model_levels_5 = [
		config_model_levels,
		config_model_levels_2,
		config_model_levels_3,
		config_model_levels_4
	]
	var config_view_css = [
		"chessbase.css"
	]
	var config_view_defaultOptions = {
		"sounds": true,
		"moves": true,
		"notation": false,
		"autocomplete": false
	}
	var config_view_skins_preload = [
		"smoothedfilegeo|0|/res/ring-target.js",
		"image|/res/images/cancel.png",
		"image|/res/images/wikipedia.png",
		"smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js",
		"image|/res/staunton/pawn/pawn-diffusemap.jpg",
		"image|/res/staunton/pawn/pawn-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/knight/knight.js",
		"image|/res/staunton/knight/knight-diffusemap.jpg",
		"image|/res/staunton/knight/knight-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/bishop/bishop.js",
		"image|/res/staunton/bishop/bishop-diffusemap.jpg",
		"image|/res/staunton/bishop/bishop-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/rook/rook.js",
		"image|/res/staunton/rook/rook-diffusemap.jpg",
		"image|/res/staunton/rook/rook-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/queen/queen.js",
		"image|/res/staunton/queen/queen-diffusemap.jpg",
		"image|/res/staunton/queen/queen-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/king/king.js",
		"image|/res/staunton/king/king-diffusemap.jpg",
		"image|/res/staunton/king/king-normalmap.jpg"
	]
	var config_view_skins_world_lightPosition = {
		"x": -9,
		"y": 9,
		"z": 9
	}
	var config_view_skins_world_skyLightPosition = {
		"x": 9,
		"y": 9,
		"z": 9
	}
	var config_view_skins_world = {
		"lightIntensity": 1.3,
		"skyLightIntensity": 1.2,
		"lightCastShadow": true,
		"fog": false,
		"color": 4686804,
		"lightPosition": config_view_skins_world_lightPosition,
		"skyLightPosition": config_view_skins_world_skyLightPosition,
		"lightShadowDarkness": 0.55,
		"ambientLightColor": 2236962
	}
	var config_view_skins_camera = {
		"fov": 45,
		"distMax": 50,
		"radius": 18,
		"elevationAngle": 60,
		"elevationMin": 0
	}
	var config_view_skins = {
		"name": "skin3d",
		"title": "3D Classic",
		"3d": true,
		"preload": config_view_skins_preload,
		"world": config_view_skins_world,
		"camera": config_view_skins_camera
	}
	var config_view_skins_camera_2 = {
		"fov": 45,
		"distMax": 50,
		"radius": 18,
		"elevationAngle": 89,
		"elevationMin": 0
	}
	var config_view_skins_preload_2 = [
		"image|/res/images/cancel.png",
		"image|/res/images/whitebg.png",
		"image|/res/images/wikipedia.png"
	]
	var config_view_sounds = {
		"move1": "alq_move1",
		"move2": "alq_move2",
		"move3": "alq_move3",
		"move4": "alq_move2",
		"tac1": "alq_tac1",
		"tac2": "alq_tac2",
		"tac3": "alq_tac1",
		"promo": "promo",
		"usermove": null
	}
	var config_view_js = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"extruded-set-view.js",
		"famous/classic-view.js"
	]
	var modelScripts_2 = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/xiangqi-model.js",
		"famous/xiangqi-db.min.js"
	]
	var config_model_gameOptions_levelOptions_2 = {
		"pieceValueFactor": 1,
		"pieceValueRatioFactor": 1,
		"posValueFactor": 0.1,
		"averageDistKingFactor": -0.01,
		"castleFactor": 0.1,
		"minorPiecesMovedFactor": 0.1,
		"checkFactor": 0.2,
		"endingKingFreedomFactor": 0.01,
		"endingDistKingFactor": 0.05,
		"distKingCornerFactor": 0.1
	}
	var config_model_gameOptions_2 = {
		"preventRepeat": true,
		"uctTransposition": "state",
		"uctIgnoreLoop": false,
		"levelOptions": config_model_gameOptions_levelOptions_2
	}
	var config_view_skins_world_lightPosition_2 = {
		"x": 10,
		"y": 10,
		"z": 10
	}
	var config_view_skins_world_2 = {
		"lightIntensity": 0.8,
		"skyLightIntensity": 0.5,
		"lightCastShadow": true,
		"fog": false,
		"color": 4686804,
		"lightPosition": config_view_skins_world_lightPosition_2,
		"skyLightPosition": config_view_skins_world_skyLightPosition,
		"lightShadowDarkness": 0.75,
		"ambientLightColor": 4473924
	}
	var config_view_skins_preload_3 = [
		"smoothedfilegeo|0|/res/ring-target.js",
		"image|/res/images/cancel.png",
		"smoothedfilegeo|0|/res/xiangqi/token.js",
		"image|/res/xiangqi/wood3.jpg",
		"image|/res/xiangqi/clearwoodtexture.jpg",
		"image|/res/xiangqi/decoration-cross.png",
		"image|/res/xiangqi/whitebg.png",
		"image|/res/xiangqi/xiangqi-pieces-sprites-western-player.png",
		"image|/res/xiangqi/piecebump.jpg"
	]
	var config_view_js_2 = [
		"base-view.js",
		"grid-board-view.js",
		"famous/xiangqi-board-view.js",
		"famous/xiangqi-set-view.js",
		"famous/xiangqi-view.js"
	]
	var modelScripts_3 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/gardner-model.js"
	]
	var config_view_skins_2 = {
		"name": "skin2d",
		"title": "2D Classic",
		"3d": false,
		"preload": config_view_skins_preload_2
	}
	var config_view_skins_3 = [
		config_view_skins,
		config_view_skins_2
	]
	var config_view_js_3 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/gardner-view.js"
	]
	var modelScripts_4 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/mini4x4-model.js"
	]
	var config_view_js_4 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/mini4x4-view.js"
	]
	var modelScripts_5 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/mini4x5-model.js"
	]
	var config_view_js_5 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/mini4x5-view.js"
	]
	var modelScripts_6 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/micro4x5-model.js"
	]
	var config_view_js_6 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/micro4x5-view.js"
	]
	var modelScripts_7 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/baby-model.js"
	]
	var config_view_js_7 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/baby-view.js"
	]
	var modelScripts_8 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/malett-model.js"
	]
	var config_view_js_8 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/malett-view.js"
	]
	var modelScripts_9 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/los-alamos-model.js"
	]
	var config_view_js_9 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/los-alamos-view.js"
	]
	var modelScripts_10 = [
		"base-model.js",
		"grid-geo-model.js",
		"mini/attack-model.js"
	]
	var config_view_js_10 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"mini/attack-view.js"
	]
	var modelScripts_11 = [
		"base-model.js",
		"grid-geo-model.js",
		"historical/courier-model.js"
	]
	var config_model_levels_6 = {
		"name": "easy",
		"label": "Easy",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 4000
	}
	var config_model_levels_7 = {
		"name": "fast",
		"label": "Fast [2sec]",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxDuration": 2,
		"isDefault": true
	}
	var config_model_levels_8 = {
		"name": "medium",
		"label": "Medium",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 20000,
		"maxDuration": 20
	}
	var config_model_levels_9 = {
		"name": "strong",
		"label": "Strong",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 40000,
		"maxDuration": 30
	}
	var config_model_levels_10 = [
		config_model_levels_6,
		config_model_levels_7,
		config_model_levels_8,
		config_model_levels_9
	]
	var config_view_js_11 = [
		"base-view.js",
		"grid-board-view.js",
		"historical/courier-board-view.js",
		"historical/courierchess-set-view.js",
		"historical/courier-view.js"
	]
	var modelScripts_12 = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/makruk-model.js"
	]
	var config_view_skins_world_lightPosition_3 = {
		"x": -10,
		"y": 5,
		"z": 0
	}
	var config_view_skins_world_3 = {
		"lightIntensity": 0.8,
		"skyLightIntensity": 0.4,
		"lightCastShadow": false,
		"fog": false,
		"color": 4686804,
		"lightPosition": config_view_skins_world_lightPosition_3,
		"skyLightPosition": config_view_skins_world_skyLightPosition,
		"lightShadowDarkness": 0.85,
		"ambientLightColor": 1118481
	}
	var config_view_js_12 = [
		"base-view.js",
		"grid-board-view.js",
		"makruk-board-view.js",
		"makruk-set-view.js",
		"famous/makruk-view.js"
	]
	var modelScripts_13 = [
		"base-model.js",
		"grid-geo-model.js",
		"cazaux/shako-model.js"
	]
	var modelScripts_100 = [
		"base-model.js",
		"grid-geo-model.js",
		"team-mate-model.js"
	]
	var modelScripts_101 = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"locust-move-model.js",
		"werewolf-model.js"
	]
	var modelScripts_102 = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"locust-move-model.js",
		"decimal/elven-model.js"
	]
	var modelScripts_103 = [
		"base-model.js",
		"grid-geo-model.js",
		"spartan-model.js"
	]
	var modelScripts_104 = [
		"base-model.js",
		"grid-geo-model.js",
		"decimal/scirocco-model.js"
	]
	var modelScripts_seireigi = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
		"shogi/seireigi-shogi-model.js"
	]
	var modelScripts_chu_seireigi = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
        "fairy-piece-model.js",
		"shogi/chu-seireigi-model.js"
	]
	var modelScripts_105 = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
		"shogi/shogi-model.js"
	]
	var modelScripts_106 = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
		"shogi/tori-shogi-model.js"
	]
	var modelScripts_107 = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
		"shogi/mini-shogi-model.js"
	]
	var modelScripts_108 = [
		"base-model.js",
		"grid-geo-model.js",
		"locust-move-model.js",
		"shogi/chu-shogi-model.js"
	]
	var modelScripts_109 = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"locust-move-model.js",
		"makromachy-model.js"
	]
	var modelScripts_110 = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"locust-move-model.js",
		"minjiku-shogi-model.js"
	]
	var modelScripts_kyoto = [
		"base-model.js",
		"grid-geo-model.js",
		"drop-model.js",
		"shogi/kyoto-shogi-model.js"
	]
	var config_model_levels_11 = {
		"name": "easy",
		"label": "Easy",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 6000
	}
	var config_model_levels_12 = {
		"name": "fast",
		"label": "Fast [3sec]",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxDuration": 3,
		"isDefault": true
	}
	var config_model_levels_13 = {
		"name": "medium",
		"label": "Medium",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 30000,
		"maxDuration": 30
	}
	var config_model_levels_14 = {
		"name": "strong",
		"label": "Strong",
		"ai": "uct",
		"playoutDepth": 0,
		"minVisitsExpand": 1,
		"c": 0.6,
		"ignoreLeaf": false,
		"uncertaintyFactor": 3,
		"maxNodes": 60000,
		"maxDuration": 45
	}
	var config_model_levels_15 = [
		config_model_levels_11,
		config_model_levels_12,
		config_model_levels_13,
		config_model_levels_14
	]
	var config_view_js_13 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/shako-view.js"
	]
	var config_view_js_100 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"team-mate-view.js"
	]
	var config_view_js_101 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"multi-leg-view.js",
		"werewolf-view.js"
	]
	var config_view_js_102 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"multi-leg-view.js",
		"decimal/elven-view.js"
	]
	var config_view_js_103 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"spartan-view.js"
	]
	var config_view_js_104 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"multi-leg-view.js",
		"decimal/scirocco-view.js"
	]
	var config_view_js_chu_seireigi = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/chu-seireigi-set-view.js",
		"drop-view.js",
		"shogi/chu-seireigi-view.js"
	]
		var config_view_js_seireigi = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/seireigi-shogi-set-view.js",
		"drop-view.js",
		"shogi/seireigi-shogi-view.js"
	]
	var config_view_js_105 = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/shogi-set-view.js",
		"drop-view.js",
		"shogi/shogi-view.js"
	]
	var config_view_js_106 = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/tori-set-view.js",
		"drop-view.js",
		"shogi/tori-shogi-view.js"
	]
	var config_view_js_107 = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/shogi-set-view.js",
		"drop-view.js",
		"shogi/mini-shogi-view.js"
	]
	var config_view_js_108 = [
		"base-view.js",
		"grid-board-view.js",
		"shogi/tenjiku-set-view.js",
		"multi-leg-view.js",
		"shogi/chu-shogi-view.js"
	]
	var config_view_js_109 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"multi-leg-view.js",
		"makromachy-view.js"
	]
	var config_view_js_110 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"multi-leg-view.js",
		"minjiku-shogi-view.js"
	]
	var modelScripts_14 = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/shatranj-model.js"
	]
	var config_model_gameOptions_levelOptions_3 = {
		"checkFactor": 0.2,
		"pieceValueFactor": 1,
		"posValueFactor": 0.1,
		"averageDistKingFactor": -0.01,
		"castleFactor": 0.1,
		"minorPiecesMovedFactor": 0.1,
		"pieceValueRatioFactor": 1,
		"endingKingFreedomFactor": 0.01,
		"endingDistKingFactor": 0.05,
		"distKingCornerFactor": 0.1,
		"distPawnPromo1Factor": 0.15,
		"distPawnPromo2Factor": 0.05,
		"distPawnPromo3Factor": 0.025
	}
	var config_model_gameOptions_3 = {
		"preventRepeat": true,
		"uctTransposition": "state",
		"uctIgnoreLoop": false,
		"levelOptions": config_model_gameOptions_levelOptions_3
	}
	var config_view_js_14 = [
		"base-view.js",
		"grid-board-view.js",
		"shatranj-board-view.js",
		"nishapur-set-view.js",
		"famous/shatranj-view.js"
	]
	var modelScripts_15 = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/basic-model.js"
	]
	var modelScripts_knightmate = [
		"base-model.js",
		"grid-geo-model.js",
		"standard/knightmate-model.js"
	]
	var config_model_rules = {
		"en": "famous/rules.html"
	}
	var config_model_credits = {
		"en": "famous/credits.html"
	}
	var config_view_js_15 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"famous/basic-view.js"
	]
	var config_view_skins_preload_4 = [
	]
	var config_view_skins_4 = {
		"name": "skin2d",
		"title": "2D Classic",
		"3d": false,
		"preload": config_view_skins_preload_4
	}
	var modelScripts_16 = [
		"base-model.js",
		"multiplan-geo-model.js",
		"3d/raumschach-model.js"
	]
	var config_view_skins_camera_targetBounds = [
		3000,
		3000,
		6000
	]
	var config_view_skins_preload_5 = [
		"image|/res/images/wikipedia.png",
		"image|/res/images/cancel.png",
		"image|/res/images/whitebg.png"
	]
	var config_view_skins_5 = {
		"name": "skin2d",
		"title": "2D Classic",
		"3d": false,
		"preload": config_view_skins_preload_5
	}
	var config_view_js_16 = [
		"base-view.js",
		"multiplan-board-view.js",
		"fairy-set-view.js",
		"3d/raumschach-view.js"
	]
	var modelScripts_17 = [
		"base-model.js",
		"hex-geo-model.js",
		"hex/glinski-model.js"
	]
	var config_view_css_2 = [
		"chessbase.css",
		"hex.css"
	]
	var config_view_skins_preload_6 = [
		"smoothedfilegeo|0|/res/ring-target-hexagon.js",
		"image|/res/images/cancel.png",
		"image|/res/images/wikipedia.png",
		"smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js",
		"image|/res/staunton/pawn/pawn-diffusemap.jpg",
		"image|/res/staunton/pawn/pawn-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/knight/knight.js",
		"image|/res/staunton/knight/knight-diffusemap.jpg",
		"image|/res/staunton/knight/knight-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/bishop/bishop.js",
		"image|/res/staunton/bishop/bishop-diffusemap.jpg",
		"image|/res/staunton/bishop/bishop-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/rook/rook.js",
		"image|/res/staunton/rook/rook-diffusemap.jpg",
		"image|/res/staunton/rook/rook-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/queen/queen.js",
		"image|/res/staunton/queen/queen-diffusemap.jpg",
		"image|/res/staunton/queen/queen-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/king/king.js",
		"image|/res/staunton/king/king-diffusemap.jpg",
		"image|/res/staunton/king/king-normalmap.jpg"
	]
	var config_view_skins_camera_3 = {
		"fov": 45,
		"distMax": 50,
		"radius": 13.5,
		"elevationAngle": 45,
		"elevationMin": 0,
		"distMin": 0
	}
	var config_view_skins_6 = {
		"name": "skin3d",
		"title": "3D Classic",
		"3d": true,
		"preload": config_view_skins_preload_6,
		"world": config_view_skins_world,
		"camera": config_view_skins_camera_3
	}
	var config_view_skins_preload_7 = [
		"image|/res/images/wikipedia.png",
		"image|/res/images/whitebg.png",
		"image|/res/images/cancel.png"
	]
	var config_view_skins_7 = {
		"name": "skin2d",
		"title": "2D Classic",
		"3d": false,
		"preload": config_view_skins_preload_7
	}
	var config_view_skins_8 = [
		config_view_skins_6,
		config_view_skins_7
	]
	var config_view_js_17 = [
		"base-view.js",
		"hex-board-view.js",
		"staunton-set-view.js",
		"hex/glinski-view.js"
	]
	var modelScripts_18 = [
		"base-model.js",
		"hex-geo-model.js",
		"hex/brusky-model.js"
	]
	var config_view_js_18 = [
		"base-view.js",
		"hex-board-view.js",
		"staunton-set-view.js",
		"hex/brusky-view.js"
	]
	var modelScripts_19 = [
		"base-model.js",
		"hex-geo-model.js",
		"hex/devasa-model.js"
	]
	var config_view_js_19 = [
		"base-view.js",
		"hex-board-view.js",
		"staunton-set-view.js",
		"hex/devasa-view.js"
	]
	var modelScripts_20 = [
		"base-model.js",
		"hex-geo-model.js",
		"hex/mccooey-model.js"
	]
	var config_view_js_20 = [
		"base-view.js",
		"hex-board-view.js",
		"staunton-set-view.js",
		"hex/mccooey-view.js"
	]
	var modelScripts_21 = [
		"base-model.js",
		"hex-geo-model.js",
		"hex/shafran-model.js"
	]
	var config_view_skins_preload_8 = [
		"smoothedfilegeo|0|/res/ring-target-cylinder-v3.js",
		"image|/res/images/cancel.png",
		"image|/res/images/wikipedia.png",
		"smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js",
		"image|/res/staunton/pawn/pawn-diffusemap.jpg",
		"image|/res/staunton/pawn/pawn-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/knight/knight.js",
		"image|/res/staunton/knight/knight-diffusemap.jpg",
		"image|/res/staunton/knight/knight-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/bishop/bishop.js",
		"image|/res/staunton/bishop/bishop-diffusemap.jpg",
		"image|/res/staunton/bishop/bishop-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/rook/rook.js",
		"image|/res/staunton/rook/rook-diffusemap.jpg",
		"image|/res/staunton/rook/rook-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/queen/queen.js",
		"image|/res/staunton/queen/queen-diffusemap.jpg",
		"image|/res/staunton/queen/queen-normalmap.jpg",
		"smoothedfilegeo|0|/res/staunton/king/king.js",
		"image|/res/staunton/king/king-diffusemap.jpg",
		"image|/res/staunton/king/king-normalmap.jpg"
	]
	var config_view_js_21 = [
		"base-view.js",
		"hex-board-view.js",
		"staunton-set-view.js",
		"hex/shafran-view.js"
	]
	var modelScripts_22 = [
		"base-model.js",
		"cylinder-geo-model.js",
		"circular/circular-model.js"
	]
	var config_view_css_3 = [
		"chessbase.css",
		"circular.css"
	]
	var config_view_skins_camera_4 = {
		"fov": 45,
		"distMax": 50,
		"radius": 14.5,
		"elevationAngle": 45,
		"elevationMin": 0,
		"distMin": 0
	}
	var config_view_js_22 = [
		"base-view.js",
		"circular-board-view.js",
		"staunton-set-view.js",
		"circular/circular-view.js"
	]
	var modelScripts_23 = [
		"base-model.js",
		"cylinder-geo-model.js",
		"circular/byzantine-model.js"
	]
	var config_view_js_23 = [
		"base-view.js",
		"circular-board-view.js",
		"nishapur-set-view.js",
		"circular/byzantine-view.js"
	]
	var modelScripts_24 = [
		"base-model.js",
		"multiplan-geo-model.js",
		"3d/3dchess-model.js"
	]
	var modelScripts_space_spartan = [
		"base-model.js",
		"multiplan-geo-model.js",
		"3d/space-spartan-model.js"
	]
	var config_view_js_space_spartan = [
		"base-view.js",
		"multiplan-board-view.js",
		"fairy-set-view.js",
		"3d/space-spartan-view.js"
	]
	var config_view_js_24 = [
		"base-view.js",
		"multiplan-board-view.js",
		"staunton-set-view.js",
		"3d/3dchess-view.js"
	]
	var modelScripts_25 = [
		"base-model.js",
		"cylinder-geo-model.js",
		"circular/cylinder-model.js"
	]
	var config_view_skins_camera_target = [
		0,
		0,
		0
	]
	var config_view_js_25 = [
		"base-view.js",
		"grid-board-view.js",
		"cylinder-board-view.js",
		"staunton-set-view.js",
		"circular/cylinder-view.js"
	]
	var modelScripts_26 = [
		"base-model.js",
		"cubic-geo-model.js",
		"cubic-model.js"
	]
	var config_view_js_26 = [
		"base-view.js",
		"cubic-board-view.js",
		"staunton-set-view.js",
		"cubic-view.js"
	]
	var modelScripts_27 = [
		"base-model.js",
		"grid-geo-model.js",
		"cazaux/rollerball-model.js"
	]
	var config_view_js_27 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"cazaux/rollerball-view.js"
	]
	var modelScripts_28 = [
		"base-model.js",
		"grid-geo-model.js",
		"famous/chess960-model.js"
	]
	var config_view_js_28 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"famous/chess960-view.js"
	]
	var modelScripts_29 = [
		"base-model.js",
		"grid-geo-model.js",
		"cazaux/metamachy-model.js"
	]
	var config_view_skins_preload_9 = [
		"image|/res/images/cancel.png",
		"image|/res/images/whitebg.png",
		"image|/res/fairy/wikipedia-fairy-sprites.png"
	]
	var config_view_skins_9 = {
		"name": "skin2d",
		"title": "2D Classic",
		"3d": false,
		"preload": config_view_skins_preload_9
	}
	var config_view_js_29 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/metamachy-view.js"
	]
	var modelScripts_capablanca = [

		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"prelude-model.js",
		"capa10x8/capablanca-model.js"
	]
	var config_view_skins_preload_10 = [
		"smoothedfilegeo|0|/res/ring-target.js",
		"image|/res/images/cancel.png",
		"image|/res/images/wikipedia.png",
		"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
		"image|/res/fairy/pawn/pawn-diffusemap.jpg",
		"image|/res/fairy/pawn/pawn-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/knight/knight.js",
		"image|/res/fairy/knight/knight-diffusemap.jpg",
		"image|/res/fairy/knight/knight-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
		"image|/res/fairy/bishop/bishop-diffusemap.jpg",
		"image|/res/fairy/bishop/bishop-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/queen/queen.js",
		"image|/res/fairy/queen/queen-diffusemap.jpg",
		"image|/res/fairy/queen/queen-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/king/king.js",
		"image|/res/fairy/king/king-diffusemap.jpg",
		"image|/res/fairy/king/king-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/rook/rook.js",
		"image|/res/fairy/rook/rook-diffusemap.jpg",
		"image|/res/fairy/rook/rook-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
		"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
		"image|/res/fairy/cardinal/cardinal-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
		"image|/res/fairy/marshall/marshall-diffusemap.jpg",
		"image|/res/fairy/marshall/marshall-normalmap.jpg"
	]
	var config_view_skins_10 = {
		"name": "skin3d",
		"title": "3D Classic",
		"3d": true,
		"preload": config_view_skins_preload_10,
		"world": config_view_skins_world,
		"camera": config_view_skins_camera
	}
	var config_view_skins_11 = [
		config_view_skins_10,
		config_view_skins_9
	]
	var config_view_js_30 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"capa10x8/capablanca-view.js"
	]
	var config_view_js_capablanca = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"prelude-view.js",
		"capa10x8/capablanca-view.js"
	]
	var config_view_skins_preload_11 = [
		"smoothedfilegeo|0|/res/ring-target.js",
		"image|/res/images/cancel.png",
		"image|/res/images/wikipedia.png",
		"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
		"image|/res/fairy/pawn/pawn-diffusemap.jpg",
		"image|/res/fairy/pawn/pawn-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/knight/knight.js",
		"image|/res/fairy/knight/knight-diffusemap.jpg",
		"image|/res/fairy/knight/knight-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
		"image|/res/fairy/bishop/bishop-diffusemap.jpg",
		"image|/res/fairy/bishop/bishop-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/queen/queen.js",
		"image|/res/fairy/queen/queen-diffusemap.jpg",
		"image|/res/fairy/queen/queen-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/king/king.js",
		"image|/res/fairy/king/king-diffusemap.jpg",
		"image|/res/fairy/king/king-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/rook/rook.js",
		"image|/res/fairy/rook/rook-diffusemap.jpg",
		"image|/res/fairy/rook/rook-normalmap.jpg",
		"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
		"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
		"image|/res/fairy/cardinal/cardinal-normalmap.jpg"
	]
	var config_view_skins_12 = {
		"name": "skin3d",
		"title": "3D Classic",
		"3d": true,
		"preload": config_view_skins_preload_11,
		"world": config_view_skins_world,
		"camera": config_view_skins_camera
	}
	var config_view_skins_13 = [
		config_view_skins_12,
		config_view_skins_9
	]
	var modelScripts_34 = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"decimal/grand-model.js"
	]
	var modelScripts_hectochess = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"decimal/hectochess-model.js"
	]
	var modelScripts_heavychess = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"decimal/heavy-model.js"

	]
	var config_view_js_31 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"decimal/grand-view.js"
	]
	var modelScripts_35 = [
		"base-model.js",
		"grid-geo-model.js",
		"knighted/modern-model.js"
	]
	var config_view_js_32 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"knighted/modern-view.js"
	]
	var modelScripts_36 = [
		"base-model.js",
		"grid-geo-model.js",
		"knighted/chancellor-model.js"
	]
	var modelScripts_37 = [
		"base-model.js",
		"grid-geo-model.js",
		"wildebeest-model.js"
	]
	var config_view_js_33 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"wildebeest-view.js"
	]
	var modelScripts_38 = [
		"base-model.js",
		"smess-geo-model.js",
		"smess-model.js"
	]
	var config_view_js_34 = [
		"base-view.js",
		"grid-board-view.js",
		"smess-set-view.js",
		"smess-view.js"
	]
	var modelScripts_39 = [
		"base-model.js",
		"grid-geo-model.js",
		"standard/demi-model.js"
	]
	var config_view_js_35 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"standard/demi-view.js"
	]
	var modelScripts_40 = [
		"base-model.js",
		"grid-geo-model.js",
		"standard/romanchenko-model.js"
	]
	var config_view_js_36 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"standard/romanchenko-view.js"
	]
	var modelScripts_41 = [
		"base-model.js",
		"grid-geo-model.js",
		"amazon/amazon-model.js"
	]
	var config_view_js_37 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"amazon/amazon-view.js"
	]
	var modelScripts_42 = [
		"base-model.js",
		"grid-geo-model.js",
		"dukerutland-model.js"
	]
	var config_view_js_38 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"dukerutland-view.js"
	]
	var modelScripts_43 = [
		"base-model.js",
		"grid-geo-model.js",
		"amazon/gustav3-model.js"
	]
	var config_view_js_39 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"amazon/gustav3-view.js"
	]
	var modelScripts_44 = [
		"base-model.js",
		"grid-geo-model.js",
		"decimal/hyderabad-model.js"
	]
	var config_view_js_40 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"decimal/hyderabad-view.js"
	]
	var modelScripts_45 = [
		"base-model.js",
		"grid-geo-model.js",
		"tressau/kaisergame-model.js"
	]
	var modelScripts_46 = [
		"base-model.js",
		"grid-geo-model.js",
		"tressau/sultangame-model.js"
	]
	var config_view_js_41 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"tressau/sultangame-view.js"
	]
	var modelScripts_47 = [
		"base-model.js",
		"grid-geo-model.js",
		"reformed-courier-model.js"
	]
	var config_view_js_42 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"reformed-courier-view.js"
	]
	var modelScripts_48 = [
		"base-model.js",
		"grid-geo-model.js",
		"amazon/tutti-frutti-model.js"
	]
	var config_view_js_43 = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"amazon/tutti-frutti-view.js"
	]
	var modelScripts_49 = [
		"base-model.js",
		"grid-geo-model.js",
		"standard/sweet16-model.js"
	]
	var config_view_js_44 = [
		"base-view.js",
		"grid-board-view.js",
		"staunton-set-view.js",
		"standard/sweet16-view.js"
	]
	var modelScripts_tera = [
		"base-model.js",
		"grid-geo-model.js",
		"cazaux/terachess-model.js"
	]
	var config_view_js_tera = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/terachess-view.js"
	]
	var modelScripts_giga = [
		"base-model.js",
		"grid-geo-model.js",
		"cazaux/gigachess-model.js"
	]
	var config_view_js_giga = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/gigachess-view.js"
	]
	var modelScripts_lca = [
 		"base-model.js",
 		"grid-geo-model.js",
 		"duodecimal/leychessalpha-model.js"
 	]
 	var config_view_js_lca = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"duodecimal/leychessalpha-view.js"
	]

	var modelScripts_wtamerlane = [
 		"base-model.js",
 		"grid-geo-model.js",
 		"cazaux/wild-tamerlane-model.js"
 	]
 	var config_view_js_wtamerlane = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"cazaux/wild-tamerlane-view.js"
 	]
	var modelScripts_fantasticXIII = [
 		"base-model.js",
 		"grid-geo-model.js",
 		"fairy-piece-model.js",
 		"cazaux/fantasticXIII-model.js"
 	]
 	var config_view_js_fantasticXIII = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"cazaux/fantasticXIII-view.js"
 	]
	var modelScripts_bigorra = [
 		"base-model.js",
 		"grid-geo-model.js",
 		"fairy-piece-model.js",
 		"cazaux/bigorra-model.js"
 	]
 	var config_view_js_bigorra = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"cazaux/bigorra-view.js"
 	]
	var modelScripts_pemba = [
 		"base-model.js",
 		"grid-geo-model.js",
 		"cazaux/pemba-model.js"
 	]
 	var config_view_js_pemba = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"cazaux/pemba-view.js"
 	]
	var modelScripts_gigaII = [
		"base-model.js",
		"grid-geo-model.js",
        "fairy-piece-model.js",
		"cazaux/gigachessII-model.js"
	]
	var config_view_js_gigaII = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/gigachessII-view.js"
	]
	var modelScripts_timurid = [
 		"base-model.js",
 		"grid-geo-model.js",
        "fairy-piece-model.js",
        "prelude-model.js",
 		"duodecimal/timurid-model.js"
 	]
	var modelScripts_gross = [
 		"base-model.js",
 		"grid-geo-model.js",
        "fairy-piece-model.js",
 		"duodecimal/gross-model.js"
 	]
 	var config_view_js_timurid = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
        "prelude-view.js",
 		"duodecimal/timurid-view.js"
 	]
 	var config_view_js_duodecimal = [
 		"base-view.js",
 		"grid-board-view.js",
 		"fairy-set-view.js",
 		"duodecimal/duodecimal-view.js"
 	]
	var modelScripts_zanzibars = [
		"base-model.js",
		"grid-geo-model.js",
		"fairy-piece-model.js",
		"cazaux/zanzibar-s-model.js"
	]
	var config_view_js_zanzibars = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"cazaux/zanzibar-view.js"
	]
	var modelScripts_acedrex = [
		"base-model.js",
		"grid-geo-model.js",
		"historical/grant-acedrex-model.js"
	]
	var config_view_js_acedrex = [
		"base-view.js",
		"grid-board-view.js",
		"fairy-set-view.js",
		"historical/grant-acedrex-view.js"
	]
	return [
		{
			"name": "classic-chess",
			"modelScripts": modelScripts,
			"config": {
				"status": true,
				"model": {
					"title-en": "Chess",
					"summary": "Regular Orthodox Classic Western Chess",
					"thumbnail": "res/rules/famous/knight-thumbnail.png",
					"module": "chessbase",
					"plazza": "true",
					"released": 1389887778,
					"rules": {
						"en": "res/rules/famous/rules.html",
						"fr": "res/rules/famous/rules-fr.html"
					},
					"credits": {
						"en": "res/rules/famous/credits.html",
						"fr": "res/rules/famous/credits-fr.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts,
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/classic-chess-600x600-3d.jpg",
							"res/visuals/classic-chess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						config_view_skins,
						{
							"name": "skin3dflat",
							"title": "3D Flat",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"image|/res/extruded/wood.jpg",
								"image|/res/extruded/wikipedia-pieces-diffuse-white.jpg",
								"image|/res/extruded/wikipedia-pieces-diffuse-black.jpg",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-king.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-queen.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-pawn.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-rook.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-knight.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-bishop.js"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_2
						},
						{
							"name": "skin2dfull",
							"title": "2D Classic",
							"3d": false,
							"preload": config_view_skins_preload_2
						},
						{
							"name": "skin2dwood",
							"title": "2D Wood",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/images/wikipedia.png",
								"image|/res/images/woodenpieces2d2.png",
								"image|/res/images/wood.jpg"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js
		},
		{
			"name": "losing-chess",
			"modelScripts": [
				"base-model.js",
				"grid-geo-model.js",
				"standard/losing-model.js"
			],
			"config": {
				"status": true,
				"model": {
					"title-en": "Losing Chess",
					"summary": "Also known as Antichess, Suicide Chess, Giveaway Chess, ...",
					"thumbnail": "res/rules/standard/knight-inv-thumbnail.png",
					"module": "chessbase",
					"plazza": "true",
					"released": 1495039002,
					"rules": {
						"en": "res/rules/standard/losing-rules.html",
					},
					"credits": {
						"en": "res/rules/standard/credits.html",
						"fr": "res/rules/standard/credits-fr.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": [
						"base-model.js",
						"grid-geo-model.js",
						"standard/losing-model.js"
					],
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/classic-chess-600x600-3d.jpg",
							"res/visuals/classic-chess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						config_view_skins,
						{
							"name": "skin3dflat",
							"title": "3D Flat",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"image|/res/extruded/wood.jpg",
								"image|/res/extruded/wikipedia-pieces-diffuse-white.jpg",
								"image|/res/extruded/wikipedia-pieces-diffuse-black.jpg",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-king.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-queen.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-pawn.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-rook.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-knight.js",
								"smoothedfilegeo|0|/res/extruded/flat3dpieces-bishop.js"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_2
						},
						{
							"name": "skin2dfull",
							"title": "2D Classic",
							"3d": false,
							"preload": config_view_skins_preload_2
						},
						{
							"name": "skin2dwood",
							"title": "2D Wood",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/images/wikipedia.png",
								"image|/res/images/woodenpieces2d2.png",
								"image|/res/images/wood.jpg"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js
		},
		{
			"name": "xiangqi",
			"modelScripts": modelScripts_2,
			"config": {
				"status": true,
				"model": {
					"title-en": "Xiangqi",
					"summary": "Chinese Chess",
					"rules": {
						"en": "res/rules/xiangqi/xiangqi-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/xiangqi/xiangqi-thumb.png",
					"released": 1394466978,
					"credits": {
						"en": "res/rules/xiangqi/xiangqi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_2,
					"description": {
						"en": "res/rules/xiangqi/xiangqi-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/xiangqi-600x600-3d.jpg",
							"res/visuals/xiangqi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 0.9,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/xiangqi/token.js",
								"image|/res/xiangqi/clearwoodtexture.jpg",
								"image|/res/xiangqi/decoration-cross.png",
								"image|/res/xiangqi/whitebg.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites-playera.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites-playerb.png",
								"image|/res/xiangqi/piecebump.jpg"
							],
							"world": config_view_skins_world_2,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin3dwall",
							"title": "3D Wall",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/xiangqi/token.js",
								"image|/res/xiangqi/wood3.jpg",
								"image|/res/xiangqi/clearwoodtexture.jpg",
								"image|/res/xiangqi/decoration-cross.png",
								"image|/res/xiangqi/whitebg.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites-playera.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites-playerb.png",
								"image|/res/xiangqi/piecebump.jpg"
							],
							"world": config_view_skins_world_2,
							"camera": config_view_skins_camera_2
						},
						{
							"name": "skin3dwestern",
							"title": "3D Western",
							"3d": true,
							"preload": config_view_skins_preload_3,
							"world": config_view_skins_world_2,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin3dwallwestern",
							"title": "3D Wall Western",
							"3d": true,
							"preload": config_view_skins_preload_3,
							"world": config_view_skins_world_2,
							"camera": config_view_skins_camera_2
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/xiangqi/wood3.jpg",
								"image|/res/xiangqi/clearwoodtexture.jpg",
								"image|/res/xiangqi/decoration-cross.png",
								"image|/res/xiangqi/whitebg.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites.png"
							]
						},
						{
							"name": "skin2dwestern",
							"title": "2D Western",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/xiangqi/wood3.jpg",
								"image|/res/xiangqi/clearwoodtexture.jpg",
								"image|/res/xiangqi/decoration-cross.png",
								"image|/res/xiangqi/whitebg.png",
								"image|/res/xiangqi/xiangqi-pieces-sprites-western.png"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_2,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_2
		},
		{
			"name": "gardner-chess",
			"modelScripts": modelScripts_3,
			"config": {
				"status": true,
				"model": {
					"title-en": "Gardner MiniChess",
					"summary": "Gardner 5x5 minichess (1969)",
					"rules": {
						"en": "res/rules/mini/gardner-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/gardner-thumb.png",
					"released": 1398178578,
					"credits": {
						"en": "res/rules/mini/gardner-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_3,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/gardner-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/gardner-600x600-3d.jpg",
							"res/visuals/gardner-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_3,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_3
		},
		{
			"name": "mini4x4-chess",
			"modelScripts": modelScripts_4,
			"config": {
				"status": true,
				"model": {
					"title-en": "Mini Chess 4x4",
					"summary": "4x4 mini chess variant",
					"rules": {
						"en": "res/rules/mini/mini4x4-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/mini4x4-thumb.png",
					"released": 1398178577,
					"credits": {
						"en": "res/rules/mini/mini4x4-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_4,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/mini4x4-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/mini4x4-600x600-3d.jpg",
							"res/visuals/mini4x4-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_4,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_4
		},
		{
			"name": "mini4x5-chess",
			"modelScripts": modelScripts_5,
			"config": {
				"status": true,
				"model": {
					"title-en": "Mini Chess 4x5",
					"summary": "4x5 mini chess variant",
					"rules": {
						"en": "res/rules/mini/mini4x5-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/mini4x5-thumb.png",
					"released": 1398178576,
					"credits": {
						"en": "res/rules/mini/mini4x5-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_5,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/mini4x5-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/mini4x5-600x600-3d.jpg",
							"res/visuals/mini4x5-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_5,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_5
		},
		{
			"name": "micro4x5-chess",
			"modelScripts": modelScripts_6,
			"config": {
				"status": true,
				"model": {
					"title-en": "Micro Chess",
					"summary": "4x5 chess variant by Glimne (1997)",
					"rules": {
						"en": "res/rules/mini/micro4x5-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/micro4x5-thumb.png",
					"released": 1398178575,
					"credits": {
						"en": "res/rules/mini/micro4x5-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_6,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/micro4x5-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/micro4x5-600x600-3d.jpg",
							"res/visuals/micro4x5-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_6,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_6
		},
		{
			"name": "baby-chess",
			"modelScripts": modelScripts_7,
			"config": {
				"status": true,
				"model": {
					"title-en": "Baby Chess",
					"summary": "5x5 Baby chess",
					"rules": {
						"en": "res/rules/mini/baby-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/baby-thumb.png",
					"released": 1398178574,
					"credits": {
						"en": "res/rules/mini/baby-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_7,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/baby-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/baby-600x600-3d.jpg",
							"res/visuals/baby-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_7,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_7
		},
		{
			"name": "malett-chess",
			"modelScripts": modelScripts_8,
			"config": {
				"status": true,
				"model": {
					"title-en": "Malett Chess",
					"summary": "5x5 chess variant by Jeff Malett",
					"rules": {
						"en": "res/rules/mini/malett-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/malett-thumb.png",
					"released": 1398178573,
					"credits": {
						"en": "res/rules/mini/malett-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_8,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/malett-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/malett-600x600-3d.jpg",
							"res/visuals/malett-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_8,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_8
		},
		{
			"name": "los-alamos-chess",
			"modelScripts": modelScripts_9,
			"config": {
				"status": true,
				"model": {
					"title-en": "Los Alamos Chess",
					"summary": "6x6 chess variant",
					"rules": {
						"en": "res/rules/mini/los-alamos-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/los-alamos-thumb.png",
					"released": 1398178573,
					"credits": {
						"en": "res/rules/mini/los-alamos-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_9,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/los-alamos-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/los-alamos-600x600-3d.jpg",
							"res/visuals/los-alamos-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_9,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_9
		},
		{
			"name": "attack-chess",
			"modelScripts": modelScripts_10,
			"config": {
				"status": true,
				"model": {
					"title-en": "Chess Attack",
					"summary": "5x6 chess variant",
					"rules": {
						"en": "res/rules/mini/attack-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mini/attack-thumb.png",
					"released": 1398178572,
					"credits": {
						"en": "res/rules/mini/attack-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_10,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/mini/attack-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/attack-600x600-3d.jpg",
							"res/visuals/attack-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_10,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_10
		},
		{
			"name": "courier-chess",
			"modelScripts": modelScripts_11,
			"config": {
				"status": true,
				"model": {
					"title-en": "Courier Chess",
					"summary": "12x8 chess (12th century)",
					"rules": {
						"en": "res/rules/historical/courier-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/historical/courier-thumb.png",
					"released": 1393430178,
					"credits": {
						"en": "res/rules/historical/courier-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_11,
					"description": {
						"en": "res/rules/historical/courier-description.html"
					},
					"levels": config_model_levels_10
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/courier-600x600-3d.jpg",
							"res/visuals/courier-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1.5,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/courierchess/cc-pawn/cc-pawn.js",
								"image|/res/courierchess/cc-pawn/cc-pawn-diffuse.jpg",
								"image|/res/courierchess/cc-pawn/cc-pawn-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-archer/cc-archer.js",
								"image|/res/courierchess/cc-archer/cc-archer-diffuse.jpg",
								"image|/res/courierchess/cc-archer/cc-archer-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-queen/cc-queen.js",
								"image|/res/courierchess/cc-queen/cc-queen-diffuse.jpg",
								"image|/res/courierchess/cc-queen/cc-queen-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-schleich/cc-schleich.js",
								"image|/res/courierchess/cc-schleich/cc-schleich-diffuse.jpg",
								"image|/res/courierchess/cc-schleich/cc-schleich-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-knight/cc-knight.js",
								"image|/res/courierchess/cc-knight/cc-knight-diffuse.jpg",
								"image|/res/courierchess/cc-knight/cc-knight-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-man/cc-man.js",
								"image|/res/courierchess/cc-man/cc-man-diffuse.jpg",
								"image|/res/courierchess/cc-man/cc-man-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-courier/cc-courier.js",
								"image|/res/courierchess/cc-courier/cc-courier-diffuse.jpg",
								"image|/res/courierchess/cc-courier/cc-courier-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-rook/cc-rook.js",
								"image|/res/courierchess/cc-rook/cc-rook-diffuse.jpg",
								"image|/res/courierchess/cc-rook/cc-rook-normal.jpg",
								"smoothedfilegeo|0|/res/courierchess/cc-king/cc-king.js",
								"image|/res/courierchess/cc-king/cc-king-diffuse.jpg",
								"image|/res/courierchess/cc-king/cc-king-normal.jpg",
								"image|/res/images/crackles.jpg",
								"image|/res/images/tileralpha.png"
							],
							"world": config_view_skins_world,
							"camera": {
								"fov": 45,
								"distMax": 50,
								"radius": 12,
								"elevationAngle": 60,
								"elevationMin": 0
							}
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/courierchess/wikipedia-courier-sprites.png"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_11,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_11
		},
		{
			"name": "makruk",
			"modelScripts": modelScripts_12,
			"config": {
				"status": true,
				"model": {
					"title-en": "Makruk",
					"summary": "Thai Chess",
					"rules": {
						"en": "res/rules/makruk/mk-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/makruk/mk-thumb.png",
					"released": 1393948578,
					"credits": {
						"en": "res/rules/makruk/mk-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_12,
					"description": {
						"en": "res/rules/makruk/mk-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/makruk-600x600-3d.jpg",
							"res/visuals/makruk-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"image|/res/images/wood-chipboard-5.jpg",
								"smoothedfilegeo|0|/res/makruk/pawn/mk-pawn.js",
								"image|/res/makruk/pawn/mk-pawn-diffusemap.jpg",
								"image|/res/makruk/pawn/mk-pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/makruk/knight/mk-knight.js",
								"image|/res/makruk/knight/mk-knight-diffusemap.jpg",
								"image|/res/makruk/knight/mk-knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/makruk/bishop/mk-bishop.js",
								"image|/res/makruk/bishop/mk-bishop-diffusemap.jpg",
								"image|/res/makruk/bishop/mk-bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/makruk/rook/mk-rook.js",
								"image|/res/makruk/rook/mk-rook-diffusemap.jpg",
								"image|/res/makruk/rook/mk-rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/makruk/queen/mk-queen.js",
								"image|/res/makruk/queen/mk-queen-diffusemap.jpg",
								"image|/res/makruk/queen/mk-queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/makruk/king/mk-king.js",
								"image|/res/makruk/king/mk-king-diffusemap.jpg",
								"image|/res/makruk/king/mk-king-normalmap.jpg"
							],
							"world": config_view_skins_world_3,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/images/wikipedia.png",
								"image|/res/images/wood-chipboard-4.jpg"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_12,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_12
		},
		{
			"name": "shako-chess",
			"modelScripts": modelScripts_13,
			"config": {
				"status": true,
				"model": {
					"title-en": "Shako",
					"summary": "10x10 Chess",
					"rules": {
						"en": "res/rules/shako/shako-rules.html",
						"fr": "res/rules/shako/shako-rules-fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shako/shako-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shako/shako-credits.html",
						"fr": "res/rules/shako/shako-credits-fr.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_13,
					"description": {
						"en": "res/rules/shako/shako-description.html",
						"fr": "res/rules/shako/shako-description-fr.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/shako-600x600-3d.jpg",
							"res/visuals/shako-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_13,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_13
		},
		{
			"name": "shatranj-chess",
			"modelScripts": modelScripts_14,
			"config": {
				"status": true,
				"model": {
					"title-en": "Shatranj",
					"summary": "Ancient Chess",
					"rules": {
						"en": "res/rules/shatranj/shatranj-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shatranj/shatranj-thumb.png",
					"released": 1401461778,
					"credits": {
						"en": "res/rules/shatranj/shatranj-credits.html"
					},
					"gameOptions": config_model_gameOptions_3,
					"obsolete": false,
					"js": modelScripts_14,
					"description": {
						"en": "res/rules/shatranj/shatranj-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/shatranj-600x600-3d.jpg",
							"res/visuals/shatranj-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/nishapur/pawn/pawn.js",
								"image|/res/nishapur/pawn/pawn-diffusemap.jpg",
								"image|/res/nishapur/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/knight/knight.js",
								"image|/res/nishapur/knight/knight-diffusemap.jpg",
								"image|/res/nishapur/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/elephant/elephant.js",
								"image|/res/nishapur/elephant/elephant-diffusemap.jpg",
								"image|/res/nishapur/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/rook/rook.js",
								"image|/res/nishapur/rook/rook-diffusemap.jpg",
								"image|/res/nishapur/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/general/general.js",
								"image|/res/nishapur/general/general-diffusemap.jpg",
								"image|/res/nishapur/general/general-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/king/king.js",
								"image|/res/nishapur/king/king-diffusemap.jpg",
								"image|/res/nishapur/king/king-normalmap.jpg",
								"image|/res/images/wikipedia.png",
								"image|/res/images/wood-chipboard-2.jpg"
							],
							"world": config_view_skins_world_3,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/images/wikipedia.png",
								"image|/res/images/wood-chipboard-2.jpg",
								"image|/res/nishapur/nishapur-2d-sprites.png"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_14,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_14
		},
		{
			"name": "basic-chess",
			"modelScripts": modelScripts_15,
			"config": {
				"status": true,
				"model": {
					"title-en": "Basic Chess",
					"summary": "Basic Chess without openings book",
					"rules": config_model_rules,
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/famous/knight-thumbnail.png",
					"released": 1389887778,
					"rules": {
						"en": "res/rules/famous/rules.html",
						"fr": "res/rules/famous/rules-fr.html"
					},
					"credits": config_model_credits,
					"gameOptions": config_model_gameOptions,
					"obsolete": true,
					"js": modelScripts_15,
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"js": config_view_js_15,
					"visuals": {
						"600x600": [
							"res/visuals/classic-chess-600x600-3d.jpg",
							"res/visuals/classic-chess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_4,
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_4
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_15
		},
		{
			"name": "knightmate-chess",
			"modelScripts": modelScripts_knightmate,
			"config": {
				"status": true,
				"model": {
					"title-en": "KnightMate",
					"summary": "Checkmate the royal knight",
					"rules": config_model_rules,
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/standard/knightmate.png",
					"released": 1389887778,
					"rules": {
						"en": "res/rules/standard/knightmate.html",
					},
					"credits": config_model_credits,
					"gameOptions": config_model_gameOptions,
					"obsolete": true,
					"js": modelScripts_knightmate,
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"js": config_view_js_15,
					"visuals": {
						"600x600": [
							"res/visuals/knightmate-600x600-3d.png",
							"res/visuals/knightmate-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_4,
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_4
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_15
		},
		{
			"name": "raumschach",
			"modelScripts": modelScripts_16,
			"config": {
				"status": true,
				"model": {
					"title-en": "Raumschach",
					"summary": "5x5x5 Chess",
					"rules": {
						"en": "res/rules/raumschach/raumschach-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/raumschach/raumschach-thumb.png",
					"released": 1402066578,
					"credits": {
						"en": "res/rules/raumschach/raumschach-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_16,
					"description": {
						"en": "res/rules/raumschach/raumschach-description.html"
					},
					"levels": config_model_levels_10
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/raumschach-600x600-3d.jpg",
							"res/visuals/raumschach-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1.1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/unicorn/unicorn.js",
								"image|/res/fairy/unicorn/unicorn-diffusemap.jpg",
								"image|/res/fairy/unicorn/unicorn-normalmap.jpg"
							],
							"world": {
								"lightIntensity": 1,
								"skyLightIntensity": 0.5,
								"lightCastShadow": false,
								"fog": false,
								"color": 4686804,
								"lightPosition": config_view_skins_world_lightPosition,
								"skyLightPosition": config_view_skins_world_skyLightPosition,
								"lightShadowDarkness": 0.55,
								"ambientLightColor": 16777215
							},
							"camera": {
								"fov": 45,
								"distMax": 200,
								"radius": 24,
								"elevationAngle": 40,
								"elevationMin": -89,
								"rotationAngle": 150,
								"target": [
									0,
									0,
									5000
								],
								"targetBounds": config_view_skins_camera_targetBounds
							}
						},
						config_view_skins_5
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_16,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_16
		},
		{
			"name": "glinski-chess",
			"modelScripts": modelScripts_17,
			"config": {
				"status": true,
				"model": {
					"title-en": "Glinski Chess",
					"summary": "Hexagonal Chess",
					"rules": {
						"en": "res/rules/glinski/glinski-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/glinski/glinski-thumb.png",
					"released": 1396882578,
					"credits": {
						"en": "res/rules/glinski/glinski-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_17,
					"description": {
						"en": "res/rules/glinski/glinski-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/glinski-600x600-3d.jpg",
							"res/visuals/glinski-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_2,
					"preferredRatio": 0.89,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_8,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_17,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_17
		},
		{
			"name": "brusky-chess",
			"modelScripts": modelScripts_18,
			"config": {
				"status": true,
				"model": {
					"title-en": "Brusky Chess",
					"summary": "Hexagonal Chess",
					"rules": {
						"en": "res/rules/brusky/brusky-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/brusky/brusky-thumb.png",
					"released": 1398790818,
					"credits": {
						"en": "res/rules/brusky/brusky-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_18,
					"description": {
						"en": "res/rules/brusky/brusky-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/brusky-600x600-3d.jpg",
							"res/visuals/brusky-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_2,
					"preferredRatio": 1.7,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_4,
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_3
						},
						config_view_skins_7
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_18,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_18
		},
		{
			"name": "devasa-chess",
			"modelScripts": modelScripts_19,
			"config": {
				"status": true,
				"model": {
					"title-en": "De Vasa Chess",
					"summary": "Hexagonal Chess",
					"rules": {
						"en": "res/rules/devasa/devasa-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/devasa/devasa-thumb.png",
					"released": 1403189777,
					"credits": {
						"en": "res/rules/devasa/devasa-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_19,
					"description": {
						"en": "res/rules/devasa/devasa-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/devasa-600x600-3d.jpg",
							"res/visuals/devasa-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_2,
					"preferredRatio": 1.154700538,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_6,
							"world": config_view_skins_world,
							"camera": {
								"fov": 45,
								"distMax": 50,
								"radius": 14.5,
								"elevationAngle": 45,
								"elevationMin": 0,
								"distMin": 0,
								"rotationAngle": 80
							}
						},
						config_view_skins_7
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_19,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_19
		},
		{
			"name": "mccooey-chess",
			"modelScripts": modelScripts_20,
			"config": {
				"status": true,
				"model": {
					"title-en": "McCooey Chess",
					"summary": "Hexagonal Chess",
					"rules": {
						"en": "res/rules/mccooey/mccooey-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/mccooey/mccooey-thumb.png",
					"released": 1402671378,
					"credits": {
						"en": "res/rules/mccooey/mccooey-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_20,
					"description": {
						"en": "res/rules/mccooey/mccooey-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/mccooey-600x600-3d.jpg",
							"res/visuals/mccooey-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_2,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_8,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_20,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_20
		},
		{
			"name": "shafran-chess",
			"modelScripts": modelScripts_21,
			"config": {
				"status": true,
				"model": {
					"title-en": "Shafran Chess",
					"summary": "Hexagonal Chess",
					"rules": {
						"en": "res/rules/shafran/shafran-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shafran/shafran-thumb.png",
					"released": 1403535378,
					"credits": {
						"en": "res/rules/shafran/shafran-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_21,
					"description": {
						"en": "res/rules/shafran/shafran-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/shafran-600x600-3d.jpg",
							"res/visuals/shafran-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_2,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_8,
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_3
						},
						config_view_skins_7
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_21,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_21
		},
		{
			"name": "circular-chess",
			"modelScripts": modelScripts_22,
			"config": {
				"status": true,
				"model": {
					"title-en": "Modern Circular Chess",
					"summary": "Chess on a ring",
					"rules": {
						"en": "res/rules/circular/circular-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/circular/circular-thumb.png",
					"released": 1397055378,
					"credits": {
						"en": "res/rules/circular/circular-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_22,
					"description": {
						"en": "res/rules/circular/circular-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/circular-600x600-3d.jpg",
							"res/visuals/circular-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_3,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_8,
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_4
						},
						config_view_skins_7
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_22,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_22
		},
		{
			"name": "byzantine-chess",
			"modelScripts": modelScripts_23,
			"config": {
				"status": true,
				"model": {
					"title-en": "Byzantine Chess",
					"summary": "10th century circular Chess",
					"rules": {
						"en": "res/rules/byzantine/byzantine-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/byzantine/byzantine-thumb.png",
					"released": 1401461778,
					"credits": {
						"en": "res/rules/byzantine/byzantine-credits.html"
					},
					"gameOptions": config_model_gameOptions_3,
					"obsolete": false,
					"js": modelScripts_23,
					"description": {
						"en": "res/rules/byzantine/byzantine-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/byzantine-600x600-3d.jpg",
							"res/visuals/byzantine-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css_3,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/nishapur/pawn/pawn.js",
								"image|/res/nishapur/pawn/pawn-diffusemap.jpg",
								"image|/res/nishapur/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/knight/knight.js",
								"image|/res/nishapur/knight/knight-diffusemap.jpg",
								"image|/res/nishapur/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/elephant/elephant.js",
								"image|/res/nishapur/elephant/elephant-diffusemap.jpg",
								"image|/res/nishapur/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/rook/rook.js",
								"image|/res/nishapur/rook/rook-diffusemap.jpg",
								"image|/res/nishapur/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/general/general.js",
								"image|/res/nishapur/general/general-diffusemap.jpg",
								"image|/res/nishapur/general/general-normalmap.jpg",
								"smoothedfilegeo|0|/res/nishapur/king/king.js",
								"image|/res/nishapur/king/king-diffusemap.jpg",
								"image|/res/nishapur/king/king-normalmap.jpg",
								"image|/res/images/wikipedia.png",
								"image|/res/byzantine/byzantine-board.jpg"
							],
							"world": config_view_skins_world_3,
							"camera": config_view_skins_camera_4
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/images/wikipedia.png",
								"image|/res/byzantine/byzantine-board.jpg",
								"image|/res/nishapur/nishapur-2d-sprites.png"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_23,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_23
		},
		{
			"name": "3dchess",
			"modelScripts": modelScripts_24,
			"config": {
				"status": true,
				"model": {
					"title-en": "3D Chess",
					"summary": "Asymmetric 3D Chess (6x8x3)",
					"rules": {
						"en": "res/rules/3dchess/3dchess-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/3dchess/3dchess-thumb.png",
					"released": 1402584978,
					"credits": {
						"en": "res/rules/3dchess/3dchess-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_24,
					"description": {
						"en": "res/rules/3dchess/3dchess-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/3dchess-600x600-3d.jpg",
							"res/visuals/3dchess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload,
							"world": {
								"lightIntensity": 0.8,
								"skyLightIntensity": 0.5,
								"lightCastShadow": false,
								"fog": false,
								"color": 4686804,
								"lightPosition": config_view_skins_world_lightPosition,
								"skyLightPosition": config_view_skins_world_skyLightPosition,
								"lightShadowDarkness": 0.55,
								"ambientLightColor": 8947848
							},
							"camera": {
								"fov": 45,
								"distMax": 200,
								"radius": 18,
								"elevationAngle": 30,
								"elevationMin": -89,
								"rotationAngle": 150,
								"target": [
									0,
									0,
									2500
								],
								"targetBounds": config_view_skins_camera_targetBounds
							}
						},
						config_view_skins_5
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_24,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_24
		},
		{
			"name": "space-spartan",
			"modelScripts": modelScripts_space_spartan,
			"config": {
				"status": true,
				"model": {
					"title-en": "Space Spartan",
					"summary": "6x8x3 Chess",
					"rules": {
						"en": "res/rules/3dchess/space-spartan-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/3dchess/space-spartan.png",
					"released": 1402584978,
					"credits": {
						"en": "res/rules/3dchess/space-spartan-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_space_spartan,
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/space_spartan-600x600-3d.png",
							"res/visuals/space_spartan-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload,
							"world": {
								"lightIntensity": 0.8,
								"skyLightIntensity": 0.5,
								"lightCastShadow": false,
								"fog": false,

								"color": 4686804,
								"lightPosition": config_view_skins_world_lightPosition,
								"skyLightPosition": config_view_skins_world_skyLightPosition,
								"lightShadowDarkness": 0.55,
								"ambientLightColor": 8947848
							},
							"camera": {

								"fov": 45,
								"distMax": 200,
								"radius": 18,
								"elevationAngle": 30,
								"elevationMin": -89,
								"rotationAngle": 150,
								"target": [
									0,
									0,
									2500
								],
								"targetBounds": config_view_skins_camera_targetBounds
							}
						},
						config_view_skins_5
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_space_spartan,
					"useAutoComplete": true

				}
			},
			"viewScripts": config_view_js_space_spartan
		},
		{
			"name": "cylinder-chess",
			"modelScripts": modelScripts_25,
			"config": {
				"status": true,
				"model": {
					"title-en": "Cylinder Chess",
					"summary": "Cylinder Chess",
					"rules": {
						"en": "res/rules/cylinder/cylinder-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/cylinder/cylinder-thumb.png",
					"released": 1401720978,
					"credits": {
						"en": "res/rules/cylinder/cylinder-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_25,
					"description": {
						"en": "res/rules/cylinder/cylinder-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/cylinder-600x600-3d.jpg",
							"res/visuals/cylinder-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_4,
							"world": {
								"lightIntensity": 1,
								"skyLightIntensity": 1,
								"lightCastShadow": false,
								"fog": false,
								"color": 4686804,
								"lightPosition": {
									"x": 10,
									"y": 15,
									"z": 0
								},
								"skyLightPosition": config_view_skins_world_skyLightPosition,
								"lightShadowDarkness": 0.55,
								"ambientLightColor": 16777215
							},
							"camera": {
								"fov": 45,
								"distMax": 200,
								"radius": 18,
								"elevationAngle": 0,
								"elevationMin": -89,
								"rotationAngle": -90,
								"target": config_view_skins_camera_target,
								"targetBounds": config_view_skins_camera_targetBounds
							}
						},
						config_view_skins_5
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_25,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_25
		},
		{
			"name": "cubic-chess",
			"modelScripts": modelScripts_26,
			"config": {
				"status": true,
				"model": {
					"title-en": "360 Chess Authoring",
					"summary": "Inventing the 360 Chess variant on a cube",
					"rules": {
						"en": "cubic-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "cubic-chess-thumb.png",
					"released": 1395590178,
					"credits": config_model_credits,
					"gameOptions": config_model_gameOptions,
					"obsolete": true,
					"js": modelScripts_26,
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"js": config_view_js_26,
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1.3333333333333,
					"useShowMoves": false,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": {
						"sounds": true,
						"moves": false,
						"notation": false,
						"autocomplete": false
					},
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": config_view_skins_preload_4,
							"world": {
								"lightIntensity": 0,
								"skyLightIntensity": 0,
								"lightCastShadow": false,
								"fog": false,
								"color": 4686804,
								"lightPosition": {
									"x": 9,
									"y": 14,
									"z": 9
								},
								"skyLightPosition": config_view_skins_world_skyLightPosition,
								"lightShadowDarkness": 0.55,
								"ambientLightColor": 16777215
							},
							"camera": {
								"fov": 45,
								"distMax": 200,
								"radius": 25,
								"elevationAngle": 45,
								"elevationMin": -89,
								"rotationAngle": -45,
								"target": config_view_skins_camera_target,
								"targetBounds": config_view_skins_camera_targetBounds
							}
						},
						config_view_skins_4
					],
					"animateSelfMoves": false,
					"switchable": false,
					"sounds": config_view_sounds,
					"useAutoComplete": false
				}
			},
			"viewScripts": config_view_js_26
		},
		{
			"name": "rollerball-chess",
			"modelScripts": modelScripts_27,
			"config": {
				"status": true,
				"model": {
					"title-en": "Rollerball Chess",
					"summary": "Chess variant on an unusual board",
					"rules": {
						"en": "res/rules/rollerball/rollerball-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/rollerball/rollerball-thumb.png",
					"released": 1397141778,
					"credits": {
						"en": "res/rules/rollerball/rollerball-credits.html"
					},
					"gameOptions": {
						"preventRepeat": true,
						"uctTransposition": "state",
						"uctIgnoreLoop": false,
						"levelOptions": {
							"checkFactor": 0.2,
							"pieceValueFactor": 1,
							"posValueFactor": 0.1,
							"averageDistKingFactor": -0.01,
							"castleFactor": 0.1,
							"minorPiecesMovedFactor": 0.1,
							"pieceValueRatioFactor": 1,
							"endingKingFreedomFactor": 0.01,
							"endingDistKingFactor": 0.05,
							"distKingCornerFactor": 0.1,
							"distPawnPromoFactor": -0.05,
							"distKingThroneFactor": -0.1
						}
					},
					"obsolete": false,
					"js": modelScripts_27,
					"description": {
						"en": "res/rules/rollerball/rollerball-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/rollerball-600x600-3d.jpg",
							"res/visuals/rollerball-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js",
								"image|/res/staunton/pawn/pawn-diffusemap.jpg",
								"image|/res/staunton/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/staunton/knight/knight.js",
								"image|/res/staunton/knight/knight-diffusemap.jpg",
								"image|/res/staunton/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/staunton/bishop/bishop.js",
								"image|/res/staunton/bishop/bishop-diffusemap.jpg",
								"image|/res/staunton/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/staunton/rook/rook.js",
								"image|/res/staunton/rook/rook-diffusemap.jpg",
								"image|/res/staunton/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/staunton/queen/queen.js",
								"image|/res/staunton/queen/queen-diffusemap.jpg",
								"image|/res/staunton/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/staunton/king/king.js",
								"image|/res/staunton/king/king-diffusemap.jpg",
								"image|/res/staunton/king/king-normalmap.jpg",
								"image|/res/images/wood.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera_4
						},
						config_view_skins_7
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_27,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_27
		},
		{
			"name": "chess960",
			"modelScripts": modelScripts_28,
			"config": {
				"status": true,
				"model": {
					"title-en": "Chess 960",
					"summary": "Chess from randomized positions",
					"rules": {
						"en": "res/rules/famous/chess960-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/famous/chess960-thumb.png",
					"released": 1401720878,
					"credits": {
						"en": "res/rules/famous/chess960-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_28,
					"description": {
						"en": "res/rules/famous/chess960-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/chess960-600x600-3d.jpg",
							"res/visuals/chess960-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_28,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_28
		},
		{
			"name": "metamachy-chess",
			"modelScripts": modelScripts_29,
			"config": {
				"status": true,
				"model": {
					"title-en": "Metamachy",
					"summary": "Chess on 12x12 with fairy pieces",
					"rules": {
						"en": "res/rules/metamachy/metamachy-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/metamachy/metamachy-thumb.png",
					"released": 1402412178,
					"credits": {
						"en": "res/rules/metamachy/metamachy-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_29,
					"description": {
						"en": "res/rules/metamachy/metamachy-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/metamachy-600x600-3d.jpg",
							"res/visuals/metamachy-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/admiral/admiral.js",
								"image|/res/fairy/admiral/admiral-diffusemap.jpg",
								"image|/res/fairy/admiral/admiral-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_29,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_29
		},
		{
			"name": "capablanca-chess",
			"modelScripts": modelScripts_capablanca,
			"config": {
				"status": true,
				"model": {
					"title-en": "10x8 Chess variants",
					"summary": "Capablanca, Janus, Carrera, Gothic …",
					"rules": {
						"en": "res/rules/capa10x8/capablanca-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/capa10x8/capablanca-thumb.png",
					"released": 1404893076,
					"credits": {
						"en": "res/rules/capa10x8/capablanca-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_capablanca,
					"description": {
						"en": "res/rules/capa10x8/capablanca-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/capablanca-600x600-3d.jpg",
							"res/visuals/capablanca-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_11,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_capablanca,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_capablanca
		},
		{
			"name": "grand-chess",
			"modelScripts": modelScripts_34,
			"config": {
				"status": true,
				"model": {
					"title-en": "Grand Chess",
					"summary": "Chess on 10x10 (1984)",
					"rules": {
						"en": "res/rules/decimal/grand-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/decimal/grand-thumb.png",
					"released": 1404985842,
					"credits": {
						"en": "res/rules/decimal/grand-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_34,
					"description": {
						"en": "res/rules/decimal/grand-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/grand-600x600-3d.jpg",
							"res/visuals/grand-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_11,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_31,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_31
		},
		{
			"name": "hectochess",
			"modelScripts": modelScripts_hectochess,
			"config": {
				"status": true,
				"model": {
					"title-en": "Hectochess",
					"summary": "Chess on 10x10 with champions and wizards",
					"rules": {
						"en": "res/rules/decimal/hectochess-rules.html",
                        "fr": "res/rules/decimal/hectochess-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/decimal/hectochess-thumb.png",
					"released": 1404985842,
					"credits": {
						"en": "res/rules/decimal/hectochess-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_hectochess,
					"description": {
						"en": "res/rules/decimal/hectochess-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/hectochess-600x600-3d.jpg",
							"res/visuals/hectochess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_11,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_31,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_31
		},
		{
			"name": "heavychess",
			"modelScripts": modelScripts_heavychess,
			"config": {
				"status": true,
				"model": {

					"title-en": "Heavy chess",
					"summary": "Chess on 10x10 with many strong pieces",
					"rules": {
						"en": "res/rules/decimal/heavychess-rules.html",
                        "fr": "res/rules/decimal/heavychess-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/decimal/heavychess-thumb.png",
					"released": 1404985842,
					"credits": {
						"en": "res/rules/decimal/heavychess-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_heavychess,
					"description": {
						"en": "res/rules/decimal/heavychess-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/heavychess-600x600-3d.jpg",
							"res/visuals/heavychess-600x600-2d.jpg"
						]
					},
					"xdView": true,

					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_11,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,

					"js": config_view_js_31,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_31
		},
		{
			"name": "modern-chess",
			"modelScripts": modelScripts_35,
			"config": {
				"status": true,
				"model": {
					"title-en": "Modern Chess",
					"summary": "Chess on 9x9 (1968)",
					"rules": {
						"en": "res/rules/knighted/modern-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/knighted/modern-thumb.png",
					"released": 1404999946,
					"credits": {
						"en": "res/rules/knighted/modern-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_35,
					"description": {
						"en": "res/rules/knighted/modern-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/modern-600x600-3d.jpg",
							"res/visuals/modern-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_13,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_32,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_32
		},
		{
			"name": "chancellor-chess",
			"modelScripts": modelScripts_36,
			"config": {
				"status": true,
				"model": {
					"title-en": "Chancellor Chess",
					"summary": "Chess on 9x9 (1887)",
					"rules": {
						"en": "res/rules/knighted/chancellor-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/knighted/chancellor-thumb.png",
					"released": 1404918051,
					"credits": {
						"en": "res/rules/knighted/chancellor-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_36,
					"description": {
						"en": "res/rules/knighted/chancellor-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/chancellor-600x600-3d.jpg",
							"res/visuals/chancellor-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_32,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_32
		},
		{
			"name": "wildebeest-chess",
			"modelScripts": modelScripts_37,
			"config": {
				"status": true,
				"model": {
					"title-en": "Wildebeest Chess",
					"summary": "Chess on 11x10 (1987)",
					"rules": {
						"en": "wildebeest-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "wildebeest-thumb.png",
					"released": 1405001496,
					"credits": {
						"en": "wildebeest-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_37,
					"description": {
						"en": "wildebeest-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/wildebeest-600x600-3d.jpg",
							"res/visuals/wildebeest-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/dragon/dragon.js",
								"image|/res/fairy/dragon/dragon-diffusemap.jpg",
								"image|/res/fairy/dragon/dragon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_33,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_33
		},
		{
			"name": "smess",
			"modelScripts": modelScripts_38,
			"config": {
				"status": true,
				"model": {
					"title-en": "Smess",
					"summary": "The Ninny's Chess (1970)",
					"rules": {
						"en": "smess-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "smess-thumb.png",
					"released": 1402671377,
					"credits": {
						"en": "smess-credits.html"
					},
					"gameOptions": {
						"preventRepeat": true,
						"uctTransposition": "state",
						"uctIgnoreLoop": false,
						"levelOptions": {
							"endingKingFreedomFactor": 0.01,
							"pieceValueFactor": 1,
							"posValueFactor": 0.1,
							"averageDistKingFactor": -0.01,
							"castleFactor": 0.1,
							"minorPiecesMovedFactor": 0.1,
							"checkFactor": 0.2,
							"pieceValueRatioFactor": 1,
							"endingDistKingFactor": 0.05,
							"distKingCornerFactor": 0.1,
							"distPawnPromo1Factor": 0.3,
							"distPawnPromo2Factor": 0.2,
							"distPawnPromo3Factor": 0.1,
							"distPawnPromo4Factor": 0.05,
							"distPawnPromo5Factor": 0.03
						}
					},
					"obsolete": false,
					"js": modelScripts_38,
					"description": {
						"en": "smess-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/smess-600x600-3d.jpg",
							"res/visuals/smess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"smoothedfilegeo|0|/res/smess/token.js",
								"image|/res/smess/promo.png",
								"image|/res/smess/arrow-top.png",
								"image|/res/smess/arrow-top-left.png",
								"image|/res/images/wood-chipboard-4.jpg",
								"image|/res/smess/playera-bg.png",
								"image|/res/smess/playerb-bg.png",
								"image|/res/smess/smess-pieces-sprites.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2d",
							"title": "2D Classic",
							"3d": false,
							"preload": [
								"image|/res/images/cancel.png",
								"image|/res/images/whitebg.png",
								"image|/res/smess/promo.png",
								"image|/res/smess/arrow-top.png",
								"image|/res/smess/arrow-top-left.png",
								"image|/res/images/wood-chipboard-4.jpg",
								"image|/res/smess/smess-pieces-sprites-a.png",
								"image|/res/smess/smess-pieces-sprites-b.png"
							]
						}
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_34,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_34
		},
		{
			"name": "demi-chess",
			"modelScripts": modelScripts_39,
			"config": {
				"status": true,
				"model": {
					"title-en": "Demi-Chess",
					"summary": "4x8 chess variant by Peter Krystufek (1986)",
					"rules": {
						"en": "res/rules/demi/demi-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/demi/demi-thumb.png",
					"released": 1403189778,
					"credits": {
						"en": "res/rules/demi/demi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_39,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/demi/demi-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/demi-600x600-3d.jpg",
							"res/visuals/demi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_35,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_35
		},
		{
			"name": "romanchenko-chess",
			"modelScripts": modelScripts_40,
			"config": {
				"status": true,
				"model": {
					"title-en": "Romanchenko's Chess",
					"summary": "Shifted 8x8 chess variant by V. Romanchenko",
					"rules": {
						"en": "res/rules/standard/romanchenko-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/standard/romanchenko-thumb.png",
					"released": 1403535377,
					"credits": {
						"en": "standard/romanchenko-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"obsolete": false,
					"js": modelScripts_40,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/standard/romanchenko-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/romanchenko-600x600-3d.jpg",
							"res/visuals/romanchenko-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_36,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_36
		},
		{
			"name": "amazon-chess",
			"modelScripts": modelScripts_41,
			"config": {
				"status": true,
				"model": {
					"title-en": "Amazon Chess",
					"summary": "18th century, Russia",
					"rules": {
						"en": "res/rules/amazon/amazon-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/amazon/amazon-thumb.png",
					"released": 1405068607,
					"credits": {
						"en": "res/rules/amazon/amazon-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_41,
					"levels": config_model_levels_5,
					"description": {
						"en": "res/rules/amazon/amazon-description.html"
					}
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/amazon-600x600-3d.jpg",
							"res/visuals/amazon-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_37,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_37
		},
		{
			"name": "dukerutland-chess",
			"modelScripts": modelScripts_42,
			"config": {
				"status": true,
				"model": {
					"title-en": "Duke of Rutland Chess",
					"summary": "Chess on 14x10 (1747)",
					"rules": {
						"en": "dukerutland-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "dukerutland-thumb.png",
					"released": 1405068608,
					"credits": {
						"en": "dukerutland-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_42,
					"description": {
						"en": "dukerutland-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/dukerutland-600x600-3d.jpg",
							"res/visuals/dukerutland-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/crowned-rook/crowned-rook.js",
								"image|/res/fairy/crowned-rook/crowned-rook-diffusemap.jpg",
								"image|/res/fairy/crowned-rook/crowned-rook-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_38,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_38
		},
		{
			"name": "gustav3-chess",
			"modelScripts": modelScripts_43,
			"config": {
				"status": true,
				"model": {
					"title-en": "Gustav III Chess",
					"summary": "Gustav Johan Billberg, 1839",
					"rules": {
						"en": "res/rules/amazon/gustav3-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/amazon/gustav3-thumb.png",
					"released": 1405068609,
					"credits": {
						"en": "res/rules/amazon/gustav3-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_43,
					"description": {
						"en": "res/rules/amazon/gustav3-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/gustav3-600x600-3d.jpg",
							"res/visuals/gustav3-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_39,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_39
		},
		{
			"name": "hyderabad-chess",
			"modelScripts": modelScripts_44,
			"config": {
				"status": true,
				"model": {
					"title-en": "Hyderabad Decimal Chess",
					"summary": "Shir Muhammad Khan Iman, 1797-1798",
					"rules": {
						"en": "res/rules/decimal/hyderabad-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/decimal/hyderabad-thumb.png",
					"released": 1405068610,
					"credits": {
						"en": "res/rules/decimal/hyderabad-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_44,
					"description": {
						"en": "res/rules/decimal/hyderabad-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/hyderabad-600x600-3d.jpg",
							"res/visuals/hyderabad-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_40,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_40
		},
		{
			"name": "kaisergame-chess",
			"modelScripts": modelScripts_45,
			"config": {
				"status": true,
				"model": {
					"title-en": "Kaiserspiel",
					"summary": "Tressau, 1840",
					"rules": {
						"en": "res/rules/tressau/kaisergame-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/tressau/kaisergame-thumb.png",
					"released": 1405068611,
					"credits": {
						"en": "res/rules/tressau/kaisergame-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_45,
					"description": {
						"en": "res/rules/tressau/kaisergame-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/kaisergame-600x600-3d.jpg",
							"res/visuals/kaisergame-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_31,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_31
		},
		{
			"name": "sultangame-chess",
			"modelScripts": modelScripts_46,
			"config": {
				"status": true,
				"model": {
					"title-en": "Sultanspiel",
					"summary": "Tressau, 1840",
					"rules": {
						"en": "res/rules/tressau/sultangame-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/tressau/sultangame-thumb.png",
					"released": 1405068612,
					"credits": {
						"en": "res/rules/tressau/sultangame-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_46,
					"description": {
						"en": "res/rules/tressau/sultangame-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/sultangame-600x600-3d.jpg",
							"res/visuals/sultangame-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_41,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_41
		},
		{
			"name": "reformed-courier-chess",
			"modelScripts": modelScripts_47,
			"config": {
				"status": true,
				"model": {
					"title-en": "Reformed Courierspiel",
					"summary": "Clément Bégnis, 2011",
					"rules": {
						"en": "res/rules/reformed-courier/reformed-courier-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/reformed-courier/reformed-courier-thumb.png",
					"released": 1405068613,
					"credits": {
						"en": "res/rules/reformed-courier/reformed-courier-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_47,
					"description": {
						"en": "res/rules/reformed-courier/reformed-courier-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/reformed-courier-600x600-3d.jpg",
							"res/visuals/reformed-courier-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lighthouse/lighthouse.js",
								"image|/res/fairy/lighthouse/lighthouse-diffusemap.jpg",
								"image|/res/fairy/lighthouse/lighthouse-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/unicorn/unicorn.js",
								"image|/res/fairy/unicorn/unicorn-diffusemap.jpg",
								"image|/res/fairy/unicorn/unicorn-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_42,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_42
		},
		{
			"name": "tutti-frutti-chess",
			"modelScripts": modelScripts_48,
			"config": {
				"status": true,
				"model": {
					"title-en": "Tutti-Frutti Chess",
					"summary": "Ralph Betza et Philip Cohen, 1978-79",
					"rules": {
						"en": "res/rules/amazon/tutti-frutti-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/amazon/tutti-frutti-thumb.png",
					"released": 1405068614,
					"credits": {
						"en": "res/rules/amazon/tutti-frutti-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_48,
					"description": {
						"en": "res/rules/amazon/tutti-frutti-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/tutti-frutti-600x600-3d.jpg",
							"res/visuals/tutti-frutti-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_43,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_43
		},
		{
			"name": "sweet16-chess",
			"modelScripts": modelScripts_49,
			"config": {
				"status": true,
				"model": {
					"title-en": "Sweet 16 Chess",
					"summary": "A huge 16x16 Chess Variant",
					"rules": {
						"en": "res/rules/standard/sweet16-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/standard/sweet16-thumb.png",
					"released": 1482940591,
					"credits": {
						"en": "res/rules/standard/sweet16-credits.html"
					},
					"gameOptions": {
						"preventRepeat": true,
						"uctTransposition": "state",
						"uctIgnoreLoop": false,
						"levelOptions": config_view_skins_preload_4
					},
					"obsolete": false,
					"js": modelScripts_49,
					"description": {
						"en": "res/rules/standard/sweet16-description.html"
					},
					"levels": config_model_levels_5
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/sweet16-600x600-3d.jpg",
							"res/visuals/sweet16-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": config_view_skins_3,
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_44,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_44
		},
		{
			"name": "tera-chess",
			"modelScripts": modelScripts_tera,
			"config": {
				"status": true,
				"model": {
					"title-en": "Terachess",
					"summary": "Chess on 16x16 with fairy pieces",
					"rules": {
						"en": "res/rules/terachess/terachess-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/terachess/terachess-thumb.png",
					"released": 1497442763,
					"credits": {
						"en": "res/rules/terachess/terachess-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_tera,
					"description": {
						"en": "res/rules/terachess/terachess-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/terachess-600x600-3d.jpg",
							"res/visuals/terachess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/corporal/corporal.js",
								"image|/res/fairy/corporal/corporal-diffusemap.jpg",
								"image|/res/fairy/corporal/corporal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/star/star.js",
								"image|/res/fairy/star/star-diffusemap.jpg",
								"image|/res/fairy/star/star-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rhino/rhino.js",
								"image|/res/fairy/rhino/rhino-diffusemap.jpg",
								"image|/res/fairy/rhino/rhino-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bull/bull.js",
								"image|/res/fairy/bull/bull-diffusemap.jpg",
								"image|/res/fairy/bull/bull-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/antelope/antelope.js",
								"image|/res/fairy/antelope/antelope-diffusemap.jpg",
								"image|/res/fairy/antelope/antelope-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/machine/machine.js",
								"image|/res/fairy/machine/machine-diffusemap.jpg",
								"image|/res/fairy/machine/machine-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/buffalo/buffalo.js",
								"image|/res/fairy/buffalo/buffalo-diffusemap.jpg",
								"image|/res/fairy/buffalo/buffalo-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/ship/ship.js",
								"image|/res/fairy/ship/ship-diffusemap.jpg",
								"image|/res/fairy/ship/ship-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_tera,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_tera
		},
		{
			"name": "giga-chess",
			"modelScripts": modelScripts_giga,
			"config": {
				"status": true,
				"model": {
					"title-en": "Gigachess",
					"summary": "Chess on 14x14 with fairy pieces",
					"rules": {
						"en": "res/rules/gigachess/gigachess-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/gigachess/gigachess-thumb.png",
					"released": 1497771910,
					"credits": {
						"en": "res/rules/gigachess/gigachess-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_giga,
					"description": {
						"en": "res/rules/gigachess/gigachess-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/gigachess-600x600-3d.jpg",
							"res/visuals/gigachess-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/corporal/corporal.js",
								"image|/res/fairy/corporal/corporal-diffusemap.jpg",
								"image|/res/fairy/corporal/corporal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/machine/machine.js",
								"image|/res/fairy/machine/machine-diffusemap.jpg",
								"image|/res/fairy/machine/machine-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/buffalo/buffalo.js",
								"image|/res/fairy/buffalo/buffalo-diffusemap.jpg",
								"image|/res/fairy/buffalo/buffalo-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/ship/ship.js",
								"image|/res/fairy/ship/ship-diffusemap.jpg",
								"image|/res/fairy/ship/ship-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_giga,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_giga
		},
		{
			"name": "leychessalpha-chess",
			"modelScripts": modelScripts_lca,
			"config": {
				"status": true,
				"model": {
					"title-en": "LeyChessAlpha",
					"summary": "Chess on 12x12 with fairy pieces",
					"rules": {
						"en": "res/rules/duodecimal/leychessalpha-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/duodecimal/leychessalpha-thumb.png",
					"released": 1402412178,
					"credits": {
						"en": "res/rules/duodecimal/leychessalpha-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_lca,
					"description": {
						"en": "res/rules/duodecimal/leychessalpha-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/leychessalpha-600x600-3d.jpg",
							"res/visuals/leychessalpha-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/admiral/admiral.js",
								"image|/res/fairy/admiral/admiral-diffusemap.jpg",
								"image|/res/fairy/admiral/admiral-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/unicorn/unicorn.js",
								"image|/res/fairy/unicorn/unicorn-diffusemap.jpg",
								"image|/res/fairy/unicorn/unicorn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lighthouse/lighthouse.js",
								"image|/res/fairy/lighthouse/lighthouse-diffusemap.jpg",
								"image|/res/fairy/lighthouse/lighthouse-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/dragon/dragon.js",
								"image|/res/fairy/dragon/dragon-diffusemap.jpg",
								"image|/res/fairy/dragon/dragon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/crowned-rook/crowned-rook.js",
								"image|/res/fairy/crowned-rook/crowned-rook-diffusemap.jpg",
								"image|/res/fairy/crowned-rook/crowned-rook-normalmap.jpg",
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_lca,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_lca
		},
		{	  		
			"name": "fantasticXIII-chess",
			"modelScripts": modelScripts_fantasticXIII,
			"config": {
				"status": true,
				"model": {
					"title-en": "Fantastic XIII",
					"summary": "Chess on 13x13 with fairy pieces",
					"rules": {
						"en": "res/rules/fantasticXIII/fantasticXIII-rules.html",
						"fr": "res/rules/fantasticXIII/fantasticXIII-rules-fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/fantasticXIII/fantasticXIII-thumb.png",
					"released": 1497771910,
					"credits": {
						"en": "res/rules/fantasticXIII/fantasticXIII-credits.html"
					},
					"gameOptions": config_model_gameOptions,

					"obsolete": false,
					"js": modelScripts_fantasticXIII,
					"description": {
						"en": "res/rules/fantasticXIII/fantasticXIII-description.html",
						"fr": "res/rules/fantasticXIII/fantasticXIII-description-fr.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/fantasticXIII-600x600-3d.jpg",
							"res/visuals/fantasticXIII-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/mamoth/mamoth.js",
 								"image|/res/fairy/mamoth/mamoth-diffusemap.jpg",
 								"image|/res/fairy/mamoth/mamoth-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/squirrel/squirrel.js",
 								"image|/res/fairy/squirrel/squirrel-diffusemap.jpg",
 								"image|/res/fairy/squirrel/squirrel-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/griffon/griffon.js",
 								"image|/res/fairy/griffon/griffon-diffusemap.jpg",
 								"image|/res/fairy/griffon/griffon-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/axe/axe.js",
 								"image|/res/fairy/axe/axe-diffusemap.jpg",
 								"image|/res/fairy/axe/axe-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/hawk/hawk.js",
 								"image|/res/fairy/hawk/hawk-diffusemap.jpg",
 								"image|/res/fairy/hawk/hawk-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/ship/ship.js",
 								"image|/res/fairy/ship/ship-diffusemap.jpg",
 								"image|/res/fairy/ship/ship-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/dragon/dragon.js",
 								"image|/res/fairy/dragon/dragon-diffusemap.jpg",
 								"image|/res/fairy/dragon/dragon-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/leopard/leopard.js",
 								"image|/res/fairy/leopard/leopard-diffusemap.jpg",
 								"image|/res/fairy/leopard/leopard-normalmap.jpg"	
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_fantasticXIII,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_fantasticXIII
		},
		{
			"name": "bigorra-chess",
			"modelScripts": modelScripts_bigorra,
			"config": {
				"status": true,
				"model": {
					"title-en": "Bigorra",

					"summary": "FantasticXIII and Gigachess II on 16x16",
					"rules": {
						"en": "res/rules/fantasticXIII/bigorra-rules.html",
                        			"fr": "res/rules/fantasticXIII/bigorra-rules-fr.html"
					},
					"module": "chessbase",
					"plazza": "true",

					"thumbnail": "res/rules/fantasticXIII/bigorra-thumb.png",
					"released": 1497771910,
					"credits": {
						"en": "res/rules/fantasticXIII/fantasticXIII-credits.html"
					},

					"gameOptions": config_model_gameOptions,

					"obsolete": false,
					"js": modelScripts_bigorra,
					"description": {
						"en": "res/rules/fantasticXIII/bigorra-description.html",
						"fr": "res/rules/fantasticXIII/bigorra-description-fr.html"

					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {

						"600x600": [
							"res/visuals/bigorra-600x600-3d.jpg",
							"res/visuals/bigorra-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,

					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/mamoth/elephant.js",
 								"image|/res/fairy/mamoth/mamoth-diffusemap.jpg",
 								"image|/res/fairy/mamoth/mamoth-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/squirrel/squirrel.js",
 								"image|/res/fairy/squirrel/squirrel-diffusemap.jpg",
 								"image|/res/fairy/squirrel/squirrel-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/griffon/griffon.js",
 								"image|/res/fairy/griffon/griffon-diffusemap.jpg",
 								"image|/res/fairy/griffon/griffon-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/axe/axe.js",
 								"image|/res/fairy/axe/axe-diffusemap.jpg",
 								"image|/res/fairy/axe/axe-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/hawk/hawk.js",
 								"image|/res/fairy/hawk/hawk-diffusemap.jpg",
 								"image|/res/fairy/hawk/hawk-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/machine/machine.js",
								"image|/res/fairy/machine/machine-diffusemap.jpg",
								"image|/res/fairy/machine/machine-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/buffalo/buffalo.js",
								"image|/res/fairy/buffalo/buffalo-diffusemap.jpg",
								"image|/res/fairy/buffalo/buffalo-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rhino/rhino.js",
								"image|/res/fairy/rhino/rhino-diffusemap.jpg",
								"image|/res/fairy/rhino/rhino-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/giraffe/giraffe.js",
								"image|/res/fairy/giraffe/giraffe-diffuse-map.jpg",
								"image|/res/fairy/giraffe/giraffe-normal-map.jpg",
								"smoothedfilegeo|0|/res/fairy/ship/ship.js",
 								"image|/res/fairy/ship/ship-diffusemap.jpg",
 								"image|/res/fairy/ship/ship-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/dragon/dragon.js",
 								"image|/res/fairy/dragon/dragon-diffusemap.jpg",
 								"image|/res/fairy/dragon/dragon-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/leopard/leopard.js",
 								"image|/res/fairy/leopard/leopard-diffusemap.jpg",
 								"image|/res/fairy/leopard/leopard-normalmap.jpg"	
							],
							"world": config_view_skins_world,

							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,

					"sounds": config_view_sounds,
					"js": config_view_js_bigorra,
					"useAutoComplete": true
				}
			},

			"viewScripts": config_view_js_bigorra
		},
		{
 			"name": "wild-tamerlane-chess",
 			"modelScripts": modelScripts_wtamerlane,
 			"config": {
 				"status": true,
 				"model": {
 					"title-en": "Wild Tamerlane",
 					"summary": "Chess on 11x11 with fairy pieces",
 					"rules": {
 						"en": "res/rules/wildtamerlane/wild-tamerlane-rules.html"
 					},
 					"module": "chessbase",
 					"plazza": "true",
 					"thumbnail": "res/rules/wildtamerlane/wild-tamerlane-thumb.png",
 					"released": 1497874349,
 					"credits": {
 						"en": "res/rules/wildtamerlane/wild-tamerlane-credits.html"
 					},
 					"gameOptions": config_model_gameOptions,
 					"obsolete": false,
 					"js": modelScripts_wtamerlane,
 					"description": {
 						"en": "res/rules/wildtamerlane/wild-tamerlane-description.html"
 					},
 					"levels": config_model_levels_15
 				},
 				"view": {
 					"title-en": "Wild Tamerlane view",
 					"visuals": {
 						"600x600": [
 							"res/visuals/wild-tamerlane-600x600-3d.jpg",
 							"res/visuals/wild-tamerlane-600x600-2d.jpg"
 						]
 					},
 					"xdView": true,
 					"css": config_view_css,
 					"preferredRatio": 1,
 					"useShowMoves": true,
 					"useNotation": true,
 					"module": "chessbase",
 					"defaultOptions": config_view_defaultOptions,
 					"skins": [
 						{
 							"name": "skin3d",
 							"title": "3D Classic",
 							"3d": true,
 							"preload": [
 								"smoothedfilegeo|0|/res/ring-target.js",
 								"image|/res/images/cancel.png",
 								"image|/res/images/wikipedia.png",
 								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
 								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
 								"image|/res/fairy/pawn/pawn-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
 								"image|/res/fairy/rook/rook-diffusemap.jpg",
 								"image|/res/fairy/rook/rook-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
 								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
 								"image|/res/fairy/bishop/bishop-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
 								"image|/res/fairy/knight/knight-diffusemap.jpg",
 								"image|/res/fairy/knight/knight-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
 								"image|/res/fairy/queen/queen-diffusemap.jpg",
 								"image|/res/fairy/queen/queen-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/king/king.js",
 								"image|/res/fairy/king/king-diffusemap.jpg",
 								"image|/res/fairy/king/king-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
 								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
 								"image|/res/fairy/elephant/elephant-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
 								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
 								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
 								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
 								"image|/res/fairy/eagle/eagle-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
 								"image|/res/fairy/camel/camel-diffusemap.jpg",
 								"image|/res/fairy/camel/camel-normalmap.jpg"							      
 							],
 							"world": config_view_skins_world,
 							"camera": config_view_skins_camera
 						},
 						config_view_skins_9
 					],
 					"animateSelfMoves": false,
 					"switchable": true,
 					"sounds": config_view_sounds,
 					"js": config_view_js_wtamerlane,
 					"useAutoComplete": true
 				}
 			},
 			"viewScripts": config_view_js_wtamerlane
  		},
		{
 			"name": "pemba-chess",
 			"modelScripts": modelScripts_pemba,
 			"config": {
 				"status": true,
 				"model": {
 					"title-en": "Pemba",
 					"summary": "Extended Shako on 10x10 with fairy pieces",
 					"rules": {
 						"en": "res/rules/shako/pemba-rules.html",
						"fr": "res/rules/shako/pemba-rules-fr.html"
 					},
 					"module": "chessbase",
 					"plazza": "true",
 					"thumbnail": "res/rules/shako/pemba-thumb.png",
 					"released": 1497874349,
 					"credits": {
 						"en": "res/rules/shako/pemba-credits.html"
 					},
 					"gameOptions": config_model_gameOptions,
 					"obsolete": false,
 					"js": modelScripts_pemba,
 					"description": {
 						"en": "res/rules/shako/pemba-description.html",
						"fr": "res/rules/shako/pemba-description-fr.html"
 					},
 					"levels": config_model_levels_15
 				},
 				"view": {
 					"title-en": "pemba view",
 					"visuals": {
 						"600x600": [
 							"res/visuals/pemba-600x600-3d.jpg",
 							"res/visuals/pemba-600x600-2d.jpg"
 						]
 					},
 					"xdView": true,
 					"css": config_view_css,
 					"preferredRatio": 1,
 					"useShowMoves": true,
 					"useNotation": true,
 					"module": "chessbase",
 					"defaultOptions": config_view_defaultOptions,
 					"skins": [
 						{
 							"name": "skin3d",
 							"title": "3D Classic",
 							"3d": true,
 							"preload": [
 								"smoothedfilegeo|0|/res/ring-target.js",
 								"image|/res/images/cancel.png",
 								"image|/res/images/wikipedia.png",
 								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
 								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
 								"image|/res/fairy/pawn/pawn-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
 								"image|/res/fairy/rook/rook-diffusemap.jpg",
 								"image|/res/fairy/rook/rook-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
 								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
 								"image|/res/fairy/bishop/bishop-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
 								"image|/res/fairy/knight/knight-diffusemap.jpg",
 								"image|/res/fairy/knight/knight-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
 								"image|/res/fairy/queen/queen-diffusemap.jpg",
 								"image|/res/fairy/queen/queen-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/king/king.js",
 								"image|/res/fairy/king/king-diffusemap.jpg",
 								"image|/res/fairy/king/king-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
 								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
 								"image|/res/fairy/elephant/elephant-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
 								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
 								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
 								"image|/res/fairy/camel/camel-diffusemap.jpg",
 								"image|/res/fairy/camel/camel-normalmap.jpg",
                                "smoothedfilegeo|0|/res/fairy/giraffe/giraffe.js",
 								"image|/res/fairy/giraffe/giraffe-diffuse-map.jpg",
 								"image|/res/fairy/giraffe/giraffe-normal-map.jpg"							      
 							],
 							"world": config_view_skins_world,
 							"camera": config_view_skins_camera
 						},
 						config_view_skins_9
 					],
 					"animateSelfMoves": false,
 					"switchable": true,
 					"sounds": config_view_sounds,
 					"js": config_view_js_pemba,
 					"useAutoComplete": true
 				}
 			},
 			"viewScripts": config_view_js_pemba
  		}	,	  		
		{
			"name": "giga-chessII",
			"modelScripts": modelScripts_gigaII,
			"config": {
				"status": true,
				"model": {
					"title-en": "Gigachess II",
					"summary": "Chess on 14x14 with fairy pieces",
					"rules": {
						"en": "res/rules/gigachess/gigachessII-rules.html",
                        			"fr": "res/rules/gigachess/gigachessII-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/gigachess/gigachessII-thumb.png",
					"released": 1497771910,
					"credits": {
						"en": "res/rules/gigachess/gigachessII-credits.html"
					},
					"gameOptions": config_model_gameOptions,

					"obsolete": false,
					"js": modelScripts_gigaII,
					"description": {
						"en": "res/rules/gigachess/gigachessII-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/gigachessII-600x600-3d.jpg",
							"res/visuals/gigachessII-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/machine/machine.js",
								"image|/res/fairy/machine/machine-diffusemap.jpg",
								"image|/res/fairy/machine/machine-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/buffalo/buffalo.js",
								"image|/res/fairy/buffalo/buffalo-diffusemap.jpg",
								"image|/res/fairy/buffalo/buffalo-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
	                            "smoothedfilegeo|0|/res/fairy/star/star.js",
								"image|/res/fairy/star/star-diffusemap.jpg",
								"image|/res/fairy/star/star-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rhino/rhino.js",
								"image|/res/fairy/rhino/rhino-diffusemap.jpg",
								"image|/res/fairy/rhino/rhino-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/giraffe/giraffe.js",
								"image|/res/fairy/giraffe/giraffe-diffuse-map.jpg",
								"image|/res/fairy/giraffe/giraffe-normal-map.jpg",
								"smoothedfilegeo|0|/res/fairy/amazon/amazon.js",
								"image|/res/fairy/amazon/amazon-diffusemap.jpg",
								"image|/res/fairy/amazon/amazon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/marshall/marshall.js",
								"image|/res/fairy/marshall/marshall-diffusemap.jpg",
								"image|/res/fairy/marshall/marshall-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js",
								"image|/res/fairy/cardinal/cardinal-diffusemap.jpg",
								"image|/res/fairy/cardinal/cardinal-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_gigaII,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_gigaII
		},
		{
 			"name": "gross-chess",
 			"modelScripts": modelScripts_gross,
 			"config": {
 				"status": true,
 				"model": {
 					"title-en": "Gross Chess",

 					"summary": "Omega/Gothic/Cambaluc Chess on 12x12",
 					"rules": {
 						"en": "res/rules/duodecimal/gross-rules.html",
						"fr": "res/rules/duodecimal/gross-rules_fr.html"
 					},
 					"module": "chessbase",
 					"plazza": "true",
 					"thumbnail": "res/rules/duodecimal/gross-thumb.png",
 					"released": 1497874349,

 					"credits": {
 						"en": "res/rules/duodecimal/gross-credits.html"
 					},
 					"gameOptions": config_model_gameOptions,
 					"obsolete": false,
 					"js": modelScripts_gross,

 					"description": {
 						"en": "res/rules/duodecimal/gross-description.html"
 					},
 					"levels": config_model_levels_15
 				},
 				"view": {
 					"title-en": "Gross view",
 					"visuals": {
 						"600x600": [
 							"res/visuals/gross-600x600-3d.jpg",
 							"res/visuals/gross-600x600-2d.jpg"
 						]
 					},
 					"xdView": true,
 					"css": config_view_css,
 					"preferredRatio": 1,
 					"useShowMoves": true,
 					"useNotation": true,
 					"module": "chessbase",
 					"defaultOptions": config_view_defaultOptions,

 					"skins": [
 						{
 							"name": "skin3d",
 							"title": "3D Classic",
 							"3d": true,
 							"preload": [
 								"smoothedfilegeo|0|/res/ring-target.js",
 								"image|/res/images/cancel.png",
 								"image|/res/images/wikipedia.png",

 								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
 								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
 								"image|/res/fairy/pawn/pawn-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
 								"image|/res/fairy/rook/rook-diffusemap.jpg",
 								"image|/res/fairy/rook/rook-normalmap.jpg",

 								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
 								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
 								"image|/res/fairy/bishop/bishop-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
 								"image|/res/fairy/knight/knight-diffusemap.jpg",
 								"image|/res/fairy/knight/knight-normalmap.jpg",

 								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
 								"image|/res/fairy/queen/queen-diffusemap.jpg",
 								"image|/res/fairy/queen/queen-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/king/king.js",
 								"image|/res/fairy/king/king-diffusemap.jpg",

 								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
 								"image|/res/fairy/elephant/elephant-diffusemap.jpg",

 								"image|/res/fairy/elephant/elephant-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
 								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
 								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/griffon/griffon.js",
 								"image|/res/fairy/griffon/griffon-diffusemap.jpg",

 								"image|/res/fairy/griffon/griffon-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/camel/camel.js",

 								"image|/res/fairy/camel/camel-diffusemap.jpg",
 								"image|/res/fairy/camel/camel-normalmap.jpg"							      
 							],
 							"world": config_view_skins_world,
 							"camera": config_view_skins_camera
 						},

 						config_view_skins_9
 					],
 					"animateSelfMoves": false,
 					"switchable": true,
 					"sounds": config_view_sounds,
 					"js": config_view_js_duodecimal,

 					"useAutoComplete": true
 				}
 			},
 			"viewScripts": config_view_js_duodecimal
  		},
		{
 			"name": "timurid-chess",
 			"modelScripts": modelScripts_timurid,
 			"config": {
 				"status": true,
 				"model": {
 					"title-en": "Timurid",

 					"summary": "Tamerlan II on 12x12 with fairy pieces",
 					"rules": {
 						"en": "res/rules/duodecimal/timurid-rules.html",
						"fr": "res/rules/duodecimal/timurid-rules_fr.html"
 					},
 					"module": "chessbase",
 					"plazza": "true",
 					"thumbnail": "res/rules/duodecimal/timurid-thumb.png",
 					"released": 1497874349,

 					"credits": {
 						"en": "res/rules/duodecimal/timurid-credits.html"
 					},
 					"gameOptions": config_model_gameOptions,
 					"obsolete": false,
 					"js": modelScripts_timurid,
 					"description": {
 						"en": "res/rules/duodecimal/timurid-description.html"
 					},
 					"levels": config_model_levels_15
 				},
 				"view": {
 					"title-en": "Timurid view",
 					"visuals": {
 						"600x600": [
 							"res/visuals/wild-babur-600x600-3d.jpg",
 							"res/visuals/wild-mirza-600x600-2d.jpg"
 						]
 					},
 					"xdView": true,
 					"css": config_view_css,
 					"preferredRatio": 1,
 					"useShowMoves": true,
 					"useNotation": true,
 					"module": "chessbase",
 					"defaultOptions": config_view_defaultOptions,
 					"skins": [
 						{
 							"name": "skin3d",
 							"title": "3D Classic",
 							"3d": true,
 							"preload": [
 								"smoothedfilegeo|0|/res/ring-target.js",
 								"image|/res/images/cancel.png",
 								"image|/res/images/wikipedia.png",
 								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
 								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
 								"image|/res/fairy/pawn/pawn-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
 								"image|/res/fairy/rook/rook-diffusemap.jpg",
 								"image|/res/fairy/rook/rook-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
 								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
 								"image|/res/fairy/bishop/bishop-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
 								"image|/res/fairy/knight/knight-diffusemap.jpg",
 								"image|/res/fairy/knight/knight-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
 								"image|/res/fairy/queen/queen-diffusemap.jpg",
 								"image|/res/fairy/queen/queen-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/king/king.js",
 								"image|/res/fairy/king/king-diffusemap.jpg",
 								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
 								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
 								"image|/res/fairy/elephant/elephant-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
 								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
 								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/griffon/griffon.js",
 								"image|/res/fairy/griffon/griffon-diffusemap.jpg",
 								"image|/res/fairy/griffon/griffon-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
 								"image|/res/fairy/camel/camel-diffusemap.jpg",
 								"image|/res/fairy/camel/camel-normalmap.jpg"							      
 							],
 							"world": config_view_skins_world,
 							"camera": config_view_skins_camera
 						},
 						config_view_skins_9
 					],
 					"animateSelfMoves": false,
 					"switchable": true,
 					"sounds": config_view_sounds,
 					"js": config_view_js_timurid,
 					"useAutoComplete": true
 				}
 			},
 			"viewScripts": config_view_js_timurid
  		},
		{
			"name": "zanzibar-s-chess",
			"modelScripts": modelScripts_zanzibars,
			"config": {
				"status": true,
				"model": {
					"title-en": "Zanzibar S",
					"summary": "Extended Metamachy - 12x12",
					"rules": {
						"en": "res/rules/metamachy/zanzibar-s-rules.html",
						"fr": "res/rules/metamachy/zanzibar-s-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/metamachy/zanzibar-s-thumb.png",
					"released": 1402412178,
					"credits": {
						"en": "res/rules/metamachy/zanzibar-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"obsolete": false,
					"js": modelScripts_zanzibars,
					"description": {
						"en": "res/rules/metamachy/zanzibar-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/zanzibar-600x600-3d.jpg",
							"res/visuals/zanzibar-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/knight/knight.js",
								"image|/res/fairy/knight/knight-diffusemap.jpg",
								"image|/res/fairy/knight/knight-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/queen/queen.js",
								"image|/res/fairy/queen/queen-diffusemap.jpg",
								"image|/res/fairy/queen/queen-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/cannon2/cannon2.js",
								"image|/res/fairy/cannon2/cannon2-diffusemap.jpg",
								"image|/res/fairy/cannon2/cannon2-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/elephant/elephant.js",
								"image|/res/fairy/elephant/elephant-diffusemap.jpg",
								"image|/res/fairy/elephant/elephant-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/prince/prince.js",
								"image|/res/fairy/prince/prince-diffusemap.jpg",
								"image|/res/fairy/prince/prince-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/camel/camel.js",
								"image|/res/fairy/camel/camel-diffusemap.jpg",
								"image|/res/fairy/camel/camel-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bow/bow.js",
								"image|/res/fairy/bow/bow-diffusemap.jpg",
								"image|/res/fairy/bow/bow-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/machine/machine.js",
								"image|/res/fairy/machine/machine-diffusemap.jpg",
								"image|/res/fairy/machine/machine-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/buffalo/buffalo.js",
								"image|/res/fairy/buffalo/buffalo-diffusemap.jpg",
								"image|/res/fairy/buffalo/buffalo-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rhino/rhino.js",
								"image|/res/fairy/rhino/rhino-diffusemap.jpg",
								"image|/res/fairy/rhino/rhino-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/giraffe/giraffe.js",
								"image|/res/fairy/giraffe/giraffe-diffuse-map.jpg",
								"image|/res/fairy/giraffe/giraffe-normal-map.jpg",
								"smoothedfilegeo|0|/res/fairy/eagle/eagle.js",
								"image|/res/fairy/eagle/eagle-diffusemap.jpg",
								"image|/res/fairy/eagle/eagle-normalmap.jpg"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_zanzibars,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_zanzibars
		},
		{
			"name": "team-mate-chess",
			"modelScripts": modelScripts_100,
			"config": {
				"status": true,
				"model": {
					"title-en": "Team-Mate Chess",
					"summary": "8x8 variant with many different pieces",
					"rules": {
						"en": "res/rules/team-mate/team-mate-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/team-mate/team-mate-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/team-mate/team-mate-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_100,
					"description": {
						"en": "res/rules/team-mate/team-mate-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/team-mate-600x600-3d.jpg",
							"res/visuals/team-mate-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_100,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_100
		},
		{
			"name": "werewolf-chess",
			"modelScripts": modelScripts_101,
			"config": {
				"status": true,
				"model": {
					"title-en": "Werewolf Chess",
					"summary": "a contageous Werewolf replaces the Queen",
					"rules": {
						"en": "res/rules/werewolf/werewolf-rules.html",
						"fr": "res/rules/werewolf/werewolf-rules_fr.html",
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/werewolf/werewolf-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/werewolf/werewolf-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_101,
					"description": {
						"en": "res/rules/werewolf/werewolf-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/werewolf-600x600-3d.jpg",
							"res/visuals/werewolf-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_101,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_101
		},
		{
			"name": "elven-chess",
			"modelScripts": modelScripts_102,
			"config": {
				"status": true,
				"model": {
					"title-en": "Elven Chess",
					"summary": "10x10 variant with double-capturing super-piece",
					"rules": {
						"en": "res/rules/elven/elven-rules.html",
						"fr": "res/rules/elven/elven-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/elven/elven-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/elven/elven-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_102,
					"description": {
						"en": "res/rules/elven/elven-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/elven-600x600-3d.jpg",
							"res/visuals/elven-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_102,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_102
		},
		{
			"name": "spartan-chess",
			"modelScripts": modelScripts_103,
			"config": {
				"status": true,
				"model": {
					"title-en": "Spartan Chess",
					"summary": "An unorthodox Spartan army combats FIDE",
					"rules": {
						"en": "res/rules/spartan/spartan-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/spartan/spartan-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/spartan/spartan-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_103,
					"description": {
						"en": "spartan-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/spartan-600x600-3d.jpg",
							"res/visuals/spartan-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_103,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_103
		},
		{
			"name": "scirocco-chess",
			"modelScripts": modelScripts_104,
			"config": {
				"status": true,
				"model": {
					"title-en": "Scirocco",
					"summary": "10x10 variant with weak but promoting pieces",
					"rules": {
						"en": "res/rules/decimal/scirocco-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/scirocco/scirocco-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/decimal/scirocco-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_104,
					"description": {
						"en": "res/rules/decimal/scirocco-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/scirocco-600x600-3d.jpg",
							"res/visuals/scirocco-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_104,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_104
		},
		{
			"name": "shogi",
			"modelScripts": modelScripts_105,
			"config": {
				"status": true,
				"model": {
					"title-en": "Shogi",
					"summary": "Japanese Chess",
					"rules": {
						"en": "res/rules/shogi/shogi-rules.html",
						"fr": "res/rules/shogi/shogi-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/shogi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/shogi-credits.html",
						"fr": "res/rules/shogi/shogi-rules_fr.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_105,
					"description": {
						"en": "res/rules/shogi/shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/shogi-600x600-3d.jpg",
							"res/visuals/shogi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2dwestern",
							"title": "2D Pictos",
							"3d": false,
							"preload": [
								"image|/res/shogi/shogi-picto-sprites.png"
							]
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_105,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_105
		},
		{
			"name": "seireigi",
			"modelScripts": modelScripts_seireigi,
			"config": {
				"status": true,
				"model": {

					"title-en": "Seireigi",
					"summary": "Shogi with more varied promotions",
					"rules": {
						"en": "res/rules/shogi/seireigi-rules.html",
						"fr": "res/rules/shogi/seireigi-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/seireigi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/seireigi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_seireigi,
					"description": {
						"en": "res/rules/shogi/seireigi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/seireigi-600x600-3d.jpg",
							"res/visuals/seireigi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin2dwestern",

							"title": "2D Pictos",
							"3d": false,
							"preload": [
								"image|/res/shogi/seireigi-shogi-picto-sprites.png"
							]
						},
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},

						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_seireigi,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_seireigi
		},
		{
			"name": "chu-seireigi",
			"modelScripts": modelScripts_chu_seireigi,
			"config": {
				"status": true,
				"model": {

					"title-en": "Chu Seireigi",
					"summary": "Spirit middle shogi variant",
					"rules": {
						"en": "res/rules/shogi/chu-seireigi-shogi-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/chu-seireigi-thumb.png",
					"released": 1396536978,

					"credits": {
						"en": "res/rules/shogi/seireigi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_chu_seireigi,
					"description": {
						"en": "res/rules/shogi/chu-seireigi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/chu-seireigi-600x600-2d.png",
                            "res/visuals/chu-seireigi-600x600-3d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [


						
						{
							"name": "skin2dwestern",
							"title": "2D Pictos",
							"3d": false,

							"preload": [
								"image|/res/shogi/chu-seireigi-shogi-picto-sprites.png"
							]
						},
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [

								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,

							"camera": config_view_skins_camera
						}
/*,
						config_view_skins_2*/
					],

					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_chu_seireigi,
					"useAutoComplete": true

				}
			},
			"viewScripts": config_view_js_chu_seireigi
		},
		{
			"name": "mini-shogi",
			"modelScripts": modelScripts_107,
			"config": {
				"status": true,
				"model": {
					"title-en": "Mini-Shogi",
					"summary": "Shogi on 5x5 with 6 pieces",
					"rules": {
						"en": "res/rules/shogi/mini-shogi-rules.html",
						"fr": "res/rules/shogi/mini-shogi-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/mini-shogi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/shogi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_107,
					"description": {
						"en": "res/rules/shogi/mini-shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/mini-shogi-600x600-3d.png",
							"res/visuals/mini-shogi-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2dwestern",
							"title": "2D Pictos",
							"3d": false,
							"preload": [
								"image|/res/shogi/shogi-picto-sprites.png"
							]
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_107,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_107
		},
		{
			"name": "kyoto-shogi",
			"modelScripts": modelScripts_kyoto,
			"config": {
				"status": true,
				"model": {
					"title-en": "Kyoto-Shogi",
					"summary": "Shogi on 5x5 with 5 pieces",
					"rules": {
						"en": "res/rules/shogi/kyoto-shogi-rules.html",
						"fr": "res/rules/shogi/kyoto-shogi-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/kyoto-shogi.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/kyoto-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_107,
					"description": {
						"en": "res/rules/shogi/kyoto-shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/kyoto-shogi-600x600-3d.png",
							"res/visuals/kyoto-shogi-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						{
							"name": "skin2dwestern",
							"title": "2D Pictos",
							"3d": false,
							"preload": [
								"image|/res/shogi/shogi-picto-sprites"
							]
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_107,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_107
		},
		{
			"name": "tori-shogi",
			"modelScripts": modelScripts_106,
			"config": {
				"status": true,
				"model": {
					"title-en": "Tori Shogi",
					"summary": "7x7 Shogi Variant with bird pieces",
					"rules": {
						"en": "res/rules/shogi/tori-shogi-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/tori-shogi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/shogi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_106,
					"description": {
						"en": "res/rules/shogi/tori-shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/tori-600x600-3d.png",
							"res/visuals/tori-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_106,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_106
		},
		{
			"name": "chu-shogi",
			"modelScripts": modelScripts_108,
			"config": {
				"status": true,
				"model": {
					"title-en": "Chu Shogi",
					"summary": "Historic 12x12 Shogi variant",
					"rules": {
						"en": "res/rules/shogi/chu-shogi-rules.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/shogi/chu-shogi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/shogi/shogi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_108,
					"description": {
						"en": "res/rules/shogi/chu-shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/chu-shogi-600x600-3d.jpg",
							"res/visuals/chu-shogi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_108,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_108
		},
		{
			"name": "makromachy",
			"modelScripts": modelScripts_109,
			"config": {
				"status": true,
				"model": {
					"title-en": "Makromachy",
					"summary": "14x14 variant with flying pieces",
					"rules": {
						"en": "res/rules/makromachy/makromachy-rules.html",
						"fr": "res/rules/makromachy/makromachy-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/makromachy/makromachy-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/makromachy/makromachy-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_109,
					"description": {
						"en": "res/rules/makromachy/makromachy-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/makromachy-600x600-3d.jpg",
							"res/visuals/makromachy-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_109,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_109
		},
		{
			"name": "minjiku-shogi",
			"modelScripts": modelScripts_110,
			"config": {
				"status": true,
				"model": {
					"title-en": "Minjiku Shogi",
					"summary": "10x10 variant with flying pieces and Fire Dragon",
					"rules": {
						"en": "res/rules/minjiku-shogi/minjiku-shogi-rules.html",
						"fr": "res/rules/minjiku-shogi/minjiku-shogi-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/minjiku-shogi/minjiku-shogi-thumb.png",
					"released": 1396536978,
					"credits": {
						"en": "res/rules/minjiku-shogi/minjiku-shogi-credits.html"
					},
					"gameOptions": config_model_gameOptions_2,
					"js": modelScripts_110,

					"description": {
						"en": "res/rules/minjiku-shogi/minjiku-shogi-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/minjiku-shogi-600x600-3d.jpg",
							"res/visuals/minjiku-shogi-600x600-2d.jpg"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 1,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png"
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_2
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_110,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_110
		},
		{
			"name": "acedrex-chess",
			"modelScripts": modelScripts_acedrex,
			"config": {
				"status": true,
				"model": {
					"title-en": "Grant acedrex",
					"summary": "Medieval Castillan chess variant",
					"rules": {
						"en": "res/rules/historical/grant-acedrex-rules.html",
						"fr": "res/rules/historical/grant-acedrex-rules_fr.html"
					},
					"module": "chessbase",
					"plazza": "true",
					"thumbnail": "res/rules/historical/grant-acedrex-thumb.png",
					"released": 1394466978,
					"credits": {
						"en": "res/rules/historical/grant-acedrex-credits.html"
					},
					"gameOptions": config_model_gameOptions,
					"js": modelScripts_acedrex,
					"description": {
						"en": "res/rules/historical/grant-acedrex-description.html"
					},
					"levels": config_model_levels_15
				},
				"view": {
					"title-en": "Chessbase view",
					"visuals": {
						"600x600": [
							"res/visuals/grant-acedrex-600x600-3d.png",
							"res/visuals/grant-acedrex-600x600-2d.png"
						]
					},
					"xdView": true,
					"css": config_view_css,
					"preferredRatio": 0.9,
					"useShowMoves": true,
					"useNotation": true,
					"module": "chessbase",
					"defaultOptions": config_view_defaultOptions,
					"skins": [
						{
							"name": "skin3d",
							"title": "3D Classic",
							"3d": true,
							"preload": [
								"smoothedfilegeo|0|/res/ring-target.js",
								"image|/res/images/cancel.png",
								"image|/res/images/wikipedia.png",
								"smoothedfilegeo|0|/res/fairy/pawn/pawn.js",
								"image|/res/fairy/pawn/pawn-diffusemap.jpg",
								"image|/res/fairy/pawn/pawn-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/griffon/griffon.js",
 								"image|/res/fairy/griffon/griffon-diffusemap.jpg",
 								"image|/res/fairy/griffon/griffon-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/bishop/bishop.js",
								"image|/res/fairy/bishop/bishop-diffusemap.jpg",
								"image|/res/fairy/bishop/bishop-normalmap.jpg",
 								"smoothedfilegeo|0|/res/fairy/lion/lion.js",
								"image|/res/fairy/lion/lion-diffusemap.jpg",
								"image|/res/fairy/lion/lion-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/king/king.js",
								"image|/res/fairy/king/king-diffusemap.jpg",
								"image|/res/fairy/king/king-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rook/rook.js",
								"image|/res/fairy/rook/rook-diffusemap.jpg",
								"image|/res/fairy/rook/rook-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/rhino/rhino.js",
								"image|/res/fairy/rhino/rhino-diffusemap.jpg",
								"image|/res/fairy/rhino/rhino-normalmap.jpg",
								"smoothedfilegeo|0|/res/fairy/giraffe/giraffe.js",
								"image|/res/fairy/giraffe/giraffe-diffuse-map.jpg",
								"image|/res/fairy/giraffe/giraffe-normal-map.jpg",
							],
							"world": config_view_skins_world,
							"camera": config_view_skins_camera
						},
						config_view_skins_9
					],
					"animateSelfMoves": false,
					"switchable": true,
					"sounds": config_view_sounds,
					"js": config_view_js_acedrex,
					"useAutoComplete": true
				}
			},
			"viewScripts": config_view_js_acedrex
		}
	  		

	]
})()
