const expect = require('chai').expect;

const { Logger } = require('../../api/middlewares/customLogger');

// describe('Custom Logger Test', function() {
//     describe('Logger() function', function() {
//         it('Should error out if no ip logged ', function() {
//             Logger(req, res, next);
//             expect(next);
//         });
//     })
// });

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});