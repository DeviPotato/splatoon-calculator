var Stat = function(name, type, min, max, d, calc_val_fn) {
    this.name = name;
    this.type = type;
    this.min = min;
    this.max = max;
    this.d = d;
    this.calc_val = calc_val_fn;
    this.apply(0, 0);
};

// apply the given number of mains and subs, calculating their effect on the value
Stat.prototype.apply = function(m, s) {
    this.m = m;
    this.s = s;

    var a = 10 * m + 3 * s;
    var tmp = 0.09 * a;
    var x = (0.99 * a - tmp * tmp) / this.d;
    this.calc_val(x);
    //    this.perc = (this.val - this.min) / (this.max - this.min) * 100;
};

// count abilities that affect the given stat name.
Object.defineProperties(Array.prototype, {
    count: {
        value: function(stat) {
            return this.reduce(function(total, perk) {
                return perk.affects === stat ? (total + 1) : total
            }, 0);
        }
    }
});

angular.module('splatoonApp').stats = function($scope) {
    //TODO: refactor. still not happy with penalty implementation. depends on scope
    $scope.stats = [
        new Stat("Damage", "%", 0, 130, 100, function(x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        }),
        new Stat("Damage Taken", "%", 70, 100, 100, function(x) {
            this.value = Math.max(this.min, 100 * (1 - x / 1.8));
        }),
        new Stat("Ink Recovery", "s", 1.65, 3, 200 / 3, function(x) {
            this.value = Math.max(this.min, 3 * (1.0 - x));
        }),
        new Stat("Ink Usage Main", "%", 55, 100, (200 / 3), function(x) {
            this.value = Math.max(this.min, 100 - 100 * x);
        }),
        new Stat("Ink Usage Sub", "%", 65, 100, 600 / 7, function(x) {
            this.value = Math.max(this.min, 100 - 100 * x);
        }),
        new Stat("Bomb Throw Range", "%", 0, 150, 60, function(x) {
            this.value = Math.min(this.max, (156.8 * (1 + x)) / 156.8 * 100);
        }),
        new Stat("Run Speed", "%", 0, 150, 60, function(x) {
            this.value = Math.min(this.max, (96 * (1 + x)) / 96 * 100);
        }),
        new Stat("Swim Speed", "%", 100, 125, 120, function(x) {
            var hasNinja = ($scope.mains.indexOf($scope.getAbilityByName("Ninja Squid")) != -1);
            var hasPenalty = ($scope.selectedWeapon.speedPenalty);
            if (hasPenalty && hasNinja) {
                this.min = 75;
            } else if (hasPenalty || hasNinja) {
                this.min = 90;
            } else this.min = 100;
            this.value = Math.min(this.max, (192 * (1 + x)) / 192 * this.min);
        }),
        new Stat("Special Charge", "%", 0, 130, 100, function(x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        }),
        new Stat("Special Time", "%", 0, 140, 75, function(x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        }),
        new Stat("Special Save", "%", 0, 100, 60, function(x) {
            if ($scope.selectedWeapon.depletion == 'Light') {
                this.min = 60;
            } else if ($scope.selectedWeapon.depletion == 'Heavy') {
                this.min = 25;
            } else {
                this.min = 40;
            }
            this.value = Math.min(this.max, this.min + 100 * x);
        }),
        new Stat("Respawn Rate", "s", 2, (360 + 30 + 120) / 60, 45, function(x) {
            this.value = Math.max(this.min, ((1.0 - x) * 360 + 30 + 120) / 60);
        }),
        new Stat("Jump Speed", "s", 2.41, 4.83, 60, function(x) {
            var hasStealth = ($scope.mains.indexOf($scope.getAbilityByName("Stealth Jump")) != -1);
            var a = 20 + 60 * (1 - x);
            var b = 130 * (1 - x);
            var c = 30;
            if (hasStealth) c = 80;
            this.value = Math.max(this.min, (a + b + c) / 60);
        }),
        new Stat("Echolocator/Haunt Duration", "s", 4.5, 9, 1, function(x) {
            this.value = x > 0 ? 4.5 : 9;
        })
    ];

    $scope.getStatByName = function(name) {
        for (var i = 0; i < $scope.stats.length; i++) {
            if ($scope.stats[i].name == name) {
                return $scope.stats[i]
            }
        }
        return false;
    }

};
