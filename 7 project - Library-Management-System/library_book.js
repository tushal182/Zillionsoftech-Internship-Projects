// Define book object
function Book(stunam, booknam, dateoi, isbn, num) {
    this.stunam = stunam;
    this.booknam = booknam;
    this.dateoi = dateoi;
    this.isbn = isbn;
    this.num = num;
}

// Create array to hold book objects
var library = [];

// Add book to library array
function addBook() {
    var stunam = document.getElementById("stunam").value;
    var booknam = document.getElementById("booknam").value;
    var dateoi = document.getElementById("dateoi").value;
    var isbn = document.getElementById("isbn").value;
    var num = document.getElementById("num").value;
    var book = new Book(stunam, booknam, dateoi, isbn, num);
    library.push(book);
    displayBooks();
}

// Remove book from library array
function removeBook() {
    var isbn = prompt("Enter the ISBN of the book to remove:");
    for (var i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            library.splice(i, 1);
            break;
        }
    }
    displayBooks();
}

// Search for book by title, author, or ISBN
function searchBook() {
    var search = document.getElementById("search").value.toLowerCase();
    var matches = [];
    for (var i = 0; i < library.length; i++) {
        if (library[i].title.toLowerCase().includes(search) || library[i].author.toLowerCase().includes(search) || library[i].isbn.toLowerCase().includes(search)) {
            matches.push(library[i]);
        }
    }
    displayBooks(matches);
}

// Display all books in library array
function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    if (!books) {
        books = library;
    }
    for (var i = 0; i < books.length; i++) {
        var tr = document.createElement("tr");
        var tdStudent = document.createElement("td");
        tdStudent.innerText = books[i].stunam;
        var tdBook = document.createElement("td");
        tdBook.innerText = books[i].booknam;
        var tdDate = document.createElement("td");
        tdDate.innerText = books[i].dateoi;
        var tdIsbn = document.createElement("td");
        tdIsbn.innerText = books[i].isbn;
        var tdNum = document.createElement("td");
        tdNum.innerText = books[i].num;
        tr.appendChild(tdStudent);
        tr.appendChild(tdBook);
        tr.appendChild(tdDate);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdNum);
        bookList.appendChild(tr);
    }
}