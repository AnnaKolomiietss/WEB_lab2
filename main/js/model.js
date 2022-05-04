import {BookModel} from "./BookModel.js";

export default class Model {
    constructor() {
        this.isAuthorized = false;
        this.books = [];
        this.loadBooks();
    }

    loadBooks() {
        const user = JSON.parse(localStorage.getItem('myBooksUser'));
        this.books = user.books || [];
    }

    addBook(book, isRead) {
        if(book.author && book.name) {
            const item = new BookModel(book.author, book.name, book.review, book.rate, isRead);
            const user = JSON.parse(localStorage.getItem('myBooksUser'));
            this.books.push(item);

            localStorage.setItem('myBooksUser', JSON.stringify({...user, books: this.books}));
        }
    }

    removeBook(id) {
       const idx = this.books.findIndex(el => el.id === id);
       const user = JSON.parse(localStorage.getItem('myBooksUser'));
       this.books.splice(idx, 1);

       localStorage.setItem('myBooksUser', JSON.stringify({...user, books: this.books}));
    }
}