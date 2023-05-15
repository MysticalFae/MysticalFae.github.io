class bookInfo 
{
  #pagesPerHour;
  #amtReadPerDay;

  constructor(pagesPerHour, amtReadPerDay)
  {
    this.#pagesPerHour = pagesPerHour;
    this.#amtReadPerDay = amtReadPerDay;
  }

  returnSpeed()
  {
    return this.#pagesPerHour;
  }

  returnAmtOfTime()
  {
    return this.#amtReadPerDay;
  }

  canIReadToday(book)
  {
    let pages = book.returnPages();
    let hours =  pages / this.#pagesPerHour;
    console.log(hours);
    if(pages % this.#pagesPerHour != 0)
    {
      hours = hours+1;
    }
    if(hours <= this.#amtReadPerDay)
    {
      return "You can read the book today!";
    }
    return "You don't seem to have enough time to read the book today.";

  }

}

class book
{
  #title;
  #author;
  #pages;
  #rating;
  #readYet;

  constructor(title, author, pages, readYet, rating) //have read
  {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#readYet = readYet;
    this.#rating = rating;
  }

  returnTitle()
  {
    return this.#title;
  }
  returnAuthor()
  {
    return this.#author;
  }
  returnRating()
  {
    return this.#rating;
  }
  returnIfRead()
  {
    return this.#readYet;
  }
  returnPages()
  {
    return this.#pages;
  }

  changeTitle(newTitle)
  {
    this.#title = newTitle;
  }
  changeAuthor(newAuthor)
  {
    this.#author = newAuthor;
  }
  changeRating(newRating)
  {
    this.#rating = newRating;
  }
  changePages(newPages)
  {
    this.#pages = newPages;
  }
  changeReadYet(newReadYet)
  {
    this.#readYet = newReadYet;
  }

}

class bookshelf
{
  #shelf = [];

  constructor(shelf)
  {
    this.#shelf = shelf;
  }

  removeBook(book)
  {
    const isSame = (element) => element === book; //function that goes through each element to check if equal
    //let index = this.#shelf.IndexOf(book); //only for strings!!
    let index = this.#shelf.findIndex(isSame);
    if(index != -1)
    {
      this.#shelf.splice(index, 1);
      console.log("The book has been removed.");
    }
    else
    {
      console.log("book not found!");
    }
    
  }

  addBook(book)
  {
    this.#shelf.push(book);
    console.log("The book has been added!");
  }

  returnShelf()
  {
    return this.#shelf;
  }
}

// let myStats = new bookInfo(100, 2);
// let book1 = new book("Three Blind Mice", "Jane Doe", 23, false, 0);
// let book2 = new book("White Hot Kisses", "John Doe", 300, true, 4.7);
// let book3 = new book("These Violent Delights", "Jane Doe", 500, true, 4);
// let book4 = new book("Discovery of Witches", "Jane Doe", 550, true, 4.7);
// let book5 = new book("City of Fire and Ash", "John Doe", 210, true, 3.5);
// let book6 = new book("Last Argument of Kings", "John Doe", 680, false, 0);

// let smallShelf = [book1, book3, book6];

// let myBookshelf = new bookshelf([book1, book2, book3, book4, book5, book6]);
// let mySmallBookshelf = new bookshelf(smallShelf);

// myBookshelf.removeBook(book3);
// let book7 = new book("Seven Dead Queens", "Jane Doe", 370, false, 0);
// mySmallBookshelf.addBook(book7);
// console.log(myBookshelf.returnShelf());
// console.log(mySmallBookshelf.returnShelf());
// myBookshelf.removeBook(book7); //will return "book has not been found"

// console.log(myStats.canIReadToday(book5));

function main()
{
      console.log("Welcome to your book log! You'll start by adding your reading stats, then you'll setting up your bookshelf.");
     alert("ready to countinue?");
      readingStats();
     
}

function readingStats()
  {
   
    // let pagesPerHour;
    //let hoursPerDay;
    console.log("Here you'll input some reading information about you.")
    pagesPerHour = prompt("How many pages can you read per hour (avg)?");
  
    console.log(pagesPerHour);
    console.log("Added!");
      
    hoursPerDay = prompt("How many hours a day can/do you deticate to reading (avg)?");

    console.log(hoursPerDay);
    console.log("Your stats have been added!");
    let currentStats = new bookInfo(pagesPerHour, hoursPerDay);
    creatingBookshelf(currentStats);
  }


  function creatingBookshelf(currentStats)
  {
    console.log("Now we'll create your bookshelf.")

   amtOfBooks = prompt("First enter the amount of books you'll be adding to your shelf.");

    let myBooks = [];

    for(let i = 0; i < parseInt(amtOfBooks); i++)
    {
      let title, author, rating, pages, readYet;
      console.log("For book " + (i+1) + ": ");

      title = prompt("Title: ");
      console.log(title);
    
      author = prompt("Author: ");
      console.log(author);

      pages = prompt("Pages: ");
      console.log(pages);

      readYet = prompt("Have you read it yet (true/false): ");
      console.log(readYet);

      rating = prompt("Rating: ");
      console.log(rating);

      myBooks[i] = new book(title, author, pages, readYet, rating);
    }
    let allMyBooks = new bookshelf(myBooks);
    console.log(allmyBooks.returnShelf());
    console.log("Now you can review your information!");
    alert("Ready?");
    options(myBooks, allMyBooks, currentStats);
  }

  function options(myBooks, allMyBooks, currentStats)
  {
    console.log(myBooks);
    running = true;
    while(running)
    {
      let choice = prompt("see if I can read a book today(1), change bookshelf(2), or exit(3)");
      if(choice == 1)
      {
        title = prompt("What's the title of the book you want to see if you can read today?");
        let blah = false;
        for(let i = 0; i < myBooks.length; i++)
        {
          bookT = myBooks[i].returnTitle();
          if(bookT === title)
          {
            console.log(currentStats.canIReadToday(books[i]));
            blah = true;
          } 
        }
        if(blah == false)
        {
          console.log("no book was found with that title.");
        }
        options();
      }
      else if(choice == 2)
      {
        choice2 = prompt("Would you like to add(1) or delete a book(2)?")
        if(choice2 == 1)
        {
          t = prompt("Title: ");
          a = prompt("author: ");
          r = prompt("Rating: ");
          rY = prompt("Read yet?: ");
          p = prompt("Pages: ");

          allMyBooks.addBook(new book(t, a, p, rY, r));
          console.log("Book has been added!");

        } else if (choice2 == 2)
        {
          title1 = prompt("What's the title of the book you want to delete?");
          for(let i = 0; i < allMyBooks.length; i++)
        {
          book = allMyBooks[i].returnTitle();
          if(book === title1)
          {
            allMyBooks.removeBook(allMyBooks[i]);
            console.log("Book has been removed");
          } 
        }
        }
        options();
      }
      else if(choice == 3)
      {
        running = false;
      }
      else 
      {
        console.log("Please make sure to type 1, 2, 3, or 4!");
        options();
      }
    }
  }

console.log("blah");
alert("Please use key binds to navigate to the console.");
main();