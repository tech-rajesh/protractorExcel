let homepage = require('../pages/homepage');
describe('demo calulator test', function () {


    it('addition test 1 digit number', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8')
        homepage.enterSecondNumber('9')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(4000)

    });


it('addition test 2 digit number', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('18')
        homepage.enterSecondNumber('19')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });

it('addition test 3 digit number', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('819')
        homepage.enterSecondNumber('919')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });

it('addition test 4 digit number', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('1819')
        homepage.enterSecondNumber('1919')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });


});