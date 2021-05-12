class LoginPage {
    /*GETTERS*/
    
    
    // get validationContainer () { return $('#validation-container') }
    
    
    /*LABELS*/
    get labelEmail () { return $$('label')[0] }
    get labelPassword () { return $$('label')[1] }

    /*EMAIL*/
    get inputEmail () { return $('#form-login-email') }
    
    /*PASSWORD*/
    get inputPassword () { return $('#form-login-password') }

    /*EMAIL ERROR*/
    get errorEmail () { return $('#login-error-email') }
    
    /*PASSWORD ERROR*/
     get errorPassword () { return $('#login-error-password') }
     
     /*BUTTONS*/
     get btnRegister () { return $('#back-to-register') }
    get btnSubmit () { return $('#login-button') }
   
      /*SETTERS*/
    setEmail (email) {
      this.inputEmail.setValue(email);
      browser.keys('Tab');
    }
    setPassword (password) {
      this.inputPassword.setValue(password);
      browser.keys('Tab');
    }
    // /*selector for clean form  function*/
    // get btnFinish {
    //   return $('input[id="cleanFormLink"]');
    // }  
    /* METHODS */
     
    buttonRegister () {
      this.btnRegister.click();
    }    
    testLogin (email, password) {
      this.setEmail(email);
      this.setPassword(password);
      this.btnSubmit.click();
    }
  }
    
  module.exports = new LoginPage();
