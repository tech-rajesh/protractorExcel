const { browser, element, by } = require('protractor')
var excel = require('./ExcelReaderUtility.js')
describe('Read XL Data', ()=>{

    browser.get('https://angularjs.org/')
    var TestData = excel.read_from_excel('userDetails', 'D:/Training/Github_Project_Setup/protractorExcel/TestData.xlsx')
    TestData.forEach(function(data){
        
        it('Parametrize test with different user', function(){
            
            element(by.model('todoList.todoText')).sendKeys(data.userName)
            element(by.buttonText('add')).click();
            browser.sleep(2000)
            console.log(data.userName);

        })
          

    })
  

})