let jules = { 
    name: "Jules",
    qualifications: ["friendly", "supportive", "funny", "calm", "extrovert"],
    match: 0
}

let olive = { 
    name: "Olive",
    qualifications: ["introvert", "relaxed", "independent", "funny", "smart"],
    match: 0
}

let raven = {
    name: "Raven",
    qualifications: ["creative", "rebel", "fun", "adventurous", "supportive"],
    match: 0
}

let kerien = {
    name: "Kerian",
    qualifications: ["loyal", "introvert", "patient", "caring", "adventurous"],
    match: 0
}

let friends = [jules, olive, raven, kerien];


alert("Please navigate to the console (cmd, option, c on mac) and be ready to input the top 6 qualities you look for in a friend.")

let wantedQuali = [];

for(let i = 0; i < 6; i++)
{
    let userQuali = prompt("Please enter quality number " + (i+1) + " (one word): ");
    wantedQuali.push(userQuali);
}


for (const friend of friends)
{
    for(const quali of friend.qualifications)
    {
        if(wantedQuali.includes(quali))
        {
            friend.match++;
        }
    }
    perMatch = Math.round(friend.match/6 * 100);
    console.log(friend.name + " : match amt : " + friend.match);
    alert(friend.name + " : match percentage : " + perMatch + "%");
}


