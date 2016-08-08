angular.module('splatoonApp').subweapons = function ($scope) {
	$scope.subweapons =[{
		name : 'Splat Bomb',
		ink: 70,
		damageValues : {
			"Splash" : 30,
			"Direct Hit" : 180
		}
	},  {
		name : 'Burst Bomb',
		ink: 40,
		damageValues : {
			"Min. Splash" : 25,
			"Max. Splash" : 35,
			"Direct Hit" : 60
		}
	},  {
		name : 'Suction Bomb',
		ink: 70,
		damageValues : {
			"Splash" : 30,
			"Direct Hit" : 180
		}
	},  {
		name : 'Ink Mine',
		ink: 50,
		damageValues : {
			"Splash" : 30,
			"Direct Hit" : 180
		}
	},  {
		name : 'Sprinkler',
		ink: 80,
		damageValues : {
			"Damage Per Hit" : 30
		}
	},  {
		name : 'Seeker',
		ink: 80,
		damageValues : {
			"Min. Splash" : 20,
			"Max. Splash" : 80,
			"Direct Hit" : 180
		}
	},  {
		name : 'Disruptor',
		ink: 50
	},  {
		name : 'Splash Wall',
		ink: 60
	},  {
		name : 'Squid Beakon',
		ink: 90
	},  {
		name : 'Point Sensor',
		ink: 40
	}];
	$scope.getSubweaponByName = function(name) {
		for(var i=0; i<$scope.subweapons.length; i++) {
			if($scope.subweapons[i].name==name) {
				return $scope.subweapons[i]
			}
		}
		return false;
	}
}