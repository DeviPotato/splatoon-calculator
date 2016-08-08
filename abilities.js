angular.module('splatoonApp').abilities = function ($scope) {

	$scope.abilities =[{
		id : 1,
		name : 'Comeback',
		info : 'Comeback',
		icon : 'assets/images/Ability_Comeback.png',
		stackable: false,
		slot: 'Headgear',
		affects: 'nothing',
		effects: 'Boosts Stats on Respawn'
	}, {
		id : 2,
		name : 'Tenacity',
		info : 'Fills the special gauge automatically if your team has fewer active players than the enemy',
		icon : 'assets/images/Ability_Tenacity.png',
		stackable: false,
		slot: 'Headgear',
		affects: 'nothing',
		effects: 'Fills the special gauge automatically if your team has fewer active players than the enemy'
	}, {
		id : 3,
		name : 'Opening Gambit',
		info : 'Opening Gambit',
		icon : 'assets/images/Ability_Opening_Gambit.png',
		stackable: false,
		slot: 'Headgear',
		affects: 'nothing',
		effects: 'Boosts  your speed/both Inkling and squid form for the first 30 seconds of battle',
	}, {
		id : 4,
		name : 'Last-Ditch Effort',
		info : 'The Last-Ditch Effort ability boosts ink recovery rate and weapon ink efficiency for the last 30 seconds of battle.',
		icon : 'assets/images/Ability_Last-Ditch_Effort.png',
		stackable: false,
		slot: 'Headgear',
		affects: 'nothing',
		effects: 'Boosts ink recovery rate and weapon ink efficiency for the last 30 seconds of battle',
	}, {
		id : 5,
		name : 'Recon',
		info : 'Reveals enemy locations on spawn',
		icon : 'assets/images/Ability_Recon.png',
		stackable: false,
		slot: 'Clothes',
		affects: 'nothing',
		effects: 'Reveals enemy locations on spawn'
	}, {
		id : 6,
		name : 'Ninja Squid',
		info : 'Hides ink movement from enemy team',
		icon : 'assets/images/Ability_Ninja_Squid.png',
		stackable: false,
		slot: 'Clothes',
		effects: 'Hides ink movement from enemy team',
		affects: 'nothing',
	//	negative: true,
	}, {
		id : 7,
		name : 'Haunt',
		info : 'Haunt',
		icon : 'assets/images/Ability_Haunt.png',
		stackable: false,
		slot: 'Clothes',
		affects: 'nothing',
		effects: 'Shows location of enemy who splatted you for 12 secs',
	}, {
		id : 8,
		name : 'Cold-Blooded',
		info : 'Cold-Blooded',
		icon : 'assets/images/Ability_Cold_Blooded.png',
		stackable: false,
		slot: 'Clothes',
		affects: 'Echolocator/Haunt Duration',
		effects: 'Shortens the effect of attacks that let enemies determine your position, such as Point Sensors.'
	}, {
		id : 9,
		name : 'Bomb Sniffer',
		info : 'Shows location of mines and grenades',
		icon : 'assets/images/Ability_Bomb_Sniffer.png',
		stackable: false,
		slot: 'Clothes',
		affects: 'nothing',
		effects: 'Shows location of mines and grenades'
	}, {
		id : 10,
		name : 'Ink Resistance Up',
		info : 'Ink Resistance Up',
		icon : 'assets/images/Ability_Ink_Resistance_Up.png',
		stackable: false,
		slot: 'Shoes',
		affects: 'nothing',
		effects: 'Increases movement speed on enemy ink',
	}, {
		id : 11,
		name : 'Stealth Jump',
		info : 'Stealth Jump',
		icon : 'assets/images/Ability_Stealth_Jump.png',
		stackable: false,
		slot: 'Shoes',
		effects: 'Hides jump location from enemy team',
		affects: 'nothing',
	//	negative: true 
	},  {
		id : 12,
		name : 'Special Charge Up',
		info : 'Special Charge Up',
		icon : 'assets/images/Ability_Special_Charge_Up.png',
		stackable: true,
		slot: 'Shoes',
		affects: 'Special Charge'
	}, {
		id : 13,
		name : 'Ink Saver (Main)',
		info : 'Ink Saver (Main)',
		icon : 'assets/images/Ability_Main_Ink_Saver.png',
		stackable: true,
		affects: 'Ink Usage Main'
	}, {
		id : 14,
		name : 'Ink Saver (Sub)',
		info : 'Ink Saver (Sub)',
		icon : 'assets/images/Ability_Sub_Ink_Saver.png',
		stackable: true,
		affects: 'Ink Usage Sub'
	}, {
		id : 15,
		name : 'Damage Up',
		info : 'Damage Up',
		icon : 'assets/images/Ability_Damage_Up.png',
		stackable: true,
		affects: 'Damage'
	}, {
		id : 16,
		name : 'Defense Up',
		info : 'Defense Up',
		icon : 'assets/images/Ability_Defense_Up.png',
		stackable: true,
		affects: 'Damage Taken'
	}, {
		id : 17,
		name : 'Bomb Range Up',
		info : 'Bomb Range Up',
		icon : 'assets/images/Ability_Bomb_Range_Up.png',
		stackable: true,
		affects: 'Bomb Throw Range'
	}, {
		id : 18,
		name : 'Ink Recovery Up',
		info : 'Ink Recovery Up',
		icon : 'assets/images/Ability_Ink_Recovery_Up.png',
		stackable: true,
		affects: 'Ink Recovery'
	}, {
		id : 19,
		name : 'Quick Respawn',
		info : 'Quick Respawn',
		icon : 'assets/images/Ability_Quick_Respawn.png',
		stackable: true,
		affects: 'Respawn Rate'
	}, {
		id : 20,
		name : 'Quick Super Jump',
		info : 'Quick Super Jump',
		icon : 'assets/images/Ability_Quick_Super_Jump.png',
		stackable: true,
		affects: 'Jump Speed'
	}, {
		id : 21,
		name : 'Run Speed Up',
		info : 'Run Speed Up',
		icon : 'assets/images/Ability_Run_Speed_Up.png',
		stackable: true,
		affects: 'Run Speed'
	}, {
		id : 22,
		name : 'Special Duration Up',
		info : 'Special Duration Up',
		icon : 'assets/images/Ability_Special_Duration_Up.png',
		stackable: true,
		affects: 'Special Time'
	}, {
		id : 23,
		name : 'Special Saver',
		info : 'Special Saver',
		icon : 'assets/images/Ability_Special_Saver.png',
		stackable: true,
		affects: 'Special Save'
	}, {
		id : 24,
		name : 'Swim Speed Up',
		info : 'Swim Speed Up',
		icon : 'assets/images/Ability_Swim_Speed_Up.png',
		stackable: true,
		affects: 'Swim Speed'
	}];
	$scope.getAbilityByName = function(name) {
		for(var i=0; i<$scope.abilities.length; i++) {
			if($scope.abilities[i].name==name) {
				return $scope.abilities[i]
			}
		}
		return false;
	}
	$scope.getAbilityById = function(id) {
		for(var i=0; i<$scope.abilities.length; i++) {
			if($scope.abilities[i].id==id) {
				return $scope.abilities[i]
			}
		}
		return false;
	}
	$scope.getAbilitiesBySlot = function(slot) {
        return $.grep($scope.abilities, function(e){ return e.slot == slot; });
	}
};
