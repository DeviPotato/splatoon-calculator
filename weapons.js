angular.module('splatoonApp').weapons = function ($scope) {
	$scope.weapons =[
	    { type : 'Shooter',
		  weapons : [
			{
				id : 0,
				name : 'Splattershot Jr.',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 1,
				name : 'Custom Splattershot Jr.',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Echolocator',
				sub : 'Disruptor',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 2,
				name : 'Splattershot',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 35
				}
			},  {
				id : 3,
				name : 'Hero Shot Replica',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 35
				}
			},  {
				id : 4,
				name : 'Tentatek Splattershot',
				type : 'Shooter',
				depletion : 'Heavy',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Suction Bomb',
				damageValues : {
					"Damage Per Hit" : 35
				}
			},  {
				id : 5,
				name : 'Octoshot Replica',
				type : 'Shooter',
				depletion : 'Heavy',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Suction Bomb',
				damageValues : {
					"Damage Per Hit" : 35
				}
			},  {
				id : 6,
				name : 'Wasabi Splattershot',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 35
				}
			},  {
				id : 7,
				name : 'Splattershot Pro',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 42
				}
			},  {
				id : 8,
				name : 'Forge Splattershot Pro',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Point Sensor',
				damageValues : {
					"Damage Per Hit" : 42
				}
			},  {
				id : 9,
				name : 'Berry Splattershot Pro',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Suction Bomb',
				damageValues : {
					"Damage Per Hit" : 42
				}
			},  {
				id : 10,
				name : 'Aerospray MG',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Seeker',
				damageValues : {
					"Damage Per Hit" : 24.5
				}
			},  {
				id : 11,
				name : 'Aerospray RG',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Ink Mine',
				damageValues : {
					"Damage Per Hit" : 24.5
				}
			},  {
				id : 12,
				name : 'Aerospray PG',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 24.5
				}
			},  {
				id : 13,
				name : 'Jet Squelcher',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 31
				}
			},  {
				id : 14,
				name : 'Custom Jet Squelcher',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 31
				}
			},  {
				id : 15,
				name : 'Dual Squelcher',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Echolocator',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 16,
				name : 'Custom Dual Squelcher',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Squid Beakon',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 17,
				name : 'L-3 Nozzlenose',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Disruptor',
				damageValues : {
					"Damage Per Hit" : 29
				}
			},  {
				id : 18,
				name : 'L-3 Nozzlenose D',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 29
				}
			},  {
				id : 19,
				name : 'H-3 Nozzlenose',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Echolocator',
				sub : 'Suction Bomb',
				damageValues : {
					"Damage Per Hit" : 41
				}
			},  {
				id : 20,
				name : 'H-3 Nozzlenose D',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Point Sensor',
				damageValues : {
					"Damage Per Hit" : 41
				}
			},  {
				id : 21,
				name : 'Cherry H-3 Nozzlenose',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 41
				}
			},  {
				id : 22,
				name : 'N-ZAP \'85',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Echolocator',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 23,
				name : 'N-ZAP \'89',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Sprinkler',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 24,
				name : 'N-ZAP \'83',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Point Sensor',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 25,
				name : 'Splash-o-matic',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 26,
				name : 'Neo Splash-o-matic',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 27,
				name : 'Sploosh-o-matic',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Squid Beakon',
				damageValues : {
					"Damage Per Hit" : 38
				}
			},  {
				id : 28,
				name : 'Neo Sploosh-o-matic',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Point Sensor',
				damageValues : {
					"Damage Per Hit" : 38
				}
			},  {
				id : 29,
				name : 'Sploosh-o-matic 7',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 38
				}
			},  {
				id : 30,
				name : '.52 Gal',
				type : 'Shooter',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 52
				}
			},  {
				id : 31,
				name : '.52 Gal Deco',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Seeker',
				damageValues : {
					"Damage Per Hit" : 52
				}
			},  {
				id : 32,
				name : '.96 Gal',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Echolocator',
				sub : 'Sprinkler',
				damageValues : {
					"Damage Per Hit" : 52
				}
			},  {
				id : 33,
				name : '.96 Gal Deco',
				type : 'Shooter',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 52
				}
			}
		]},
		{ type : 'Roller',
		  weapons : [
			{
				id : 34,
				name : 'Splat Roller',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Suction Bomb',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 140
				}
			}, {
				id : 35,
				name : 'Hero Roller Replica',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Suction Bomb',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 140
				}
			}, {
				id : 36,
				name : 'Krak-on Splat Roller',
				type : 'Roller',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Squid Beakon',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 140
				}
			}, {
				id : 37,
				name : 'CoroCoro Splat Roller',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Splash Wall',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 140
				}
			}, {
				id : 38,
				name : 'Carbon Roller',
				type : 'Roller',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Splat Bomb',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 70
				}
			}, {
				id : 39,
				name : 'Carbon Roller Deco',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Seeker',
				damageValues : {
					"Min. Splash" : 25,
					"Max. Splash" : 125,
					"Roll" : 70
				}
			}, {
				id : 40,
				name : 'Dynamo Roller',
				type : 'Roller',
				depletion : 'Heavy',
				speedPenalty : true,
				special: 'Echolocator',
				sub : 'Sprinkler',
				damageValues : {
					"Min. Splash" : 50,
					"Max. Splash" : 125,
					"Roll" : 160
				}
			}, {
				id : 41,
				name : 'Gold Dynamo Roller',
				type : 'Roller',
				depletion : 'Heavy',
				speedPenalty : true,
				special: 'Inkstrike',
				sub : 'Splat Bomb',
				damageValues : {
					"Min. Splash" : 50,
					"Max. Splash" : 125,
					"Roll" : 160
				}
			}, {
				id : 42,
				name : 'Tempered Dynamo Roller',
				type : 'Roller',
				depletion : 'Heavy',
				speedPenalty : true,
				special: 'Killer Wail',
				sub : 'Seeker',
				damageValues : {
					"Min. Splash" : 50,
					"Max. Splash" : 125,
					"Roll" : 160
				}
			}, {
				id : 43,
				name : 'Inkbrush',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Sprinkler',
				damageValues : {
					"Splash" : 28,
					"Roll" : 20
				}
			}, {
				id : 44,
				name : 'Inkbrush Nouveau',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Ink Mine',
				damageValues : {
					"Splash" : 28,
					"Roll" : 20
				}
			}, {
				id : 45,
				name : 'Permanent Inkbrush',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Splat Bomb',
				damageValues : {
					"Splash" : 28,
					"Roll" : 20
				}
			}, {
				id : 46,
				name : 'Octobrush',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Squid Beakon',
				damageValues : {
					"Splash" : 37,
					"Roll" : 25
				}
			}, {
				id : 47,
				name : 'Octobrush Nouveau',
				type : 'Roller',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Splat Bomb',
				damageValues : {
					"Splash" : 37,
					"Roll" : 25
				}
			}
		]},
	    { type : 'Blaster',
		  weapons : [
			{
				id : 48,
				name : 'Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Disruptor',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			}, {
				id : 49,
				name : 'Custom Blaster',
				type : 'Blaster',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Point Sensor',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			},  {
				id : 50,
				name : 'Range Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Splash Wall',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			}, {
				id : 51,
				name : 'Custom Range Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Splat Bomb',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			},  {
				id : 52,
				name : 'Grim Range Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Burst Bomb',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			},  {
				id : 53,
				name : 'Rapid Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Ink Mine',
				damageValues : {
					"Min. Splash" : 25,
					"Direct Hit" : 80
				}
			}, {
				id : 54,
				name : 'Rapid Blaster Deco',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Suction Bomb',
				damageValues : {
					"Min. Splash" : 25,
					"Direct Hit" : 80
				}
			}, {
				id : 55,
				name : 'Luna Blaster',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Ink Mine',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			}, {
				id : 56,
				name : 'Luna Blaster Neo',
				type : 'Blaster',
				depletion : 'Heavy',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Splat Bomb',
				damageValues : {
					"Min. Splash" : 50,
					"Direct Hit" : 125
				}
			}, {
				id : 58,
				name : 'Rapid Blaster Pro',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Seeker',
				damageValues : {
					"Min. Splash" : 25,
					"Direct Hit" : 80
				}
			}, {
				id : 59,
				name : 'Rapid Blaster Pro Deco',
				type : 'Blaster',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Disruptor',
				damageValues : {
					"Min. Splash" : 25,
					"Direct Hit" : 80
				}
			}
		]},
	    { type : 'Splatling',
		  weapons : [
			{
				id : 60,
				name : 'Heavy Splatling',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 28
				}
			}, {
				id : 61,
				name : 'Heavy Splatling Deco',
				type : 'Splatling',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Point Sensor',
				damageValues : {
					"Damage Per Hit" : 28
				}
			}, {
				id : 62,
				name : 'Heavy Splatling Remix',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Sprinkler',
				damageValues : {
					"Damage Per Hit" : 28
				}
			}, {
				id : 63,
				name : 'Mini Splatling',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkzooka',
				sub : 'Suction Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 64,
				name : 'Zink Mini Splatling',
				type : 'Splatling',
				depletion : 'Heavy',
				speedPenalty : false,
				special: 'Bubbler',
				sub : 'Disruptor',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 65,
				name : 'Refurbished Mini Splatling',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 28
				}
			},  {
				id : 66,
				name : 'Hydra Splatling',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : true,
				special: 'Echolocator',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 28,
					"Charged Damage" : 35
				}
			}, {
				id : 67,
				name : 'Custom Hydra Splatling',
				type : 'Splatling',
				depletion : 'Light',
				speedPenalty : true,
				special: 'Bubbler',
				sub : 'Sprinkler',
				damageValues : {
					"Damage Per Hit" : 28,
					"Charged Damage" : 35
				}
			}
		]},
	    { type : 'Slosher',
		  weapons : [
			{
				id : 68,
				name : 'Slosher',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Inkstrike',
				sub : 'Burst Bomb',
				damageValues : {
					"Damage Per Hit" : 70
				}
			}, {
				id : 69,
				name : 'Slosher Deco',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special: 'Kraken',
				sub : 'Splash Wall',
				damageValues : {
					"Damage Per Hit" : 70
				}
			}, {
				id : 70,
				name : 'Soda Slosher',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Inkzooka',
				sub : 'Splat Bomb',
				damageValues : {
					"Damage Per Hit" : 70
					}
			}, {
				id : 71,
				name : 'Tri-Slosher',
				type : 'Slosher',
				depletion : 'Medium',
				speedPenalty : false,
				special : 'Bubbler',
				sub : 'Disruptor',
				damageValues : {
					"Damage Per Hit" : 62
					}
			}, {
				id : 72,
				name : 'Tri-Slosher Nouveau',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Echolocator',
				sub : 'Seeker',
				damageValues : {
					"Damage Per Hit" : 62
					}
			}, {
				id : 73,
				name : 'Sloshing Machine',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Bomb Rush',
				sub : 'Splat Bomb',
				damageValues : {
					"Min. Splash" : 38,
					"Direct Hit" : 76
					}
			}, {
				id : 74,
				name : 'Sloshing Machine Neo',
				type : 'Slosher',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Inkzooka',
				sub : 'Point Sensor',
				damageValues : {
					"Min. Splash" : 38,
					"Direct Hit" : 76
					}
			}
		]},
	    { type : 'Charger',
		  weapons : [
			{
				id : 75,
				name : 'Splat Charger',
				type : 'Charger',
				depletion : 'Heavy',
				speedPenalty : false,
				special: 'Bomb Rush',
				sub : 'Splat Bomb',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
				}
			}, {
				id : 76,
				name : 'Kelp Splat Charger',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : false,
				special: 'Killer Wail',
				sub : 'Sprinkler',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
				}
			}, {
				id : 77,
				name : 'Bento Splat Charger',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : false,
				special : 'Echolocator',
				sub : 'Splash Wall',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
				}
			}, {
				id : 78,
				name : 'Splatterscope',
				type : 'Charger',
				depletion : 'Heavy',
				speedPenalty : false,
				special : 'Bomb Rush',
				sub : 'Splat Bomb',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
					}
			}, {
				id : 79,
				name : 'Kelp Splatterscope',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : false,
				special : 'Killer Wail',
				sub : 'Sprinkler',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
					}
			}, {
				id : 80,
				name : 'Bento Splatterscope',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : false,
				special : 'Echolocator',
				sub : 'Splash Wall',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 160
					}
			}, {
				id : 81,
				name : 'E-liter 3K',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : true,
				special : 'Echolocator',
				sub : 'Burst Bomb',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 180
					}
			}, {
				id : 82,
				name : 'Custom E-liter 3K',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : true,
				special : 'Kraken',
				sub : 'Squid Beakon',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 180
					}
			}, {
				id : 83,
				name : 'E-liter 3K Scope',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : true,
				special : 'Echolocator',
				sub : 'Burst Bomb',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 180
					}
			}, {
				id : 84,
				name : 'Custom E-liter 3K Scope',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : true,
				special : 'Kraken',
				sub : 'Squid Beakon',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 180
					}
			}, {
				id : 85,
				name : 'Classic Squiffer',
				type : 'Charger',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Bubbler',
				sub : 'Point Sensor',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 140
					}
			}, {
				id : 86,
				name : 'New Squiffer',
				type : 'Charger',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Inkzooka',
				sub : 'Ink Mine',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 140
					}
			}, {
				id : 87,
				name : 'Fresh Squiffer',
				type : 'Charger',
				depletion : 'Medium',
				speedPenalty : false,
				special : 'Kraken',
				sub : 'Suction Bomb',
				damageValues : {
					"No Charge" : 40,
					"Full Charge" : 140
					}
			}, {
				id : 88,
				name : 'Bamboozler 14 Mk I',
				type : 'Charger',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Killer Wail',
				sub : 'Splash Wall',
				damageValues : {
					"No Charge" : 30,
					"Full Charge" : 80
					}
			}, {
				id : 89,
				name : 'Bamboozler 14 Mk II',
				type : 'Charger',
				depletion : 'Light',
				speedPenalty : false,
				special : 'Echolocator',
				sub : 'Disruptor',
				damageValues : {
					"No Charge" : 30,
					"Full Charge" : 80
					}
			}, {
				id : 90,
				name : 'Bamboozler 14 Mk III',
				type : 'Charger',
				depletion : 'Heavy',
				speedPenalty : false,
				special : 'Inkstrike',
				sub : 'Burst Bomb',
				damageValues : {
					"No Charge" : 30,
					"Full Charge" : 80
					}
			}
		]}
	];
	$scope.getWeaponByName = function(name) {
		for(var i=0; i<$scope.weapons.length; i++) {
			for(var e=0; e<$scope.weapons[i].weapons.length; e++) {
				if($scope.weapons[i].weapons[e].name==name) {
					return $scope.weapons[i].weapons[e]
				}
			}
		}
		return false;
	}
	$scope.getCategory = function(name) {
		for(var i=0; i<$scope.weapons.length; i++) {
			if($scope.weapons[i].type==name) {
				return $scope.weapons[i]
			}
		}
		return false;
	}
	$scope.getWeaponById = function(id) {
		for(var i=0; i<$scope.weapons.length; i++) {
			for(var e=0; e<$scope.weapons[i].weapons.length; e++) {
				if($scope.weapons[i].weapons[e].id==id) {
					return $scope.weapons[i].weapons[e]
				}
			}
		}
		return false;
	}
};

