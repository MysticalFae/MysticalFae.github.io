
let secNum = 8;
let answer = 0;

while(answer != 8) 
{
    answer = parseInt(prompt("Guess a number between 1 and 10 (1 ans 10 r included)"));

    if (answer > secNum)
    {
        alert("Too big! Try guessing a smaller number!");
    } 
    else if (answer < secNum)
    {
        alert("Too small! Try guessing a bigger number!");
    }
}

if (answer == secNum)
{
    alert("YAY! The number was " + secNum);
}