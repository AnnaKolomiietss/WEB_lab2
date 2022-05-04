export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.initControllers({
            addUnreadBook: this.addUnreadBook,
            addMyBook: this.addMyBook,
            removeBook: this.removeBook,
        });
        this.init();
    }

    init() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.addBookBtn = document.querySelector('#add_book');
    }

    initListeners() {
        this.addBookBtn.addEventListener( 'click', () => {
            const buttonEventAttr = this.addBookBtn.getAttribute('data-event-type');

            if(buttonEventAttr === 'save-unread-book') {
                this.view.onAddUnreadBook();
            }
            if(buttonEventAttr === 'save-my-book') {
                this.view.onAddMyBook();
            }
        });
    }

    addUnreadBook(book) {
        this.model.addBook(book);
    }

    addMyBook(book) {
        this.model.addBook(book, true);
    }

    removeBook(id) {
        this.model.removeBook(id);
    }
}