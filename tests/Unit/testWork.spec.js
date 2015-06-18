var assert = require('assert');

describe('The test run', function () {
    it ('knows truth', function (done) {
        assert.ok(true, 'how is true not the truth! The test are not working');
        done();
    });
});