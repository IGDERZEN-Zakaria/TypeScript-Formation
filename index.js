"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var _ = require("lodash");
var Poo = new person_1.Person();
Poo.firstName = "Tommy";
Poo.lastName = "Rodd";
console.log(Poo);
var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
