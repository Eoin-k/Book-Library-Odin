const addBtn = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author")
const pageInput = document.getElementById("pages")
let readInput = document.querySelector('input[name="read-status"]:checked');
const bookListWrapper = document.getElementById("books-list-wrapper")
const removeBtn = document.getElementsByClassName("remove-btn")
const changeBtn = document.getElementsByClassName("read-status");
booksArr = [];

function book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
    let structure = {
        title: this.title,
        author: this.author,
        pages: this.pages,
        read: this.read,
    } 
    booksArr.push(structure)
    }
    
    new book ("The Hobbit","J.R.R Tolkien",295,"not read yet")

 const addBook = () => {
    let readInput = document.querySelector('input[name="read-status"]:checked').value;
    title = titleInput.value;
    author = authorInput.value;
    pages = pageInput.value;
    read = readInput
    new book(title,author,pages,read)
    listBooks(booksArr)
 }

 const listBooks = (booksArr) => {
    let i = 0;
    bookListWrapper.innerHTML = "";
    booksArr.forEach(element => {
        bookListWrapper.innerHTML += 
        `<div class="book-card">
        <p>Title: ${element.title}</p>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Have you read?: ${element.read}</p>
        <div class="button-wrapper">
        <button class="remove-btn" id="${i}">remove</button>
        <button class="read-status" id="${i}">Change Read Status</button>
        </div>
        `; 
        
        i++;
        getRemoveButtons();
        changeReadStatus(booksArr);
    })
 }
const getRemoveButtons = () => {
 for( let button of removeBtn){
    button.addEventListener("click", (e) => {
        booksArr.splice(button.id,1);
        listBooks(booksArr)
    })
}
}

const changeReadStatus = (array) => {
    for( let button of changeBtn){
        button.addEventListener("click", (e) => {
            if(array[button.id].read === "not read yet"){
                array[button.id].read = "yes";
            }
            else {
                array[button.id].read = "not read yet";
            }
            listBooks(booksArr)
        })
    }
}
    addBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    listBooks(booksArr);
