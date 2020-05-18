// //1. Create a class called Pet
// class Pet1 {

// }
// //2. Give the class 3 properties called givenName, age and ownerId
// class Pet2 {
//     givenName;
//     age;
//     ownerId;
// }
// //3. Create a constructor that assigns the 3 properties above
// class Pet3 {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }
// }
// //4. Create a class called Owner with 3 properties: givenName, familyName and id
// class Owner4 {
//     givenName;
//     familyName;
//     id;
// }
// //5. Create a constructor for the Owner class that assigns the values above.
// class Owner5 {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
// }
// //6. Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner
// class Owner6 {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
//     getFullName() {
//         return `${this.givenName} ${this.familyName}`
//     }
// }
// //7. Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.

// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }
//     static getOwnerById(pet, owners) {
//         //long way
//         // let foundOwner;
//         // for (let i = 0; i < owners.length; i++) {
//         //     const currentOwner = owners[i];
//         //     if (pet.ownerId === currentOwner.id) {
//         //         foundOwner = currentOwner;
//         //         break;
//         //     }
//         // }
//         // if (!foundOwner) {
//         //     return "ERROR: Owner not found";
//         // }
//         // return foundOwner.getFullName();
//         //shorter way
//         let foundOwner = owners.find(function(owner){
//             return owner.id == pet.ownerId;
//         });
//         if (!foundOwner){
//             return "ERROR: Owner not found";
//         }
//     }
// }
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
//     getFullName() {
//         return `${this.givenName} ${this.familyName}`
//     }
// }
// let pet1 = new Pet("Scooby", 5, 222)
// console.log(pet1);
// let owners = [
//     new Owner("Shaggy", "Rogers", 222),
//     new Owner("Sally", "Lay", 154),
//     new Owner("Jack", "Herdman", 267),
// ];

// console.log(Pet.getOwnerById(pet1, owners));


// //8. Create a class called Square with a single property, sideLength and create a constructor that assigns that value
// class Square8 {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
// }
// //9. Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
// class Square9 {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }

//     get areaSquared() {
//         return this.sideLength * 2;

//     }
// }

// //10. Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    get area() {
        return this.sideLength * 2;
    }

}

let room = new Square(20);
console.log(`the side length is ${room}m`)
console.log(`the area of the room is ${room.area}m2`);