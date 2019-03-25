const expect = require('chai').expect;

const { isAuthorized } = require('../../api/middlewares/authorization');

describe('isAuthorized Test', function () {
  describe('isAuthorized() function', function () {
    it('Should error out if no ip logged ', function (done) {
      isAuthorized
      done();
    });
  })
});