const fs = require('fs');
const Papa = require('papaparse');
const path = require('path');
const csvFilePath = path.join(__dirname, '../../data/trackings.csv')

const readCSV = async (filePath) => {
  const csvFile = fs.readFileSync(filePath)
  const csvData = csvFile.toString()  
  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: results => {
        console.log('Complete', results.data.length, 'records.'); 
        resolve(results.data);
      }
    });
  });
};

exports.seed = async (knex) => {
  let parsedData = await readCSV(csvFilePath); 
  return knex('tracking').del()
  .then(function () {
    return knex('tracking').insert(parsedData);
  });
};