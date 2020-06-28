// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Do not use  global variables
function add(books, bookName) {

    return [...books, bookName]; //add items end of the array

    // Second solution

    const newBooks = [...books];
    newBooks.push(bookName);
}


function remove(books, bookName) {
    const newBooks = [...books];
    var book_index = newBooks.indexOf(bookName);
    if (book_index >= 0) {

        newBooks.splice(book_index, 1);
        return newBooks;


    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("1", bookList);
console.log("2", newBookList);
console.log("3", newerBookList);
console.log("4", newestBookList);