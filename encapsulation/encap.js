"use strict";
exports.__esModule = true;
exports.exam = void 0;
var exam = /** @class */ (function () {
    function exam() {
    }
    exam.prototype.setmaths = function (maths) {
        if (maths < 0) {
            console.log("Enter the ".concat(maths, " is in less than equal to zero"));
        }
        this.maths = maths;
    };
    exam.prototype.getmaths = function () {
        return this.maths;
    };
    exam.prototype.setscience = function (science) {
        this.science = science;
    };
    exam.prototype.getscience = function () {
        return this.science;
    };
    return exam;
}());
exports.exam = exam;
var marks = new exam();
marks.setmaths(-5);
marks.setmaths(5);
marks.setscience(6);
console.log("maths marks is ".concat(marks.getmaths(), "/10 "));
console.log(" science marks is ".concat(marks.getscience(), "/10"));
