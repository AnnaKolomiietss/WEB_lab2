export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.logInBtn = null;
        this.view.initControllers(this.logIn);
        this.initElements();
    }

    initElements() {
        this.logInBtn = document.querySelector('#log_in_btn');

        this.logInBtn.addEventListener('click', () => {
            this.view.logIn();
        });
    }

    logIn(credentials) {
        this.model.logIn(credentials);
    }
}