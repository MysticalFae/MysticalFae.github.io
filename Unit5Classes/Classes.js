class Applicant {

    constructor(firstName, lastName, wantedPosition)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wantedPosition = wantedPosition;
    }

}

let bob = new Applicant("Bob", "Smith", "Baker");

console.log(bob.firstName);
console.log(bob);

class Dog {
    constructor(name, age, breed)
    {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}

let puppy = new Dog("Lucy", 2, "Husky");
console.log(puppy);