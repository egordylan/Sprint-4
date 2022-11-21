const { Search } = require('../pageobjects/search.po.js');


describe('Custom command: Shoping card flow behalf of login user', async function () {
    before('Open main page', async function () {
        await Search.header.openPage();
        
        // Add browser Custom Command - browser.getBrowserVersion() - what will return the browser version
        await browser.addCommand('getBrowserVersion', async function () {
            return ({brovserVersion: `${browser.capabilities.browserName}: ${browser.capabilities.browserVersion}`});
        });


        await browser.addCommand('hideElement', async function () {
            //Add element Custom Command - $().hideElement() what will hide the element using element CSS opacity attribute
            // `this` refers to the `browser` scopez
            await browser.execute((element) => {
                element.style.setProperty('opacity', 0)
            }, this)}, true);

    });

    context('execute custom commands: ', async function () {
        it(`should return the browser version`, async function () {
            const version = await browser.getBrowserVersion();
            console.log("RESULT ::: ", version);
        });

        it(`should hide element`, async function () {
            const element = await $('.slider');
            await element.hideElement();
            await expect(element).not.toBeDisplayed();
        });
    });

});


// npx wdio run wdio.conf-local.js --spec custom-command.js
// npx wdio run wdio.conf.js --spec custom-command.js