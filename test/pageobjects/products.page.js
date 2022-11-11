const Page = require('./page');
const chai = require('chai');
const expect = chai.expect
class ProductPage extends Page{
    get prod1(){
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get prod2(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get cartBtn(){
        return $('.shopping_cart_link')
    }
    // get PricesOnProdPage(){
    //     return $$('.inventory_item_price');
    // }

    async addItemAndVerify(){
        await this.prod1.click();
        await this.prod2.click();
        const prices = await $$('.inventory_item_price');
        let prod1price = await prices[0].getText();
        let prod2price = await prices[1].getText();
        let priceBefore = Number(prod1price.substring(1)) + Number(prod2price.substring(1)) ;
        await this.cartBtn.click();
        const cartPrices = await $$('.inventory_item_price');
        let prod1priceAfter = await cartPrices[0].getText();
        let prod2priceAfter = await cartPrices[1].getText();
        let priceAfter = Number(prod1priceAfter.substring(1)) + Number(prod2priceAfter.substring(1)) ;
        expect(priceBefore).to.be.equal(priceAfter);
    }
    
      
}

module.exports = new ProductPage();