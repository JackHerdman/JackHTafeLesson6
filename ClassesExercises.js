//1. Create a class called Pet
class Pet1 {

}
//2. Give the class 3 properties called givenName, age and ownerId
class Pet2 {
    givenName;
    age;
    ownerId;
}
//3. Create a constructor that assigns the 3 properties above

class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }
}
//4. Create a class called Owner with 3 properties: givenName, familyName and id
class Owner1 {
    givenName;
    familyName;
    id;
}
//5. Create a constructor for the Owner class that assigns the values above.
class Owner2 {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
}
//6. Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner
class Owner {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
    getFullName() {
        return `${this.givenName} ${this.familyName}`
    }
}
//7. Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.

//8. Create a class called Square with a single property, sideLength and create a constructor that assigns that value
//9. Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
//10. Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)