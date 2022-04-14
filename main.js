var myLibrary = [];

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

class Book {
    constructor(author,title,nPages,isRead) {
        this.author = author;
        this.title = title;
        this.nPages = nPages;
        this.isRead = isRead;
    }
}

var book1 = new Book("whateaaver","whatevsserrr",123,true);
addBookToLibrary(book1);
var book2 = new Book("whatever","whatevferrr",123,true);
addBookToLibrary(book2);
var book3 = new Book("whatever","whatedsafverrr",123,true);
addBookToLibrary(book3);
var book4 = new Book("whataaever","whateverrr",123,true);
addBookToLibrary(book4);

console.log(myLibrary)

