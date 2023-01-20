console.log("hi");

// global varaiables -- vars that r accissable throughout ENTIRE program
// when to create one ..

let imGlobal = "Global var"; // declared outside any function -- assesible throughout program (and entire page)

function printVar() {
    // block scoping -- var defined inside function/if statment -- vars ONLY assesible inside function
    console.log(imGlobal); //assesible
    let localVar = "Local var"; // ONLY assesible in function
    console.log(localVar);
    imGlobal = "Global changed"; // works CHANGED
    console.log(imGlobal);
}
// console.log(localVar) -- won't work
printVar();
console.log(imGlobal); // will the value be the same as after it was changed in the function?? Yes (as long as u call the fucntion before so it runs)
