(function() {
	var CANVAS_SIZE = 512;
	var FAIRY_CANVAS_PROPERTIES = {
			cx: CANVAS_SIZE,
			cy: CANVAS_SIZE
	}
	function THREE_CONST(v) {
		if(typeof THREE!=="undefined")
			return THREE[v];
		else
			return 0;
	}

	View.Game.cbShogiPieceStyle = function(modifier) {
		return $.extend(true,{
			"1": {
				"default": {
					"2d": {
						clipy: 0,
					},
				},
			},
			"-1": {
				"default": {
					"2d": {
						clipy: 100,
					},
				},
			},
			"default": {
				"3d": {
					display: this.cbDisplayPieceFn(this.cbShogiPieceStyle3D),
				},
				"2d": {
					file: this.mViewOptions.fullPath + "/res/shogi/seireigi-shogi-sprites.png",
					clipwidth: 100,
					clipheight: 100,
				},
			},
			"sh-pawn": {
				"2d": {
					clipx: 1000,
				},
			},
			"sh-knight": {
				"2d": {
					clipx: 1100,
				},
			},
			"sh-lance": {
				"2d": {
					clipx: 1200,
				},
			},
			"sh-silver": {
				"2d": {
					clipx: 1300,
				},
			},
			"sh-gold": {
				"2d": {
					clipx: 1400,
				},
			},
			"sh-bishop": {
				"2d": {
					clipx: 1500,
				},
			},
			"sh-rook": {
				"2d": {
					clipx: 1600,
				},
			},
			"sh-tokin": {
				"2d": {
					clipx: 1700,
				},
			},
			"sh-promoted-knight": {
				"2d": {
					clipx: 1800,
				},
			},
			"sh-promoted-lance": {
				"2d": {
					clipx: 1900,
				},
			},
			"sh-promoted-silver": {
				"2d": {
					clipx: 2000,
				},
			},
			"sh-horse": {
				"2d": {
					clipx: 2100,
				},
			},
			"sh-dragon": {
				"2d": {
					clipx: 2200,
				},
			},
			"sh-king": {
				"2d": {
					clipx: 2300,
				},
			},
			"sh-jade": {
				"2d": {
					clipx: 2400,
				},				
			},
			"sh-promoted-gold": {
				"2d": {
					clipx: 2500,
				},				
			},
			"sh-heavenly-horse": {
				"2d": {
					clipx: 2600,
				},				
			},
			"sh-tiger": {
				"2d": {
					clipx: 2700,
				},				
			},
			"sh-wolf": {
				"2d": {
					clipx: 2800,
				},				
			},
			"sh-elephant": {
				"2d": {
					clipx: 2900,
				},				
			},	
			"sh-owl": {
				"2d": {
					clipx: 3000,
				},				
			},
			"sh-copper": {
				"2d": {
					clipx: 3100,
				},				
			},
			"sh-leopard": {
				"2d": {
					clipx: 3200,
				},				
			},
			"sh-lion": {
				"2d": {
					clipx: 3300,
				},				
			},	
			"sh-ram": {
				"2d": {
					clipx: 3400,
				},				
			},
			"sh-bear": {
				"2d": {
					clipx: 3500,
				},				
			},	
			"sh-swallow": {
				"2d": {
					clipx: 3600,
				},				
			},	
			"sh-rabbit": {
				"2d": {
					clipx: 3700,
				},				
			},
			"sh-crow": {
				"2d": {
					clipx: 3800,
				},				
			},
			"sh-queen": {
				"2d": {
					clipx: 3900,
				},				
			},
			"sh-boar": {
				"2d": {
					clipx: 4000,
				},				
			},	
			"sh-stag": {
				"2d": {
					clipx: 4100,
				},				
			},	
			"sh-eagle": {
				"2d": {
					clipx: 4200,
				},				
			},
			"sh-falcon": {
				"2d": {
					clipx: 4300,
				},				
			},
			"sh-dog": {
				"2d": {
					clipx: 4400,
				},				
			},
			"sh-teacher": {
				"2d": {
					clipx: 4500,
				},				
			},
			"sh-ox": {
				"2d": {
					clipx: 4600,
				},				
			},
			"sh-fox": {
				"2d": {
					clipx: 4700,
				},				
			},
			"sh-bird": {
				"2d": {
					clipx: 4800,
				},				
			},	
			"sh-promoted-leopard": {
				"2d": {
					clipx: 4900,
				},				
			},		
		},modifier);
	}

	View.Game.cbShogiPieceStyle3D = $.extend(true,{},View.Game.cbUniformPieceStyle3D,{

		"default": {
			mesh: {
				normalScale: 1,
				rotateZ: 180,
			},
			//'useUniforms' : true,
			materials:{
				mat0:{
					channels:{
						diffuse:{
							size: FAIRY_CANVAS_PROPERTIES,
						},
						normal: {
							size: FAIRY_CANVAS_PROPERTIES,
						},
					},
				},
			},
		},

		"1":{
			'default': {
				materials:{
					mat0:{
						params : {
							specular: 0x020202,
							shininess : 150 ,
						},
					},
				},
			}
		},
		"-1":{
			'default': {
				materials:{
					mat0:{
						params : {
							specular: 0x040404,
							shininess : 100 ,
						},
					},
				},
			},
		},


		"sh-pawn": {
			mesh: {
				jsFile:"/res/shogi/p-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/pawn-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-tokin": {
			mesh: {
				jsFile:"/res/shogi/p-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/tokin-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-knight": {
			mesh: {
				jsFile:"/res/shogi/n-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/knight-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-lance": {
			mesh: {
				jsFile:"/res/shogi/n-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/lance-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-promoted-knight": {
			mesh: {
				jsFile:"/res/shogi/n-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/p-knight-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-promoted-lance": {
			mesh: {
				jsFile:"/res/shogi/n-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/p-lance-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-silver": {
			mesh: {
				jsFile:"/res/shogi/g-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/silver-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-gold": {
			mesh: {
				jsFile:"/res/shogi/g-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/gold-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-promoted-silver": {
			mesh: {
				jsFile:"/res/shogi/g-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/p-silver-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},
		"sh-promoted-gold": {
			mesh: {
				jsFile:"/res/shogi/g-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/p-gold-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-bishop": {
			mesh: {
				jsFile:"/res/shogi/b-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/bishop-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-rook": {
			mesh: {
				jsFile:"/res/shogi/b-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/rook-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-horse": {
			mesh: {
				jsFile:"/res/shogi/b-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/horse-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-dragon": {
			mesh: {
				jsFile:"/res/shogi/b-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/dragon-r.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-king": {
			mesh: {
				jsFile:"/res/shogi/k-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/king-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

		"sh-jade": {
			mesh: {
				jsFile:"/res/shogi/k-tile.js"
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/shogi/seireigi-diffusemaps/jade-b.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/shogi/tile-normalmap.jpg",
							}
						}
					}
				}
			},
		},

	});

	View.Game.cbShogiWesternPieceStyle = function(modifier) {
		
		return $.extend(true,this.cbShogiPieceStyle(),{
			"default": {
				"2d": {
					file: this.mViewOptions.fullPath + "/res/shogi/chu-seireigi-shogi-sprites-western.png",
					//clipwidth: 100,
					//clipheight: 100,
					clipwidth: 100,
					clipheight: 100,
					scale: [0.34285714285714,0.34285714285714,0.34285714285714],
					                              
				},
			}
		},modifier);
	}

})();
