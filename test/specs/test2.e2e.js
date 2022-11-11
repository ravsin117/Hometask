
const newWindowPage = require('../pageobjects/newWindow.page');


describe('Test suit 1' ,()=>{
    it('verify opening a new window',async()=>{
        await browser.url('https://the-internet.herokuapp.com/windows');
        let clickbtn = await $('a[href="/windows/new"]');
        await clickbtn.click()    
        await browser.switchWindow('https://the-internet.herokuapp.com/windows/new')
        expect(await newWindowPage.windowText.getText()).toHaveTextContaining('New Window');
    })
})