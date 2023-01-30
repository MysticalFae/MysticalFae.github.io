class Dog {
    constructor(name, age, breed)
    {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    sit()
    {
        console.log(this.name + " is now sitting"); 
    }

    fetch(item)
    {
        console.log(this.name + " fetches the " + item);
    }

    changeAge()
    {
        this.age++;
        return this.age;
    }

    printInfo()
    {
        console.log(this.name + " is a " + this.age + " year old " + this.breed);
    }
}

let lucy = new Dog("Lucy", 2, "Husky");
console.log(lucy);

lucy.sit(); // Lucy is now sitting

lucy.fetch("stick"); // Lucy fetches the stick

console.log(lucy.changeAge()); // returns '3'

let fido = new Dog("Fido", 3, "Pomeranian");
fido.printInfo();