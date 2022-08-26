/* 
function functionName() 
{
    code...
}

To use function in program -- functionName();
*/

// OR

/*
let this varible be equal ( = ) to function (the function is represented by () ). the function is (represented by => ).. blah (stuff inside the function)

let functionName = () => {
    code
}

*/

function printGreeting() //declaring function wherever u want?? 
{
    alert("Welcome! My name is John Doe");
    let name = prompt("What is your name?");
    alert("Welcome (agian), " + name + "!");
}

printGreeting(); //calling the function just.. in the void (lol, no main, it's so weird!)

//ARROW FUNCTION

let printGreeting2 = () => {
    alert("你好! 我叫 Fae!");
    let theirName = prompt("你叫什麼名字?")
    alert("嗨, " + theirName + "!");
}

printGreeting2();