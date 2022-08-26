//ALL FUNCTIONS ARE USING ARGUMENTS AND PARAMETERS
//usually function defenition r towards top of document and function calls r towards bot (seperate)

//Finding area of rect
function areaRect(len, width) 
{
    let area = len * width;
    console.log("Area of rect with length of " + len + " and width of " + width + " is " + area);
}

areaRect(4, 5);


// Greeting
let greet = (name, job) =>
{
    console.log("Welcome, " + name + "! We are glad to have a " + job + " at the convention today!");
}

greet("Mary", "farmer");
// could do greet("farmer", "Mary"); would print -- welcome farmer, we are glad to have a mary at blah -- ie. it would not know the diff


