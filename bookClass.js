const addBtn = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author")
const pageInput = document.getElementById("pages")
let readInput = document.querySelector('input[name="read-status"]:checked');
const bookListWrapper = document.getElementById("books-list-wrapper")
const removeBtn = document.getElementsByClassName("remove-btn")
const changeBtn = document.getElementsByClassName("read-status");
let booksArr2 = [];

class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

      title() {
        return this.title;
     } 
     author() {
        return this.author
     }
     pages () {
        return this.pages
     }
     read() {
        return this.read
     }
}

 const hobbit = new Book ("The Hobbit","J.R.R Tolkien",295,"Yes")
 booksArr2.push(hobbit)

const addBook = () => {
    let readInput = document.querySelector('input[name="read-status"]:checked').value;
    title = titleInput.value;
    author = authorInput.value;
    pages = pageInput.value;
    read = readInput
     let freshBook = new Book(title,author,pages,read)
     booksArr2.push(freshBook);
    listBooks(booksArr2)
 }

 const listBooks = (booksArr2) => {
    let i = 0;
    bookListWrapper.innerHTML = "";
    booksArr2.forEach(element => {
        let readStatus = element.read;
        let buttonText = ""
        if(readStatus == "Yes"){
            buttonText = "Mark Unread"
        }
        else{
            buttonText = "Mark as read"
        }
        bookListWrapper.innerHTML += 
        `<div class="book-card">
        <p>Title: ${element.title}</p>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Have you read?: ${element.read}</p>
        <div class="button-wrapper">
        <button class="remove-btn" id="${i}">remove</button>

        <button class="read-status" id="${i}">${buttonText}</button>
        </div>
        `; 
        
        i++;
        getRemoveButtons();
        changeReadStatus(booksArr2);
    })
 }
const getRemoveButtons = () => {
 for( let button of removeBtn){
    button.addEventListener("click", (e) => {
        booksArr2.splice(button.id,1);
        listBooks(booksArr2)
    })
}
}

const changeReadStatus = (array) => {
    for( let button of changeBtn){
        button.addEventListener("click", (e) => {
            if(array[button.id].read === "No"){
                array[button.id].read = "Yes";
                changeBtn.textContent = "Mark as unread"
            }
            else {
                array[button.id].read = "No";
                changeBtn.textContent = "Mark as read"
            }
            listBooks(booksArr2)
        })
    }
}
    addBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    listBooks(booksArr2);