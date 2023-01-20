let favFood = ["beans", "potatos", "yogurt", "blueberries"];

for(let i = 0; i < favFood.length; i++) // .length so u don't have to keep changing it when u add stuff to array. 
// .length os a PROPERTY (no ()) vs a METHOD (yes ())
{
    console.log(favFood[i]);
}

//another way (similar to python)

for(const element of favFood)
{
    console.log(element);
}

// for quiz
let myFriends = ["Indrias", "Marcus", "Addison", "Reya"];

for(let i = 0; i < myFriends.length; i++)
{
    let friend = myFriends[i];
    console.log("Welcome " + friend + "!");
}

for (const element of myFriends)
{
    let leavingFriend = element;
    console.log("Goodbye " + leavingFriend);
}