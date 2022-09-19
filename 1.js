"use strict";
exports.__esModule = true;
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.run = function () {
        console.log("hakuna matata");
    };
    return animal;
}());
exports.animal = animal;
var tiger = new animal();
tiger.health = 50;
tiger.speed = 100;
tiger.run();
