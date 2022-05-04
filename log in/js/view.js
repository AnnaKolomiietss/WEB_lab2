export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.email = null;
        this.password = null;
        this.redirectLink = null;
        this.formController = null;
        this.initView();
    }


    initView() {
        this.initElements();
        this.initControllers();
        this.initListeners();
    }

    initElements() {
        this.form =  document.querySelector('form');
        this.email = document.querySelector('#email');
        this.password = document.querySelector('#password');
        this.redirectLink = document.querySelector('#redirectLink');
    }

    initControllers(controller) {
        this.formController = controller;
    }

    initListeners() {
        this.form.addEventListener( 'submit', (e) => {
            e.preventDefault();
            this.checkAuth();
        });
    }

    logIn() {
        this.formController({
            email: this.email.value,
            password: this.password.value,
        });
    }

    checkAuth() {
        if (this.model.isAuthorized) {
            this.redirectLink.click();
        }
        else {
            alert('Wrong credentials! Try again or sign up');
        }
    }
}