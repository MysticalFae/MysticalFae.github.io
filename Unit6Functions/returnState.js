//using functions from last lesson, but changing it so it returns smthg

function areaOfRec(l, w)
{
    let area = l * w;
    return area;
}

let rect = areaOfRec(4, 5);
console.log("The area is " + rect);

//for assignment (I didn't want to create another file)

//Function for volume of cube
function volumeOfCube(side)
{
    let volume = side * side * side;
   // alert("The voulme of a cube with a side length of " + side + " is " + volume);
   return volume;
}

//function for area of triangle
let areaOfTri = (height, length) => {
    let area = .5 * height * length;
  //  console.log("here");
   //alert("The area of a triangle with a length of " + length + " and a height of " + height + " is " + area);
    return area;
}

//calling functions
let userSide = prompt("Enter in the side length of your cube.");
let cubeVol = volumeOfCube(userSide);
alert("The voulme of a cube with a side length of " + userSide + " is " + cubeVol);


let h = prompt("What is the height of the triangle?");
let l = prompt("What is the length of the triangle?");
let triArea = areaOfTri(h, l);
alert("The area of a triangle with a length of " + l + " and a height of " + h + " is " + triArea);