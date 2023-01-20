//syntax
/*

for (start; check a condition; increment) 
{
    code that will run
}

*/

console.log("0-3");
for(let i = 0; i <= 3; i++)
{
    console.log(i);
}

console.log("10-0");
for (let i = 10; i >= 0; i--)
{
    console.log(i);
}

console.log("All even #s to 10");
for(let i = 2; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
}


console.log("EXTRA");
// if we want 5 #s and we're starting at 0, it's < 5, if we starting at 1, it's <= 5

// if 0 and want to print 1 - 5
for (let i = 0; i < 5; i++)
{
    console.log(i+1);
}

// if 1 and want to print 1 - 5
for (let i = 1; i <= 5; i++)
{
    console.log(i);
}
