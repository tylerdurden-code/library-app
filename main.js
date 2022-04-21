var myLibrary = [];

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}
function deleteObj(obj) {
    delete obj
}
function res() {
    var res = document.querySelector('input[name="readit"]:checked').value;
    if (res === "yes") {      
        return new Book(author.value,title.value,pages.value,"Yes")
    }
    else if (res === "no") {
        return new Book(author.value,title.value,pages.value,"No")
    }
}
function createDiv(book) {
    var newDiv = document.createElement("div")
    newDiv.setAttribute('class','cards')
    newDiv.setAttribute('id',`card${i}`)
    newDiv.setAttribute('data-init',i);
    newDiv.innerHTML = `Author:${book.author}<br>Title:${book.title}<br>
    Pages:${book.nPages}<br>Read It:${book.isRead}<br>`
    return newDiv
}
function createBtn() {
    var newBtn = document.createElement("button")
    newBtn.setAttribute('id',"delBtn")
    newBtn.setAttribute('data-init',i);
    return newBtn;
}
function createSvg() {
    var newSvg = document.createElementNS("http://www.w3.org/2000/svg","svg")
    newSvg.setAttribute("style","width:24px;height:24px");
    newSvg.setAttribute("viewBox","0 0 24 24");
    var newPath = document.createElementNS("http://www.w3.org/2000/svg","path")
    newPath.setAttribute("fill","currentColor")
    newPath.setAttribute("d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z")
    newSvg.appendChild(newPath)
    return newSvg
}
function createToggle(isRead) {
    var newToggle = document.createElement("label");
    newToggle.setAttribute("class","switch")
    var input = document.createElement("input")
    input.setAttribute("type","checkbox")
    if (isRead === "Yes") {
        input.setAttribute("checked","checked")
    }
    newToggle.appendChild(input)
    var span = document.createElement("span")
    span.setAttribute("class","slider round")
    newToggle.appendChild(span);
    return newToggle;
}
class Book {
    constructor(author,title,nPages,isRead) {
        this.author = author;
        this.title = title;
        this.nPages = nPages;
        this.isRead = isRead;
    }
}

const form = document.getElementById("book-form");
const panel = document.getElementById("panel")
var i = 0;

form.addEventListener("submit",(e) => {
    e.preventDefault()
    var book = res()
    addBookToLibrary(book);
    form.reset()
    var newDiv = createDiv(book);
    var newToggle = createToggle(book.isRead);
    var newBtn = createBtn();
    var newSvg = createSvg();
    newBtn.appendChild(newSvg);
    panel.appendChild(newDiv);
    newDiv.appendChild(newToggle)
    newDiv.appendChild(newBtn);
    newBtn.addEventListener('click',(e) => {
        var child = document.getElementById(`card${newBtn.dataset.init}`)
        panel.removeChild(child);

    })
    i++
})

