export default class View {
    constructor(model) {
        this.model = model;
        this.user = this.model.userInfo;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.sex = null;
        this.birthDate = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.showUserInfo();
    }

    initElements() {
        this.firstName = document.querySelector('#firstName');
        this.lastName = document.querySelector('#lastName');
        this.email = document.querySelector('#email');
        this.sex = document.querySelector('#sex');
        this.birthDate = document.querySelector('#birthDate');
    }

    showUserInfo() {
        this.firstName.innerText = this.user.firstName || '';
        this.lastName.innerText = this.user.lastName || '';
        this.email.innerText = this.user.email || '';
        this.sex.innerText = this.user.sex || '';
        this.birthDate.innerText = this.user.birthDate || '';
    }
}