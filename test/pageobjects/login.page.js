class LoginPage {
    // Inputs 
    get inputEmail() {
        return $('input[id="formLoginEmail"]');
    }
    get inputPassword() {
        return $('input[id="formLoginPassword"]');
    }

    //error divs
    get errorDivEmail() {
        return $('div[id="loginErrorEmail"]').getText();
    }
    get errorDivPassword() {
        return $('div[id="loginErrorPassword"]').getText();
    }
     // button 
     get buttonSubmit() {
        return $('button[id="loginButton"]');
    }

    //Link to register form
    get buttonRegister() {
        return $('a[id="goToRegisterForm"]');
    }

    buttonRegister() {
        this.buttonRegister.click();
    }
    login(email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.buttonSubmit.click();
    }
}
module.exports = new LoginPage();

