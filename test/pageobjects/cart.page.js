const Page = require('./page');

class CartPage extends Page{
    get removeBtn(){
        return $('#remove-sauce-labs-backpack')
    }
    get checkoutBtn(){
        return $('#checkout')
    }
}

module.exports  = new CartPage();



