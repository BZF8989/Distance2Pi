let csvToJson = require('convert-csv-to-json');
const fs = require('fs');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("worldcities.csv");


// let fileString = "[";
//
// json.forEach( (object) => {
//     fileString.concat(object.toString());
//     console.log(fileString);
//     //fileString += ", ";
// });
//
// fileString += ']';

//console.log(fileString);
var util = require('util');
fs.writeFileSync('./data.json', util.inspect(json) , 'utf-8');
