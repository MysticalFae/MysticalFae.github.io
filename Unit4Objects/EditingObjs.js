// creating array within object

let trees = {

    favorite: "willow",
    alive: true,
    colors: ["green", "yellow", "orange", "brown"] //array
}

console.log(trees);

// to edit values (he does it in console)
trees.alive = false;
console.log(trees.alive);

//editing array in obj
//object, array, command
trees.colors.splice(1,1); //removes starting at index 1 and removing 1 (yellow)
console.log(trees.colors);

console.log(trees.colors[0]); //to read value at index of array

trees.colors.push("yellow"); //adds yellow at end of array
console.log(trees.colors);