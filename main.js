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

// var book1 = new Book("whateaaver","whatevsserrr",123,true);
// addBookToLibrary(book1);
// var book2 = new Book("whatever","whatevferrr",123,true);
// addBookToLibrary(book2);
// var book3 = new Book("whatever","whatedsafverrr",123,true);
// addBookToLibrary(book3);
// var book4 = new Book("whataaever","whateverrr",123,true);
// addBookToLibrary(book4);

// console.log(myLibrary)

const form = document.getElementById("book-form");
const panel = document.getElementById("panel")
// panel.innerHTML = JSON.stringify(myLibrary, null, 2);

form.addEventListener("submit",(e) => {
    e.preventDefault()
    var res = document.querySelector('input[name="readit"]:checked').value;
    if (res === "yes") {
        var book = new Book(author.value,title.value,pages.value,"Yes")
    }
    else if (res === "no") {
        var book = new Book(author.value,title.value,pages.value,"No")
    }
    addBookToLibrary(book);
    form.reset()
    const newDiv = document.createElement("div")
    newDiv.setAttribute('class','cards')
    newDiv.innerHTML = `Author:${book.author}<br>Title:${book.title}<br>
    Pages:${book.nPages}<br>Read It:${book.isRead}`
    panel.appendChild(newDiv)   
})
