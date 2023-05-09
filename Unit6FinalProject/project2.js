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
    let hours = pages / this.#pagesPerHour;
    if(hours+1 <= this.#amtReadPerDay)
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
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.rating = rating;
  }
  constructor(title, author, pages, readYet) //if they havent read it yet
  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = 0;
    this.readYet = readYet;
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

  constructor(shelf)
  {
    this.#shelf = shelf;
  }

  removeBook(book)
  {
    let index = this.#shelf.IndexOf(book);
    delete this.#shelf[index];
    return "The book has been removed.";
  }

  addBook(book)
  {
    this.#shelf.push(book);
    return "The book has been added!";
  }

  returnShelf()
  {
    return this.#shelf;
  }
}


