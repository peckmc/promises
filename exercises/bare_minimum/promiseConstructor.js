/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  //return a call to the new promise constructor
  //pass in function that takes in two arguments - resolve, reject
  return new Promise(function (resolve, reject) {
    //make a call to fs.readfile, passing in path to the file, utf8
    fs.readFile(filePath, 'utf8', (err, data) => {
      //call data.split to create an array of file data
      //pull the first element from file data array
      if (err) {
        //call reject and pass an error message
        reject(err);
      } else {
        var lines = data.split(/\r?\n/);
        var firstLine = lines[0];
        //call resolve and pass the first element
        resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
