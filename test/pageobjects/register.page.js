class ResiterPage {
    /*GETTERS*/
    
  
    /*LABELS*/
    get labelName () { return $$('label')[0] }
    get labelEmail () { return $$('label')[1] }
    get labelFirstPassword () { return $$('label')[2] }
    get labelSecondPassword () { return $$('label')[3] }
  
  
    /*NAME*/
   get inputName () { return $('#form-register-name') }
 
   /*EMAIL*/
 get inputEmail () { return $('#form-register-email') }
   
 /*FIRST PASSWORD*/
  get inputFirstPassword () { return $('#form-register-first-password') }

  /* CONFIRM PASSWORD  */
  get inputSecondPassword () { return $('#form-register-second-password') }

 /*NAME ERROR*/
  get errorName () { return $('#register-error-name') }

  /*EMAIL ERROR*/
  get errorEmail () { return $('#register-error-email') }

 /*ERROR FOR PASSWORDS*/
  get errorFirstPassword () { return $('#register-error-first-password') }
  get errorSecondPassword () { return $('#register-error-second-password') }


  /*BACK TO LOGIN BUTTON*/
  get btnLogin () { return $('#back-to-login') }
  

 /*RESET FIELDS BUTTON*/
  get btnReset () { return $('#reset-fields-button') }

  /*SUBMIT BUTTON*/
  get btnSubmit () { return $('#submit-button') }



  /*SETTERS*/
  setName(name) {
    this.inputName.setValue(name);
    browser.keys('Tab');
  }
  setEmail (email) {
    this.inputEmail.setValue(email);
    browser.keys('Tab');
  }
  setFirstPassword (firstPassword) {
    this.inputFirstPassword.setValue(firstPassword);
    browser.keys('Tab');
  }
  setSecondPassword (secondPassword) {
    this.inputSecondPassword.setValue(secondPassword);
    browser.keys('Tab');
  }

  /*methods*/

  backToLogin () {
      this.btnLogin.click();
  }

  cleanForm () {
    this.btnReset.click();
  }

  


  
  testRegister(name, email, firstPassword, secondPassword) {

    this.setName(name);
    this.setEmail (email);
    this.setFirstPassword (firstPassword);
    this.setSecondPassword (secondPassword);
    this.btnSubmit.click();
  }
    
}

module.exports = new RegisterPage();
