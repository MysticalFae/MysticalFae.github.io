// rect elements -- el = element
// let smthg = document.getElementById("");
let elRectL = document.getElementById("rect-length");
let elRectW = document.getElementById("rect-width");
let elRectA = document.getElementById("rect-area");
// these ^^ represent the entire text element. ie. the box, the text, etc.
let elCalcR = document.getElementById("calc-rect-area");

// sphere elements
let elSphereR = document.getElementById("sph-r");
let elSphereV = document.getElementById("sph-vol");
let elCalcV = document.getElementById("calc-sph-vol");

// Circle elements
let elCirR = document.getElementById("cir-r");
let elCirA = document.getElementById("cir-area");
let elCirCalc = document.getElementById("calc-cir-area");

//Quadratic elements
let elA = document.getElementById("a");
let elB = document.getElementById("b");
let elC = document.getElementById("c");
let elResultSub = document.getElementById("quad-result-sub");
let elResultAdd = document.getElementById("quad-result-add");
let elCalcResult = document.getElementById("quad-calc");



// rect button/calc
elCalcR.onclick = function() 
{
    let rectL = elRectL.value;
    let rectW = elRectW.value;
    //these ^^ r ONLY getting the value (thing typed in box) from the element

    let rectA = rectL * rectW;
    elRectA.value = rectA; //assigning the value of rectA that we found above to the element (ie. it will show up in the text box for area);
}
//all of that^^ was inside the button function! 


//sphere button/calc

elCalcV.onclick = function() 
{
    let sphR = elSphereR.value;
    let sphV = 4/3 * Math.PI * sphR**3;
    elSphereV.value = sphV;

}


// Circle button/calc

elCirCalc.onclick = function()
{
    let cirR = elCirR.value;
    let cirA = Math.PI * cirR**2;
    elCirA.value = cirA;
}


//quadratic button/calc (no imaginary stuff) -- didn't want to lose it

// elCalcResult.onclick = function()
// {
//     let a = elA.value;
//     let b = elB.value;
//     let c = elC.value;

//     let resultSub = (-(b) - Math.sqrt((b**2) -4 * a * c)) / (2 * a);
//     let resultAdd = (-(b) + Math.sqrt((b**2) -4 * a * c)) / (2 * a);
//     resultSub = resultSub.toFixed(3);
//     resultAdd = resultAdd.toFixed(3);

//     elResultSub.value = resultSub;
//     elResultAdd.value = resultAdd;

elCalcResult.onclick = function()
{
    let a = elA.value;
    let b = elB.value;
    let c = elC.value;

    let inside = (b**2) - 4 * a * c;

    if (inside < 0)
    {
        newInside = -(inside);
        console.log(newInside);
        let insidePart = Math.sqrt(newInside) / (2 * a);
        let outsidePart = -b / (2 * a);
        outsidePart = outsidePart.toFixed(3);
        insidePart = insidePart.toFixed(3);
        let resultSub = outsidePart + " - " + insidePart + "i";
        let resultAdd = outsidePart + " + " + insidePart + "i";
        // let resultSub = (-(b) - Math.sqrt(newInside) / (2 * a));
        // let resultAdd = (-(b) + Math.sqrt(newInside) / (2 * a));
        elResultSub.value = resultSub;
        elResultAdd.value = resultAdd;
    } else {

    let resultSub = (-(b) - Math.sqrt((b**2) -4 * a * c)) / (2 * a);
    let resultAdd = (-(b) + Math.sqrt((b**2) -4 * a * c)) / (2 * a);
    resultSub = resultSub.toFixed(3);
    resultAdd = resultAdd.toFixed(3);
    elResultSub.value = resultSub;
    elResultAdd.value = resultAdd;
    }
    
    
}
