
export  class Person {
  // par default la visibilité est PUBLIC
  // La visibilité PROTECTED permet d'accéder au propriétés dans le type et dasn les types qui héritent du type
  //firstName: string;
  //lastName: string;
  private firstName: string;
  private lastName: string;
  readonly name="Deku";

  constructor(FN: string,LN: string)
  {
    this.firstName = FN;
    this.lastName = LN;
  }

  public getFirstName() {
    return this.firstName;
  }
  public getLastName() {
    return this.lastName;
  }

  public setFirstName(FN: string) {
    this.firstName = FN;
  }
  public setLastName(LN: string) {
    this.lastName = LN;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  greet() {
    console.log("All Might");
  }
}

// Héritage
class Programmer extends Person {
  greet() {
    console.log("Endeavor");
  }

  greetLikeNormalPeople() {
    super.greet(); // methode class mère
    this.greet(); // methode class courante
  }
}

//var aProgrammer = new Programmer();
//aProgrammer.greetLikeNormalPeople();


// readonly est seulement dispo en mode lecture , impossible de modifier sa valeur
//aPerson.name="";
var aPerson = new Programmer("Marcus","Fenix");
console.log("My name is : "+aPerson.name );
