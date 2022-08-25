//alert -- annoying pop up on someone's screen

alert("This is an alert"); //person has to press "okay"

//prompt -- expects user to type + submit info (getting user's input)
//You already did it

let passwrd = prompt("What is your password? ");
console.log("Your password is .... " + passwrd); //not good security
// so if u replace the '+' with "&", it says the password is '0' bc the html doesnt do smth until after (idk)

if (passwrd == "abc123")
{
    console.log("Your password is correct");
} else if (passwrd == "bob")
{
    console.log("Who sets their password to bob?")
} else 
{
    console.log("Cool password that the world now knows!");
}