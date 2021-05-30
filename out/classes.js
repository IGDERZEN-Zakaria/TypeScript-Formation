"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(FN, LN) {
        this.name = "Deku";
        this.firstName = FN;
        this.lastName = LN;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setFirstName = function (FN) {
        this.firstName = FN;
    };
    Person.prototype.setLastName = function (LN) {
        this.lastName = LN;
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.greet = function () {
        console.log("All Might");
    };
    return Person;
}());
exports.Person = Person;
// Héritage
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Endeavor");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this); // methode class mère
        this.greet(); // methode class courante
    };
    return Programmer;
}(Person));
//var aProgrammer = new Programmer();
//aProgrammer.greetLikeNormalPeople();
// readonly est seulement dispo en mode lecture , impossible de modifier sa valeur
//aPerson.name="";
var aPerson = new Programmer("Marcus", "Fenix");
console.log("My name is : " + aPerson.name);
