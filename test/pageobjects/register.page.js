class RegisterPage {
    //inputs
    get inputName (){
        return $('input[id="formRegisterName"]');
    }
    get inputEmail(){
        return $('input[id="formRegisterEmail"]');
    }
    get inputFirstPassword(){
        return $('input[id="formRegisterFirstPassword"]');
    }
    get inputSecondPassword (){
        return $('input[id="formRegisterSecondPasswordd"]');
    }
        // Error divs
        get registerErrorDivName() {
            return $('div[id="RegisterErrorName"]').getText();
        }
        get registerErrorDivEmail() {
            return $('div[id="registerErrorEmail"]').getText();
        }
        get registerErrorDivFirstPassword() {
            return $('div[id="registerErrorFirstPassword"]').getText();
        }
        get registerErrorDivSecondPassword() {
            return $('div[id="registerErrorSeconPassword"]').getText();
        }
         //  buttons
    get buttonSubmit() {
        return $('button[id="registerButton"]');
    }
    get buttonReset() {
        return $('a[id="resetFieldsButton"]');
    }

    resetFieldsButton() {
        this.resetFieldsButton.click();
    }
    register(name, email, firstPassword, secondPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputFirstPassword.setValue(firstPassword);
        this.inputConfirmPassword.setValue(confirmPassword);
        this.buttonSubmit.click();
    }
}

module.exports = new RegisterPage();

}
