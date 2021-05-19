const RegisterPage = require('../pageobjects/register.page');

describe('Register section', () => {
    function browserPause() {
        browser.pause(4000);
    }
    
    const urlRegister = 'https://fiorella94.github.io/week11Automation/public/register.html';
    const urlLogin = 'https://fiorella94.github.io/week11Automation/public/login.html';

    beforeAll("Open browser on register url", () => {
        browser.url(urlRegister);
      });
    describe ('Name, Email and both Passwords fields testing', () => {
        /*NAME*/
        it('empty name', () => {
            RegisterPage.setName()            
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('name with no spaces in between', () => {
            RegisterPage.setName('fiosalas');
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('name  shorter than 6 characters long', () => {
            RegisterPage.setName('fio s');
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('Name correctly formated', () => {
            RegisterPage.setName('Fiorella Salas');
            expect(RegisterPage.errorName).toHaveText("");
            browser.pause(2000);
        });
         /*MAIL*/
         it('empty mail', () => {
            RegisterPage.setEmail();
            expect(RegisterPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email no @', () => {
            RegisterPage.setEmail('fiogmail.com');
            expect(RegisterPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('corerctly formated email', () => {
            RegisterPage.setEmail('fiorella2994s@gmail.com');
            expect(RegisterPage.errorEmail).toHaveText("");
            browser.pause(2000);
        });
        /*FIRST PASSWORD*/
        it('First password empty', () => {
            RegisterPage.setFirstPassword();
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: less than 8 characters', () => {
            RegisterPage.setFirstPassword('always');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: only letters', () => {
            RegisterPage.setFirstPassword('aaaaaaaa');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: only numbers', () => {
            RegisterPage.setFirstPassword('11112222');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password with a valid format', () => {
            RegisterPage.setFirstPassword('Always12');
            expect(RegisterPage.errorFirstPassword).toHaveText("");
            browser.pause(2000);
        });
        /*SECOND PASSWORD*/
        it('Second password empty', () => {
            RegisterPage.setSecondPassword();
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: less than 8 characters', () => {
            RegisterPage.setSecondPassword('a12');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only letters', () => {
            RegisterPage.setSecondPassword('aaaawwws');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only numbers', () => {
            RegisterPage.setSecondPassword('1232222');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password correctly formated but not matching the first password', () => {
            RegisterPage.setSecondPassword('Always122');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password correctly formated and matching the first password', () => {
            RegisterPage.setSecondPassword('Always12');
            expect(RegisterPage.errorSecondPassword).toHaveText("");
            browser.pause(2000);
        });
        it('After inserting all the valid credentials on all four fields, click the submit'+
        'button and test if they show on the validations section below', () => {
            RegisterPage.testRegister('fiorella salas', 'fiorella2994s@gmail', 'Always12', 'Always12');
            expect(RegisterPage.listOfResults).toHaveTextContaining([
                "Every validation has passed", 
                "The Name is: fiorella salas",
                "The e-mail is: fiorella2994s@gmail.com",
                "The first is: Always12",
                "The second password is: Always12"
            ]);
            browser.pause(2000);
        });
        it('Press the reset fields button and check if the fields are cleaned up', () => {
            RegisterPage.btnReset.click();
            expect(browser.refresh());
            expect(browser).toHaveUrl(
                'https://fiorella94.github.io/week11Automation/public/register.html'
            );
            expect(browser).toHaveTitle("Register");
            browser.pause(2000);
        });
    });
});