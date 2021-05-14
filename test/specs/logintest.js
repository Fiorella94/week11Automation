const LoginPage = require('../pageobjects/login.page');

describe ('login section with two input fields and two buttons',  () => {    
    /*URLs to perform the test*/
    
    const urlRegister = 'https://fiorella94.github.io/week11Automation/public/register.html';
    const urlLogin = 'https://fiorella94.github.io/week11Automation/public/login.html';

    beforeAll("Open browser on the tested page", () => {
        browser.url(urlLogin);
      });

    // Email tests
    it('input with empty email', () => {
        LoginPage.setEmail()            
        expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
        browser.pause(2000)

    });
    it('input with email invalid without .com', () => {
        LoginPage.setEmail('fiorella@')            
        expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
        browser.pause(2000)

    });

    // Password tests
    it('empty password', () => {            
        LoginPage.setPassword()            
        expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
        browser.pause(2000);
    });
    
    it('wrongly formated password less than 8 characters', () => {            
            LoginPage.setPassword('ALWAYS1')
            expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
     });
    
    
     it('wrongly formated password no numbers just letters', () => {            
            LoginPage.setPassword('Always')
            expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
    })
    
   
    it('correctly formated password', () => {            
            LoginPage.setPassword('Always12')
            expect(LoginPage.errorPassword).toHaveText("");
            browser.pause(2000);
        
    });
   

    //  valid credentials
    it('input with valid credentials, click the Login'+
        'button and test if they show on the validations section below', () => {
            LoginPage.testLogin('seba20sa@gmail', 'abc123456')
            expect(LoginPage.listOfResults).toHaveTextContaining([                
                "The e-mail is: seba20sa@gmail.com",
                "Password is: abc123456",
            ]);
            browser.pause(2000);
        });
    });
