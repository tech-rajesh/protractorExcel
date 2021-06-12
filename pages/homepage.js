let homepage = function(){


    let firstNumber = element(by.css('input[ng-model="first"]'));
    let secondNumber = element(by.css('input[ng-model="second"]'))
    let goButton = element(by.css('button'));

    this.getAppURL = function(url){
        browser.get(url)
    };


    this.enterFirstNumber = function(firstno){

        firstNumber.sendKeys(firstno);
    };


    this.enterSecondNumber = function(secondno){

        secondNumber.sendKeys(secondno);
    };

    this.clickGo = function(){

        goButton.click;
    };



};

module.exports = new homepage();