
export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.password = null;
        this.sex = null;
        this.birthDate = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.form = document.querySelector('form');
        this.firstName = document.querySelector('#firstName');
        this.lastName = document.querySelector('#lastName');
        this.email = document.querySelector('#email');
        this.password = document.querySelector('#password');
        this.sex = document.querySelector('#sex');
        this.birthDate = document.querySelector('#birth_date');
        this.redirectLink = document.querySelector('#redirect_link');
    }

    initControllers(controller) {
        this.formController = controller;
    }

    initListeners() {
        this.form.addEventListener( 'submit', (e) => {
            e.preventDefault();
            if(this.model.isAuthorized) {
                this.redirectLink.click();
            }
        });
    }

    signUp() {
        this.formController({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
            sex: this.sex.value,
            birthDate: this.birthDate.value,
        });
    }
}