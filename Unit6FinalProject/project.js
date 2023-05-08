
class book
{
    #title;
    #author;
    #rating;
    #comment = "";

    constructor(title, author, rating, comment)
    {
        this.#title = title;
        this.#author = author;
        this.#rating = rating;
        this.#comment = comment;
    }

    constuctor(title, author, rating)
    {
        this.#title = title;
        this.#author = author;
        this.#rating = rating;
    }

    returnTitle()
    {
        return this.#title;
    }
    returnRating()
    {
        return this.#rating;
    }
    returnComment()
    {
        if (this.#comment != "")
        {
            return this.#comment;
        }
        return "no comment made"; //or maybe 0;
    }

    change(changingElement, newVal)
    {
     switch (changingElement)
        {
            case "title":
                this.#title = newVal;
                break;
            case "author":
                 this.#author = newVal;
                break;
            case "rating":
                this.#rating = newVal;
                break;
            case "comment":
                this.#comment = newVal;
                break;
            default:
                return "The element entered wasn't valid.";
        }
        
    }
}

class allBooks
{
    allBooksArray;

    constructor(allBooksArray)
    {
        this.allBooksArray = allBooksArray;
    }

    returnAllBooks()
    {
       return this.allBooksArray;
    }

    removeBook(book)
    {
       let index = this.allBooksArray.indexOf(book);
        this.allBooksArray.splice(index, 1);
    }

    // aBCOrder()
    // {
    //     for(var i = 0; i < this.allBooksArray.length-1; i++)
    //     {
    //         let firstLet = this.allBooksArray[0].returnTitle().charAt(0);
    //         console.log(firstLet);
    //         // console.log(firstLet);
    //         // firstLet = this.firstLet.returnTitle();
    //         // firstLet = firstLet.charAt(0);
    //         let secLet = this.allBooksArray[i+1].returnTitle().charAt(0);
    //         if(firstLet > secLet)
    //         {
    //             let temp = this.allBooksArray.splice(0, 1);
    //             this.allBooksArray.splice(i+1, 0, temp);
    //         }
    //     }
    // }

    // titleOfEachInOrder()
    // {
    //     for(let i = 0; i < this.#allBooksArray.length-1; i++)
    //     {
    //         console.log(this.#allBooksArray[i].returntitle() + " ");
    //     }
    // }

}

class sort extends allBooks
{

    specificRating(rating)
    {
        let allWithRating = [];
        let count = 0;
        for(let i = 0; i < 4; i++)
        {
            if(super.allBooksArray[i].returnRating() == rating)
            {
                allWithRating.push(super.allBooksArray[i].returnTitle);
                count++;
            }
        }
        if(count > 0)
        {
            console.log(count + "book(s) had " + rating + " stars");
            console.log(allWithRating.toString);
        }
        else 
        {
            console.log("No books had " + " star(s)");
        }
    }

    // specificAuthor(author)
    // {

    // }
}

// class stats
// {

// }


let book1 = new book("Sea God", "Mary Jane", 3, "it was okay");
let book2 = new book("Two Mice", "John Doe", 4);
let book3 = new book("All the death", "Bob Mark", 3, "ehh");
let book4 = new book("Call Me Crazy", "Jane Lark", 4.7, "good");
let book5 = new book("Before the Storm", "Harry Ford", 4);

console.log(book2.returnTitle()); // works

let books = [book1, book2, book3, book4, book5];

let allBooks1 = new allBooks(books);

console.log(allBooks1.returnAllBooks());
allBooks1.removeBook(book2);
console.log(allBooks1.returnAllBooks());

book1.change("rating", 2);
console.log(book1.returnRating());

let sortingThem = new sort();
sortingThem.specificRating(3);

// allBooks1.aBCOrder();
// allBooks1.titleOfEachInOrder();




 // let index;
        // switch (changingElement)
        // {
        //     case "title":
        //         index = allBooksArray.indexOf(changingElement);
        //         break;
        //     case "author":
        //         index = allBooksArray.indexOf(changingElement);
        //         break;
        //     case "date":
        //         index = allBooksArray.indexOf(changingElement);
        //         break;
        //     case "rating":
        //         index = allBooksArray.indexOf(changingElement);
        //         break;
        //     case "comment":
        //         index = allBooksArray.indexOf(changingElement);
        //         break;
        //     default:
        //         return "The element entered wasn't valid.";
        // }

























/*
class Zoo
{
    amtOfPeople;
    timeZooOpens;
    timeArrived;
    timeSpent;
    foodOptions;

    constructor(amtOfPeople, timeZooOpens, timeArrived, timeSpentThere, foodOptions)
    {
        this.amtOfPeople = amtOfPeople;
        this.timeZooOpens = timeZooOpens;
        this.timeArrived = timeArrived;
        this.timeSpent = timeSpent;
        this.foodOptions = foodOptions;
    }
}

class ZooAnimals
{
    area;
    amt;
    biome;
    crowded;

    constructor(area, amt, biome, crowded)
    {
        this.area = area;
        this.amt = amt;
        this.biome = biome;
        this.crowded = crowded;
    }

}

class Food
{
    mostPopularItem;
    avgPrice;
    veganOptions;
    location;

    constructor(mostPopularItem, avgPrice, veganOptions, location)
    {
        this.mostPopularItem = mostPopularItem;
        this.avgPrice = avgPrice;
        this.veganOptions = veganOptions;
        this.location = location;
    }
}
*/