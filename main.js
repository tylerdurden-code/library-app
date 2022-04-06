let myLibary = [];

function Book(title,author,pages,readit) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readit = readit
}
function addBookToLibrary(title,author,pages,readit) {
    var book = new Book(title,author,pages,readit)
    myLibary.push(book);
}
addBookToLibrary("1234","1234","1234",true);
addBookToLibrary("1234","1234","1234",true);
addBookToLibrary("1234","1234","1234",true);
addBookToLibrary("1234","1234","1234",true);


var section1 = document.getElementById("section1")
section1.innerHTML = JSON.stringify(myLibary, null, 4);