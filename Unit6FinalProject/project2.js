class bookInfo 
{
  #pagesPerHour;
  #amtReadPerDay;

  constructor()
  {
    
    this.#pagesPerHour = prompt("How many pages can you read every hour (avg)?");
    this.#amtReadPerDay = prompt("How many hours a day can you deticate to reading (avg)?");
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
  #shelf;

  constructor()
  {
    this.#shelf = [];
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


function main()
{
      console.log("Welcome to your book log! You'll start by adding your reading stats, then you'll setting up your bookshelf.");
     
      let myStats = new bookInfo();
      let myBookShelf = new bookshelf();

     let amt = prompt("How many books do you want to add?");
     let allBooks = [];
    for(let i = 0; i < parseInt(amt); i++)
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

      allBooks[i] = new book(title, author, pages, readYet, rating);
      myBookShelf.addBook(allBooks[i]);
    }
    console.log(myBookShelf.returnShelf());
    console.log("Now that everything has been entered, you can view/change your data.");
    let running = true;

    while(running)
    {
      let choice = prompt("Would you like to see if you can read a book(1), add/remove a book(2), exit(3)?");
      if(choice==1)
      {
        let titleToFind = prompt("Enter the title of the book you'd like to see if you can read in an avg day: ");
        let found = false;
        for(let j = 0; j < myBookShelf.returnShelf().length; j++)
        {
          let specificBook = myBookShelf.returnShelf();
          if(specificBook[j].returnTitle() == titleToFind)
          {
            myStats.canIReadToday(titleToFind);
            found = true;
          }
        
        }
        if(found == false)
        {
          console.log("The book title wasn't found..");
        }
      } else if(choice == 2)
      {
        let bookManip = prompt("Do you want to add(1) or remove(2) a book?");
        if(bookManip == 1)
        {
        let title1 = prompt("Title: ");
        console.log(title1);
    
        let author1 = prompt("Author: ");
        console.log(author1);

        let pages1 = prompt("Pages: ");
        console.log(pages1);

        let readYet1 = prompt("Have you read it yet (true/false): ");
        console.log(readYet1);

        let rating1 = prompt("Rating: ");
        console.log(rating1);
        myBookShelf.addBook(new book(title1, author1, pages1, readYet1, rating1));
        console.log(myBookShelf.returnShelf());

        } else if (bookManip == 2)
        {
          let titleToDelete = prompt("Enter the title of the book you want to remove: ");
          let found1 = false;
          console.log(myBookShelf.returnShelf());

        for(let k = 0; k < myBookShelf.returnShelf().length; k++)
        {
          let booksInQuestion = myBookShelf.returnShelf();
          console.log(booksInQuestion[k]);
          let bookInQuestion = booksInQuestion[k];
          if(bookInQuestion.returnTitle() = titleToDelete)
          {
            myBookShelf.removeBook(myBookShelf[k]);
            found1 = true;
            console.log(myBookShelf.returnShelf());
          }
        }
        if(found1 == false)
        {
          console.log("The book title wasn't found..");
        }

        } else {
          console.log("You need to enter a 1 or 2");
        }
      } else if (choice == 3)
      {
        running = false;
      } else {
        console.log("Please enter a 1, 2, or 3");
      }
    }
}

main();