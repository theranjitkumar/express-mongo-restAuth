const expect = require('chai').expect;

const { hello } = require('../../../api/modules/users/users.controller');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('getAll users', function() {
    describe('getAllUsers() function', function() {
        it('Should error if get all users not fetched ', function() {
            hello(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});
