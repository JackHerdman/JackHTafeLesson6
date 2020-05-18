//Classes
//essentially a blueprint to create an object
class Person {
    constructor(givenName, familyName, age) { //constructor allows parameters to be passed in when creating a person object
        this.givenName = givenName;
        this.familyName = familyName;
        this.age = age;
    }
    getFullName() { //a function that is inside a class is available to every object
        return `${this.givenName} ${this.familyName}`
    }
    increaseAge(number) {
        this.age += number
    }

    static createPersonFromObject(obj) {  //not tied to any specific instance/object from the class
        return new Person(obj.firstName, obj.lastName, obj.age);
    }
}

let me = new Person(); //creates an blank instance called me using what is in Person
let you = new Person("Luke", "Parker", 30); // creates an instance using the parameters from the constructor
me.name = "jack";
me.age = 29;
me.favouriteFood = "Pizza";
let dan = Person.createPersonFromObject({
    firstName: "Dan",
    familyName: "Wilson",
    age: 23
})
console.log(me);
console.log(you);
console.log(dan);

console.log(you.getFullName());
me.increaseAge(6);
console.log(me.age);

class Owner {
    constructor(givenName, familyName, age) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.age = age;
    }
}
let owners = [
    new Owner("Luke", "Skywalker", 23),
    new Owner("Dan", "Williams", 24),
    new Owner("Lucy", "Potts", 25),
    new Owner("Owen", "Daniels", 26),
]

let people = []
for (let i = 0; i < owners.length; i++) {
    let owner = owners[i];
    people.push(Person.createPersonFromObject(owner));
}
console.log(people);