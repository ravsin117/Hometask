const LoginPage = require('../pageobjects/login2.page');
const productsPage = require('../pageobjects/products.page');
const cartPage = require('../pageobjects/cart.page');
const detailPage = require('../pageobjects/detail.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Test suit 1 ',function(){

    it('login to given url',async()=>{
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user','secret_sauce');
        await browser.pause(1000);
    })
    
    it('adds items in cart & navigate to cart',async()=>{
        await productsPage.addItemAndVerify()
        await browser.pause(1000);
    })
    it('remove item from cart',async()=>{
        await cartPage.removeBtn.click(); 
        await cartPage.checkoutBtn.click()     
    })
    it('enter details & verify final price',async()=>{
        await detailPage.enterDetails('Suyash','singh','2345')
        await detailPage.continueBtn.click();
    });

    it('verify inventory item price and checkout',async()=>{
        await inventoryPage.verifyprice();
        await inventoryPage.finishBtn.click();
    })
})