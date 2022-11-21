const { Search } = require('../pageobjects/search.po.js');
const { Data } = require('../data.js'); 


describe('Search in certain category', async function () {
    it(`should find items`, async function () {
        await Search.header.openPage();

        await Search.searchInCathegory(Data.cathegory, Data.searchValue);
        const array = (await Search.getSearchArray()).sort();
        console.log('ARRAY -----> ', array);
        await expect(array).toEqual(Data.testArray);
    });
});

// npx wdio run wdio.conf-local.js --spec search_in_certain_category_smoke_case.js
// npx wdio run wdio.conf.js --spec search_in_certain_category_smoke_case.js