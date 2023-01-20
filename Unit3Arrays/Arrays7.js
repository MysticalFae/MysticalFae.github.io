let favAnimals = ["jellyfish", "turtles", "monkeys"];

// to remove a specific element from an array -- .splice(index to start, amt to delete)

let ifItemsLeft = true;
let amtLeft = 0

while(ifItemsLeft)
{
    let guess = prompt("Please type in one of MY fav animals");
    
    if (favAnimals.includes(guess))
    {
        let index = favAnimals.indexOf(guess);
        favAnimals.splice(index, 1);
        amtLeft++;
        console.log(amtLeft);
        alert("Good job! " + amtLeft + " item(s) down!");
        let numRemaining = favAnimals.length;

    } else {
        alert("Incorrect guess. Try agian!");
    }
    if (favAnimals.length == 0)
    {
       alert("Congrats! You got all of them!");
       ifItemsLeft = false
    }
}