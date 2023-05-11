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

let myStats = new bookInfo(100, 2);
let book1 = new book("Three Blind Mice", "Jane Doe", 23, false, 0);
let book2 = new book("White Hot Kisses", "John Doe", 300, true, 4.7);
let book3 = new book("These Violent Delights", "Jane Doe", 500, true, 4);
let book4 = new book("Discovery of Witches", "Jane Doe", 550, true, 4.7);
let book5 = new book("City of Fire and Ash", "John Doe", 210, true, 3.5);
let book6 = new book("Last Argument of Kings", "John Doe", 680, false, 0);

let smallShelf = [book1, book3, book6];

let myBookshelf = new bookshelf([book1, book2, book3, book4, book5, book6]);
let mySmallBookshelf = new bookshelf(smallShelf);

myBookshelf.removeBook(book3);
let book7 = new book("Seven Dead Queens", "Jane Doe", 370, false, 0);
mySmallBookshelf.addBook(book7);
console.log(myBookshelf.returnShelf());
console.log(mySmallBookshelf.returnShelf());
myBookshelf.removeBook(book7); //will return "book has not been found"

console.log(myStats.canIReadToday(book5));