'use strict';

var splatoonApp = angular.module('splatoonApp', []);


splatoonApp.controller('MainCtrl', function ($scope) {
	$scope.mains = [];
	$scope.subs = [];
	$scope.possibleGear = [];	
	
	//Load in datatables
	angular.module('splatoonApp').abilities($scope);
	angular.module('splatoonApp').gear($scope);
	angular.module('splatoonApp').weapons($scope);
	angular.module('splatoonApp').subweapons($scope);
	angular.module('splatoonApp').specials($scope);

	//Start main logic
	$scope.points = 0;
	$scope.effectiveDamage = {};
	$scope.effectiveSubDamage = {};
	$scope.stateCode = "none";
	$scope.subweapon = false;
	$scope.effectiveSpecialDuration = 0;
	$scope.showModal = false;
	$scope.showGear = false;
	$scope.ErrorMessage= 'Testing';
	$scope.selectedCategory = $scope.weapons[0];
	$scope.selectedWeapon = $scope.selectedCategory.weapons[0];
	
	
	//init stats last
	angular.module('splatoonApp').stats($scope);
	
	for(let category of $scope.weapons){
		for(let weapon of category.weapons){
			weapon.uname = weapon.name.replace(/ /g,'_').replace('.','').replace('\'','');
		 }
	 }
  $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
  };
  $scope.onCategoryChange = function(){
		$scope.selectedWeapon = $scope.selectedCategory.weapons[0];
		$scope.onWeaponChange();
  };
  $scope.onWeaponChange = function(){
        calc();
  };

  $scope.onCodeChange = function(){
		$scope.stateURL = generateURL($scope.stateCode)
  };

  function generateURL(code){
	return window.location.href.split('#')[0] + "#" + $scope.stateCode
  }
  
  function loadFromURL(url){
	var arr = url.match(/#([0-9a-fA-F]+)/)
	if(arr) {
		var code = arr[1];		
	} else {
		console.log("no code to load")
		return;
	}
	var decoded = decode(code);
	if(decoded) {
	//check if all abilities and weapon are valid before loading
		for(var i=0; i<decoded[1].length; i++) {
			if(!$scope.getAbilityById(decoded[1][i]) && decoded[1][i] != 0) {
				console.log("code invalid: invalid ability")
				return;
			}
		}
		if(!$scope.getWeaponById(decoded[0])) {
			console.log("code invalid: invalid weapon")
			return;
		}
		for(var i=0; i<3; i++) {
			if($scope.getAbilityById(decoded[1][i])) {
				$scope.mains.push($scope.getAbilityById(decoded[1][i]));
				$scope.points+=10;
			}
		}
		for(var i=3; i<decoded[1].length; i++) {
			if($scope.getAbilityById(decoded[1][i])) {
				$scope.subs.push($scope.getAbilityById(decoded[1][i]));
				$scope.points+=3;
			}
		}
		$scope.selectedWeapon = $scope.getWeaponById(decoded[0]);
		$scope.selectedCategory = $scope.getCategory($scope.selectedWeapon.type);
		for(var i=0; i<$scope.mains.length; i++) {
			if($scope.mains[i].slot!=undefined) {
				var conflicts = $scope.getAbilitiesBySlot($scope.mains[i].slot)
				for(var e=0; e<conflicts.length; e++) {
					conflicts[e].lockout = true;
				}
			}
		}
		calc();
		updateGear();
	} else {
		return;
	}

  }

  
  $scope.activate = function(ability){

		/*
		for(var i = 0; i < $scope.mains.length; i++){
			for(var j=0; j < $scope.gear.length; j++){

					if($scope.gear[j].ability === $scope.mains[i].name){
						abilitygear[i].push($scope.gear[j].type)
				}

			}
		}
		*/


		if ($scope.points >= 57) {
			//alert('Too Many Abilities!!');
			$scope.ErrorMessage = 'Too Many Abilities!!';
			$scope.toggleModal();
			return;
		}

		var i = $scope.abilities.indexOf(ability);
		if( $scope.mains.length<3 ){
			if($scope.abilities[i].lockout) {
				$scope.ErrorMessage = 'Conflicts with equipped ' + $scope.abilities[i].slot + ' ability!';
				$scope.toggleModal();
				return;
			}
			if($scope.abilities[i].stackable || $scope.mains.indexOf(ability) == -1){
				$scope.mains.push($scope.abilities[i]);
				$scope.points+=10;
				if($scope.abilities[i].slot!=undefined) {
					console.log("locking out " + $scope.abilities[i].slot)
					var conflicts = $scope.getAbilitiesBySlot($scope.abilities[i].slot)
					console.log(conflicts)
					for(var i=0; i<conflicts.length; i++) {
						conflicts[i].lockout = true;
					}
				}
				calc();
				updateGear();
			}
			else {
				//alert('Cannot Stack This Ability!!');
				$scope.ErrorMessage = 'Cannot Stack This Ability!!';
				$scope.toggleModal();
				return;
			}
		}

		else if ( $scope.abilities[i].stackable ){
			$scope.subs.push($scope.abilities[i]);
			$scope.points+=3;
			calc();
			updateGear();
		}
		else {
			//alert('Cannot Sub This Ability!!');
			$scope.ErrorMessage = 'Cannot Sub This Ability!!';
			$scope.toggleModal();		}
	};

	$scope.demain = function(main) {
		$scope.mains.splice($scope.mains.indexOf(main), 1);
		$scope.points-=10;
		if(main.slot!=undefined) {
			console.log("unlocking " + main.slot)
			var conflicts = $scope.getAbilitiesBySlot(main.slot)
			for(var i=0; i<conflicts.length; i++) {
				conflicts[i].lockout = false;
			}
		}
		calc();
		updateGear();
	};
	$scope.desub = function(sub) {
		$scope.subs.splice($scope.subs.indexOf(sub), 1);
		$scope.points-=3;
		calc();
		updateGear();
	};

	// Calc function for finding values
	function calc() {


		for(var i = 0; i < $scope.gear.length; i++){
				console.log('hiding gear');
				//$scope.gear[i].show = false;
				$scope.gear[i].uname = $scope.gear[i].name.replace(/ /g,'_');
			}

		for(var i=0; i < $scope.stats.length; i++){
			var name = $scope.stats[i].name;
			$scope.stats[i].apply(
				$scope.mains.count(name),
				$scope.subs.count(name)
			);
		}
		
		//TODO: refactor this
		$scope.effectiveDamage = {};
		for(var k in $scope.selectedWeapon.damageValues) $scope.effectiveDamage[k]=$scope.selectedWeapon.damageValues[k];
		for(var key in $scope.effectiveDamage) {
			var value = $scope.effectiveDamage[key];
			value = ((value*$scope.getStatByName("Damage").value)/100).toFixed(1)
			// splatoon caps main damage values at specific thresholds
			if(value>33.3 && $scope.selectedWeapon.damageValues[key]<33.3) value = 33.3;
			if(value>49.9 && $scope.selectedWeapon.damageValues[key]<49.9) value = 49.9;
			if(value>99.9 && $scope.selectedWeapon.damageValues[key]<99.9) value = 99.9;
			$scope.effectiveDamage[key]=value;
		}
		
		$scope.subweapon = $scope.getSubweaponByName($scope.selectedWeapon.sub);
		$scope.effectiveSubDamage = {};
		for(var k in $scope.subweapon.damageValues) $scope.effectiveSubDamage[k]=$scope.subweapon.damageValues[k];
		for(var key in $scope.effectiveSubDamage) {
			var value = $scope.effectiveSubDamage[key];
			value = ((value*$scope.getStatByName("Damage").value)/100).toFixed(1)
			$scope.effectiveSubDamage[key]=value;
		}
		
		var special = $.grep($scope.specials, function(e){ return e.name == $scope.selectedWeapon.special; })[0];
		var specialDurationAbility = $scope.mains.count("Special Time")*10 + $scope.subs.count("Special Time")*3;
		if(special.durationCoeff != 1) {
		$scope.effectiveSpecialDuration =  (1+((0.99 * specialDurationAbility) - Math.pow((0.09 * specialDurationAbility),2)) / special.durationCoeff) * special.duration;
		} else {
			$scope.effectiveSpecialDuration = special.duration;
		}
		
		$scope.stateCode = encode($scope.selectedWeapon,$scope.mains,$scope.subs)
        $scope.stateURL = generateURL($scope.stateCode)
		if($scope.stateCode=="") {
			removeHash()
		} else {
			location.hash = '#'+$scope.stateCode
		}
	}

	function updateGear() {
		//Hide all gear and show what is selected.	
		$scope.possibleGear = []

		for(var i = 0; i < $scope.gear.length; i++){
				for(var j=0; j < $scope.mains.length; j++){

					if($scope.gear[i].ability === $scope.mains[j].name && $scope.possibleGear.indexOf($scope.gear[i]) == -1){
						console.log('showing ' + $scope.gear[i].name);
						$scope.possibleGear.push($scope.gear[i])
					}

				}
				for(var j=0; j < $scope.subs.length; j++){
					if($scope.gear[i][$scope.subs[j].name] === '1/3.3' && $scope.possibleGear.indexOf($scope.gear[i]) == -1){
							console.log('showing ' + $scope.gear[i].name);
							$scope.possibleGear.push($scope.gear[i])
						}
					}
			}
	
	}
	
	$scope.clear = function() {
		console.log('CLEARED');
		for(var i=0; i<$scope.mains.length; i++) {
			if($scope.mains[i].slot!=undefined) {
				var conflicts = $scope.getAbilitiesBySlot($scope.mains[i].slot)
				for(var e=0; e<conflicts.length; e++) {
					conflicts[e].lockout = false;
				}
			}
		}
		$scope.mains.length=0;
		$scope.subs.length=0;
		$scope.points = 0;
		calc();
		updateGear();
	};
	//FIXME: move to onload function
	loadFromURL(window.location.href)
	calc();
	updateGear();
	
	$scope.toggleGear = function() {
		$scope.showGear = $scope.showGear ? false: true;
	}
});

function removeHash () { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

splatoonApp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ ErrorMessage }}</h4>' +
								'</div>' +
								'<div class="modal-body">' +
									'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
									'</div>' +
								'</div>' +
	            '</div>' +
	          '</div>' +
	        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
});
