class House {
    constructor(rooms, street, city, stories)
    {
        this.rooms = rooms;
        this.street = street;
        this.city = city;
        this.stories = stories;
    }
}

let house1 = new House(5, "2312 Baker St", "Houston", 2)
console.log(house1);