const Page = require('./page');

class LoginPage extends Page{
    
    get inputUserName(){
        return $('#user-name');
    }
    get inputPassword(){
        return $('#password');
    }
    get submitBtn(){
        return $('#login-button');
    }
    

    async login(username,password){
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.submitBtn.click();   
        
    }
}

module.exports = new LoginPage()