const { Login } = require('../pageobjects/login.po.js');
const { Data } = require('../data.js'); 


describe('Login', async function () {
    it(`should not log in with invalid credentials`, async function () {
        await Login.openLogin();

        for (const data of Data.loginUnsucessfull) {
            await Login.login( {username: data.username, password: data.password} );
            expect (await browser.getTitle()).toBe('Account Login');

            const message = await Login.alertMessage;
            await expect(message).toBeDisplayed();
            await expect(message).toHaveTextContaining(data.message);
        }
        
    });

    it(`should log in with valid credentials`, async function () {
        await Login.openLogin();

        await Login.login( {username: Data.loginSucessfull.username, password: Data.loginSucessfull.password} );
        expect (await browser.getTitle()).toBe(Data.loginSucessfull.title);

        const name = await(await Login.accountName).getText();
        console.log(name)
        await expect(name).toEqual('Johny');

    });
    
});

// npx wdio run wdio.conf.js --spec login.js
// npx wdio run wdio.conf-local.js --spec login.js