const expect = require('chai').expect;

const { isAuthorized } = require('../../api/middlewares/authorization');

// describe('isAuthorized Test', function() {
//     describe('isAuthorized() function', function() {
//         it('Should error if authorization failed ', function() {
//             isAuthorized(req, res, next);
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