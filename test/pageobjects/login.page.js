class LoginPage {
  /*GETTERS*/
  // get validationContainer () { return $('#validation-container') }
  /*LABELS*/
  get labelEmail () { return $$('label')[0] }
  get labelPassword () { return $$('label')[1] }
  /*selector for email field*/
  get inputEmail () { return $('#form-login-email') }
  /*selector for password field*/
  get inputPassword () { return $('#form-login-password') }
  /*selector for Email error*/
  get errorEmail () { return $('#login-error-email') }
  /*selector for Password error*/
  get errorPassword () { return $('#login-error-password') }    
  /*selector for the Register button*/
  get btnRegister () { return $('#back-to-register') }    
  /*selector for login submit button*/
  get btnSubmit () { return $('#login-button') }
  /*list of results*/
  get listOfResults () { return $('#list-of-results') }  
  /*SETTERS*/
  setEmail (email) {
    this.inputEmail.setValue(email);
    browser.keys('Tab');
  }
  setPassword (password) {
    this.inputPassword.setValue(password);
    browser.keys('Tab');
  }    
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