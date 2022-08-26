//making story he made

alert("You're a warrior maiden in a kingdom long long ago. Recently, a you hero went to slay a dragon that has been burning villiges as of late. You saw the hero be taken by the dragon to the back side of  nearby mountion.");

let woodsOrMount = prompt("Do you go through the woods (1), or climb the front side of the mountian (2)?");


if (woodsOrMount == "1") 
{
    let darkOrEasy = prompt("As you walk through the woods, you have to choose between a dark scary road that looks like it goes through the backside of the mountian (1), or the nicer, prettier road that appears to take a detour (2)?");

    if (darkOrEasy == "1")
    {
        alert("You got lost! Your death is near...");
    } else {
        let cliffOrEasy = prompt("As you go down the easy road, you see the back of the mountian has a cliff that leads to the dragon's lair, but the cliff is very steep. Do you climb it(1), or take the 'easy' path that seems to lead away from the mountian (2).");

        if (cliffOrEasy == "1")
        {
            alert("You climb the cliff successfully and find the dragon's lair. You slay the dragon and resue the hero (?). Congrats!");
        } else {
            alert("Eventually the woods get darker and deeper and you... die.")
        }
    }
   
} else {
    alert("as you climb the mountian, the dragon finds and captures you. You die, game over.");

}