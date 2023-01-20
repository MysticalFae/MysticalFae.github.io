//syntax

/*
while (condition is true)
{
    code that will run
}
*/

// prompts ARE alerts
let correctNum = 5;
let guess = prompt("Guess a # between 1-10");
while(guess != correctNum)
{
    guess = prompt ("Incorrect, try agian");
}
alert("Congrats, the answer WAS 5.");

// for quiz

let pass = "password";
let userGuess = prompt ("please enter the password.");

while(userGuess != pass)
{
   userGuess = prompt("Wrong! Try agian.");
}
alert("Good job. You can enter.");