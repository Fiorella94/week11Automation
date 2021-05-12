const LoginPage = require('../pageobjects/login.page');

describe('Login section', () => {
    function browserPause() {
        browser.pause(4000);
    }
    
    const urlRegister = 'https://fiorella94.github.io/';
    const urlLogin = 'https://fiorella94.github.io/index2.html';

    // Email tests
    it('input with empty email', () => {
        browser.url(urlLogin);
        LoginPage.setEmail('', 'Fiorella');
        expect(LoginPage.errorDivEmail).toBe("Email field can't be empty");
        browserPause();
    });
    it('input with email invalid', () => {
        LoginPage.setEmail('fiorella@', 'Fiorella');
        expect(LoginPage.errorDivEmail).toBe('Email is invalid');
        browserPause();
    });

    // Password tests
    it('Password without lowercase letter', () => {
        LoginPage.setPassword('fiorella1994@hotmail.com', 'ALWAYS12');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('password without capital letter ', () => {
        LoginPage.setPassword('fiorellla1994@hotmail.com', 'always12');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('input without number', () => {
        LoginPage.setPassword('fiorella1994@hotmail.com', 'Always');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        LoginPage.setPassword('fiorella1994@hotmail.com', 'Alwa12');
        expect(LoginPage.errorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });

    //  valid credentials
    it('input with valid credentials', () => {
        LoginPage.setPassword('fiorella1994@hotmail.com', 'Always12');
        expect(LoginPage.errorDivEmail).toBe('');
        browserPause();
    });

    //Go to register link
    it('Button "Create account" to go to register', () => {
        LoginPage.buttonRegister();
        if (browser.getUrl() === urlRegister);
        else throw new Error('ERROR');
        browserPause();
    });
});