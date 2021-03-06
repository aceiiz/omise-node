var chai   = require('chai');
var expect = chai.expect;
var config = require('./config');
var omise = require('../index')(config);
var testHelper = require('./testHelper');

describe('Omise', function() {
  describe('#Account', function() {
    it('should be able to retrieve an account', function(done) {
      testHelper.setupMock('account_retrieve');
      omise.account.retrieve(function(err, resp) {
        expect(resp.object, 'account');
        expect(resp.id, 'acct_123');
        expect(resp.email, 'test@omise.co');
        done(err);
      });
    });
  });
});
