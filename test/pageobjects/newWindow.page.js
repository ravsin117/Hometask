const Page = require('./page')

class NewWindow extends Page{
    get windowText(){
        return $('.example h3');
    }

}
module.exports = new NewWindow();
