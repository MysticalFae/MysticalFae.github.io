class Student {

    #name; //private var

constructor(studentName, mathGrades)
{
    this.#name = studentName; // # makes it private
    this.mathGrades = mathGrades;
}

calcAvg()
{
    let gradeSum = 0;
    for (const grade of this.mathGrades)
    {
        gradeSum += grade;
    }
    return gradeSum/this.mathGrades.length;
}

printAvg() 
{
    console.log(this.name + "'s average is " + this.calcAvg());
}

}

let sophia = new Student("Sophia", [100, 95, 86, 93]);
let avg = sophia.calcAvg();
console.log(avg);
sophia.printAvg();