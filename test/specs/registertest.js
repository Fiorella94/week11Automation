const RegisterPage = require('../pageobjects/register.page');

describe('Register section', () => {
    function browserPause() {
        browser.pause(4000);
    }
    const urlRegister = 'http://localhost:4000/register';
    const urlLogin = 'http://localhost:4000/login';

    // Email Tests
    it('input with empty email', () => {
        browser.url(urlRegister);
        RegisterPage.register('','fiorella','zzz','123');
        expect(RegisterPage.registerErrorDivMail).toBe("Email field can't be empty");
        browserPause();
    });
    it('input with email invalid', () => {
        RegisterPage.register('fiorella@', 'fiorella', 'fi', 'f');
        expect(RegisterPage.registerErrorDivMail).toBe('Email is invalid');
        browserPause();
    });
    // Name tests
    it('input name empty', () => {
        RegisterPage.register('fiorella1994@hotmail.com','','zzz','123');
        expect(RegisterPage.registerErrorDivName).toBe("Name field can't be empty");
        browserPause();
    });
    it('input name invalid', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiore', '1122', '1122');
        expect(RegisterPage.registerErrorDivName).toBe('Full name must contains a space');
        browserPause();
    });
     // Password tests
     it('password without capital letter ', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', '1122', '1122');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('password without capital letter ', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'A1122', 'A1122');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'Always1', 'Always1');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });
    it('password without number', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'Computer', 'Alberdil');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });
    //Password confirm tests
    it('input confirm password empty', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'Always12', '');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe("confirm password field can't be empty");
        browserPause();
    });
    it('input confirm password not match with password', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'Always12', 'alw12');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe('passwords must match');
        browserPause();
    });
     // register with valid credentials
     it('inputs with valid credentials', () => {
        RegisterPage.register('fiorella1994@hotmail.com', 'fiorella salas', 'Always12', 'Always12');
        expect(RegisterPage.registerErrorDivMail).toBe('');
        browserPause();
    });

    // Back To login
    it('Back to login link test', () => {
        RegisterPage.BackToLogin();
        expect(browser).toHaveUrl(urlLogin);
        browserPause();
    });
});