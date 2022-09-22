var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log("\"hakuna matata\" health ".concat(this.health, " and speed ").concat(this.speed, " and name ").concat(this.name));
    };
    return Animal;
}());
var rabbit = new Animal();
var tiger = new Animal();
var dear = new Animal();
tiger.health = 90;
tiger.speed = 60;
tiger.name = "TIGER";
tiger.run();
rabbit.health = 50;
rabbit.speed = 65;
rabbit.name = "Rabbit";
rabbit.run();
dear.health = 70;
dear.speed = 90;
dear.name = "Dear";
dear.run();
