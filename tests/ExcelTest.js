var XLSX = require('xlsx')

describe('Read XL Data', ()=>{


xit('Read Cell value', function(){

var workbook = XLSX.readFile('D:/Training/Github_Project_Setup/protractorExcel/TestData.xlsx')
var worksheet = workbook.Sheets['sampleData']
console.log('The value from excel ' + worksheet['A2'].v);

})

it('Convert data into JSON format', function(){
    //Reference util URL: https://www.npmjs.com/package/xlsx
    var workbook = XLSX.readFile('D:/Training/Github_Project_Setup/protractorExcel/TestData.xlsx')
    var worksheet = workbook.Sheets['sampleData']
    
    let data = XLSX.utils.sheet_to_json(worksheet)
    //console.log(data);
    data.forEach(function(temp_var){
        //Complete content into JSON file
        console.log('First value are: ' +temp_var.number1);
        
    })
    
    })



})