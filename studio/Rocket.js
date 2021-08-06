"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name,
            this.totalCapacityKg = totalCapacity;
    }
    Rocket.prototype.sumMass = function (items) {
        var massKgSum = 0;
        items.map(function (item) { massKgSum += item.massKg; });
        return massKgSum;
    };
    Rocket.prototype.currentMassKg = function () {
        var total1 = this.sumMass(this.astronauts);
        var total2 = this.sumMass(this.cargoItems);
        return total1 + total2;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
