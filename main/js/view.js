export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.unreadBooksContainer = null;
        this.myBooksContainer = null;
        this.myTopContainer = null;
        this.addUnreadBookController = null;
        this.addMyBookController = null;
        this.removeBookController = null;
        this.authorInput = null;
        this.nameInput = null;
        this.reviewInput = null;
        this.rateInput = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
        this.renderBooks();
    }

    initElements() {
        this.form = document.querySelector('form');
        this.unreadBooksContainer = document.querySelector('#unread_books_container');
        this.myBooksContainer = document.querySelector('#my_books_container');
        this.myTopContainer = document.querySelector('#my_top_container');
        this.authorInput = document.querySelector('#author');
        this.nameInput = document.querySelector('#name');
        this.reviewInput = document.querySelector('#review');
        this.rateInput = document.querySelector('#rate');
        this.addUnreadBookBtn = document.querySelector('#add_unread_book_btn');
        this.addMyBookBtn = document.querySelector('#add_my_book_btn');
        this.saveBookBtn = document.querySelector('#add_book');
    }

    initListeners() {
        this.form.addEventListener('submit', e => e.preventDefault());
        this.addUnreadBookBtn.addEventListener('click', () => {
            this.reviewInput.hidden = true;
            this.rateInput.hidden = true;
            this.saveBookBtn.setAttribute('data-event-type', 'save-unread-book');
        });
        this.addMyBookBtn.addEventListener('click', () => {
            this.reviewInput.hidden = false;
            this.rateInput.hidden = false;
            this.saveBookBtn.setAttribute('data-event-type', 'save-my-book');
        });
    }

    initControllers(controller) {
        this.addUnreadBookController = controller.addUnreadBook;
        this.addMyBookController = controller.addMyBook;
        this.removeBookController = controller.removeBook;
    }

    onAddUnreadBook() {
        this.addUnreadBookController({
            author: this.authorInput.value,
            name: this.nameInput.value,
        });

        this.authorInput.value = '';
        this.nameInput.value = '';

        this.renderBooks();
    }

    onAddMyBook() {
        this.addMyBookController({
            author: this.authorInput.value,
            name: this.nameInput.value,
            review: this.reviewInput.value,
            rate: this.rateInput.value
        });

        this.authorInput.value = '';
        this.nameInput.value = '';
        this.reviewInput.value = '';
        this.rateInput.value = '';

        this.renderBooks();
    }

    onRemoveBook(id) {
        this.removeBookController(+id);
        this.renderBooks();
    }

    renderBooks() {
        this.unreadBooksContainer.innerHTML = '';
        this.myBooksContainer.innerHTML = '';
        this.myTopContainer.innerHTML = '';

        this.model.books.forEach(book => {
            const currContainer = book.isRead ? this.myBooksContainer : this.unreadBooksContainer;
            currContainer.insertAdjacentHTML(
                    'beforeend',
                    this.getBookHtml(book.id, book.author, book.name, book.review, book.rate, book.isRead)
            );

            if(book.isRead) {
                this.myTopContainer.insertAdjacentHTML(
                    'beforeend',
                    this.getBookForRateHtml(book.id, book.author, book.name, book.rate)
                );
            }
        });

        document.querySelectorAll('.remove-book-btn').forEach(btn => {
            btn.addEventListener('click', () => this.onRemoveBook(btn.getAttribute('data-book-id')));
        });
    }

    getBookHtml(id, author, name, review, rate, isRead) {
        return `
             <div class="row book text-center">
                <div class="col book-author border-end">
                    ${author}
                </div>
                <div class="col book-name border-end">
                  ${name}
                </div>    
                <div class="col book-review border-end ${!isRead ? 'hidden' : ''}">
                  ${review}
                </div>
                <div class="col book-rate border-end ${!isRead ? 'hidden' : ''}">
                  ${rate}
                </div>
                <button class="col remove-book-btn" data-book-id="${id}" style="padding: 0 !important;">x</button>
             </div>
        `
    }

    getBookForRateHtml(id, author, name, rate) {
        return `
             <div class="row book text-center">
                <div class="col book-rate border-end">
                  ${rate}
                </div>
                <div class="col book-author border-end">
                    ${author}
                </div>
                <div class="col book-name border-end">
                  ${name}
                </div>   
                <button class="col remove-book-btn" data-book-id="${id}" style="padding: 0 !important;">x</button> 
             </div>
        `
    }
}