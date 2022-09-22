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
var students = /** @class */ (function () {
    function students() {
    }
    students.prototype.setscore = function (x) {
        this.score = x;
    };
    students.prototype.getscore = function () {
        return this.score;
    };
    students.prototype.maths = function () {
        console.log("name ".concat(this.name, " and score ").concat(this.score, ", "));
    };
    students.prototype.science = function () {
        console.log("(".concat(this.name, ", ").concat(this.rollno, ",").concat(this.score, "), good in all subject"));
    };
    return students;
}());
var marks = /** @class */ (function (_super) {
    __extends(marks, _super);
    function marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    marks.prototype.sample = function () {
        console.log("".concat(this.score));
    };
    marks.prototype.total = function () {
        console.log("(".concat(this.name, ", ").concat(this.rollno, ", ").concat(this.score, "), extended the super class method"));
    };
    return marks;
}(students));
var stud = new students();
var totals = new marks();
stud.name = "raju";
stud.rollno = 101;
stud.setscore(40);
totals.name = "saravana";
totals.rollno = 103;
totals.setscore(50);
stud.maths();
stud.science();
totals.maths();
totals.science();
totals.sample();
totals.total();
