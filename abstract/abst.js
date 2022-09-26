var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero1 = /** @class */ (function () {
    function Hero1() {
    }
    Hero1.prototype.move = function () {
        console.log("I'm moving");
    };
    Hero1.prototype.eat = function () {
        console.log("eating");
    };
    return Hero1;
}());
var mage1 = /** @class */ (function (_super) {
    __extends(mage1, _super);
    function mage1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return mage1;
}(Hero1));
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.attack = function () {
        this.mana -= 1;
        console.log("wizard attack");
    };
    return Wizard;
}(mage1));
var Witch = /** @class */ (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Witch.prototype.attack = function () {
        this.mana -= 1;
        console.log("witch attack");
    };
    return Witch;
}(mage1));
var wizard = new Wizard();
var witch = new Witch();
wizard.attack();
witch.attack();
