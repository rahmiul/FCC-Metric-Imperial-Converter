/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '3.2kg';
      assert.equal(convertHandler.getNum(input),3.2)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '5/6gal'
      assert.equal(convertHandler.getNum(input), 5/6)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '2.5/6gal'
      assert.equal(convertHandler.getNum(input), 2.5/6)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '2//5kg'
      assert.equal(convertHandler.getNum(input), 'invalid number')
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'mi'
      assert.equal(convertHandler.getNum(input), 1)
      done();
    }); 
    
  });
  
  
  });