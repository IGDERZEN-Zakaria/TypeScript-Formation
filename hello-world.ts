
// el hadj moussa
var fn = () => "response";

// moussa el hadj
var fp = function() {
  return "response";
};

var a: number;
var z: number;
var b: boolean;
var c: string;
var poo: undefined;

var myArr = [1, 2, 3];
myArr = [1, 5, 7];
var myArr2 = ["1", "2", "4"];
myArr.push(69);
a = myArr.pop();
z = myArr.pop();
b = true;
var myArr3 = [1, "2", false];
var myArr4: [boolean, number] = [true, 10];

console.log("a : " + a);
console.log("z : " + z);
a = 10;
//a=true;
b = true;
c = "hello";

function add(x, y) {
  return x + y;
}

function addcc(x: number, y: number) {
  return x + y;
}
var sumNumber = add(90, 30);

console.log("sumNumber : " + sumNumber);

var sum = add("poo", 30);

console.log("Sum : " + sum);

//function addZ (a,b, c?)
function addZ(a, b, c = 0): number {
  return a + b + c;
}

var cc2 = addZ(9, 8);
console.log("cc2 is :" + cc2);

var cc = addZ(9, 8, 7);
console.log("cc is :" + cc);

var hero = { name: "Zack", Role: "Anayaro" };

console.log("Name is :" + hero.name);
console.log("Pseudo is :" + hero.Role);

function greet(): string {
  return "Zack is amazing !";
}

//var greeting;
var greeting: any;

greeting = 99;
greeting = greet();

console.log("Greeting is :" + greeting);

//if u don't want the (any) type
var m: number | boolean | string;

class person {
  firstName: string;
  lastName: string;
  rank: number;

/*  constructor() {
    this.firstName = "default First Name";
    this.lastName = "default Last Name";
  }*/

   constructor(FN:string,LN:string)
  {
    this.firstName = FN;
    this.lastName = LN;  
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

}

var aPerson = new person("Marcus","Fenix");
aPerson.firstName = "Zack ";
aPerson.lastName = "Wearden";
aPerson.rank = 1;
console.log("full Name :" + aPerson.getFullName());
console.log("firstName is :" + aPerson.firstName);
console.log("Rank is Number :" + aPerson.rank);

//var bPerson = new person();
//console.log("full Name of default: " + bPerson.getFullName());

