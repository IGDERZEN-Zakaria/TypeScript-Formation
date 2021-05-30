// le import import les classes et exécute également les fonctionnalités de cu fichier contenaire
// càd classes.ts
import {Person} from './classes';
function echo<T>(arg: T): T
{
    return arg;
}

//var myStr2 : string = echo(1);
var myStr  = echo(1);





class Admin extends Person
{

}

class Manager extends Person
{

}

let admin = new Admin("Grin","Patch");

let manager = new Admin("Tommy","Rodd");

function personEcho<T extends Person>(person: T): T
{
    return person;
}

var Poo = personEcho(admin);
var Moo = personEcho(manager);






