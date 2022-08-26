alert(" Welcome to this story! Please navigate to the console to receive information on your journey. I despise alerts.")

console.log("This is where story information will be shown!");
console.log("While on the way to the store, you spot a friendly looking dog.");

let stop = prompt("Do you (1) pull over, or (2) continue on? (Side note: you can safely pull over to check on the dog)");

if(stop == "2")
{
    console.log("How boring and rude. Your story ends here.");
} else if (stop == "1")
{
    console.log("Good choice");
    console.log("You pull over and open your door. The dog comes running over wagging their tail. After petting the dog for a few minutes, they pulls away and walks towards the forest (that just happeneds to be nearby). The dog keeps turning their head back, almost like they're waiting for you.")
    let follow = prompt("Do you (1) get back in your car having your fill of \"dog\" for the day, or (2) follow the dog into the forest?");

    if (follow == "1") 
    {
        console.log("What a missed opportunity...");
    } else if (follow == "2")
    {
        console.log("You confusingly follow the dog who has now picked up their pace. As you reach the opening into the forest, a thin purple veil seems to appear. The dog walks through the opening without a problem. You choose to follow, lightly pushing through the veil. When you reach the \"other side\", you're transported into a lively, whimsical world. Deer, squirrels, bears, and birds dance around a sparkling pond where bright fish swim, and fearless frogs fly. The sun bounces off the water and trees casting rays of sun that hide in the dark corners illuminating the whole forest. The dog trots off to chat with the deer playing in the tall grass, leaving you to stare at this unimaginable scene.")
        let leave = prompt("Do you (1) leave the forest wanting to return to reality, or (2) join in on the fun?");

        if (leave == 1)
        {
            console.log("You give a quick \"good bye\" to the dog before walking back through the bubble towards your car. While the adventure was fun, it couldn't have lasted forever, right?");
            console.log("THE END!");
        } else if (leave == 2)
        {
            console.log("You decide to dance with the squirrels, sing with the birds, play with the deer, and swim with the fish. After having an amazing time, you choose to head out. But before you reach the forest's opening, the dog approaches you, and, while you can't quite understand each other, the message is clear. You will always be welcomed back to the forest.");
            console.log("THE END!");
        }
    }
}  