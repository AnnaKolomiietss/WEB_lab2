export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.signUpBtn = null;
        this.view.initControllers(this.signUp);
        this.init();
    }

    init() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.signUpBtn = document.querySelector('#sign_up_btn');
    }

    initListeners() {
        this.signUpBtn.addEventListener( 'click', () => this.view.signUp());
    }

    signUp(credentials) {
        this.model.signUp({...credentials});
    }
}