let hobbyStuff = { //name of fake comapny. He's creating this as he goes so...
    name: "Hobby Stuff",
    qualifications: ["friendly", "formal", "crafter", "retail", "strength"],
    match: 0
}

let food4Life = { //name of fake comapny. He's creating this as he goes so...
    name: "Food 4 Life",
    qualifications: ["friendly", "cook", "baker", "teamwork", "smart"],
    match: 0
}

let moonDayCare = { //name of fake comapny. He's creating this as he goes so...
    name: "Moonlight Daycare",
    qualifications: ["creative", "friendly", "patient", "organized", "strength"],
    match: 0
}

let companies = [hobbyStuff, food4Life, moonDayCare]

console.log("Please type in your top 5 qualities!");

let appliQuali = [];
for(let i = 0; i < 5; i++)
{
    let quali = prompt("Please type in your qualification: ");
    appliQuali.push(quali);
}

for(const company of companies)
{
    for(const quali of company.qualifications)
    {
        if(appliQuali.includes(quali))
        {
            company.match++;
        }
    }
    console.log(company.name + "   match: " + company.match);
}