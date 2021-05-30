"use strict";
// el hadj moussa
var fn = function () { return "response"; };
// moussa el hadj
var fp = function () {
    return "response";
};
var a;
var z;
var b;
var c;
var poo;
var myArr = [1, 2, 3];
myArr = [1, 5, 7];
var myArr2 = ["1", "2", "4"];
myArr.push(69);
a = myArr.pop();
z = myArr.pop();
b = true;
var myArr3 = [1, "2", false];
var myArr4 = [true, 10];
console.log("a : " + a);
console.log("z : " + z);
a = 10;
//a=true;
b = true;
c = "hello";
function add(x, y) {
    return x + y;
}
function addcc(x, y) {
    return x + y;
}
var sumNumber = add(90, 30);
console.log("sumNumber : " + sumNumber);
var sum = add("poo", 30);
console.log("Sum : " + sum);
//function addZ (a,b, c?)
function addZ(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var cc2 = addZ(9, 8);
console.log("cc2 is :" + cc2);
var cc = addZ(9, 8, 7);
console.log("cc is :" + cc);
var hero = { name: "Zack", Role: "Anayaro" };
console.log("Name is :" + hero.name);
console.log("Pseudo is :" + hero.Role);
function greet() {
    return "Zack is amazing !";
}
//var greeting;
var greeting;
greeting = 99;
greeting = greet();
console.log("Greeting is :" + greeting);
//if u don't want the (any) type
var m;
var person = /** @class */ (function () {
    /*  constructor() {
        this.firstName = "default First Name";
        this.lastName = "default Last Name";
      }*/
    function person(FN, LN) {
        this.firstName = FN;
        this.lastName = LN;
    }
    person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return person;
}());
var aPerson = new person("Marcus", "Fenix");
aPerson.firstName = "Zack ";
aPerson.lastName = "Wearden";
aPerson.rank = 1;
console.log("full Name :" + aPerson.getFullName());
console.log("firstName is :" + aPerson.firstName);
console.log("Rank is Number :" + aPerson.rank);
//var bPerson = new person();
//console.log("full Name of default: " + bPerson.getFullName());
