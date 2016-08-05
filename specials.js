angular.module('splatoonApp').specials = function ($scope) {
	$scope.specials =[{
		name : 'Bubbler',
		duration : 4.5,
		durationCoeff: 50,
		points: 180
	},  {
		name : 'Bomb Rush',
		duration : 6,
		durationCoeff: 50,
		points: 180
	},  {
		name : 'Echolocator',
		duration : 9,
		durationCoeff: 75,
		points: 180
	},  {
		name : 'Inkstrike',
		duration : 2,
		durationCoeff: 1,
		points: 180
	},  {
		name : 'Inkzooka',
		duration : 6,
		durationCoeff: 50,
		points: 220
	},  {
		name : 'Killer Wail',
		duration : 4,
		durationCoeff: 1,
		points: 180
	},  {
		name : 'Kraken',
		duration : 5,
		durationCoeff: 50,
		points: 180
	}]
	$scope.getSpecialByName = function(name) {
        return $.grep($scope.specials, function(e){ return e.name == name; })[0];
	}
}