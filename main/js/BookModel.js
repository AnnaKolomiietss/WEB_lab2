export class BookModel {
    constructor(author, name, review, rate, isRead) {
        this.author = author;
        this.name = name;
        this.isRead = isRead || false;
        this.review = review || '';
        this.rate = rate || '';
        this.id = Math.floor(Math.random() * 1000);
    }
}