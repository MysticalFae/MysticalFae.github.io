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