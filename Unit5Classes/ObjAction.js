// class Character {

//     #name;
//     #hp;
//     #armor;
//     #atkPwr;
//     #inventory;

//     constructor(name, hp, armor, atkPwr, inventory)
//     {
//         this.#name = name;
//         this.#hp = hp;
//         this.#armor = armor;
//         this.#atkPwr = atkPwr;
//         this.#inventory = inventory;
//     }

//     getName()
//     {
//         return this.#name;
//     }
//     getHp()
//     {
//         return this.#hp;
//     }

//     setHp (newHp) 
//     {
//         this.#hp = newHp;
//     }

//     getArmor()
//     {
//         return this.#armor;
//     }

//     attack(name)
//     {
//         let damDealt = this.#atkPwr - name.getArmor();
//         let nameNewHp = name.getHp() - damDealt;
//         name.setHp(nameNewHp);
//     }
// }

// let bob = new Character ("bob", 20, 3, 2, ["backpack", "axe", "seeds"]);
// let alice = new Character ("Alice", 30, 1, 4, ["sword"]);

// alice.attack(bob);
// console.log(bob.getHp());

class Human {
    #name;
    #home;
    #forgetfulness;
    
    constructor(name, home, forgetfulness)
    {
        this.#name = name;
        this.#home = home;
        this.#forgetfulness = forgetfulness;
    }

    isHome()
    {
        this.#home = true;
        return this.#home;
    }

    isNotHome()
    {
        this.#home = false
        if (this.#forgetfulness >= 5)
        {
            return "trouble!";
           
        }
        else 
        {
            return "safe";
        }
    }

}

class Candle {
    #where;
    #on;

    constructor( where, on)
    {
        this.#where = where;
        this.#on = on;
    }

    turnCandleOn()
    {
        this.#on = true;
        console.log("Candle is now on.");
    }

    burning()
    {
         console.log("Oh No!! The candel has fallen and is currently buring the " + this.#where + "!");
    }
}

let bob = new Human("Bob", false, 8);
let tallCandle = new Candle("study", false);
humanWhere = bob.isHome();

if (humanWhere == true)
{
    tallCandle.turnCandleOn();
}

situation = bob.isNotHome();
console.log(situation);

if (situation == "trouble!")
{
    tallCandle.burning();
}
