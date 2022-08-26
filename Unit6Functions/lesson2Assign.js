//Function for volume of cube
function volumeOfCube(side)
{
    let volume = side * side * side;
    alert("The voulme of a cube with a side length of " + side + " is " + volume);
}

//function for area of triangle
let areaOfTri = (height, length) => {
    let area = .5 * height * length;
  //  console.log("here");
    alert("The area of a triangle with a length of " + length + " and a height of " + height + " is " + area);
}

//calling functions
let userSide = prompt("Enter in the side length of your cube.");
volumeOfCube(userSide);

let h = prompt("What is the height of the triangle?");
let l = prompt("What is the length of the triangle?");
areaOfTri(h, l);