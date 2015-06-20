var Quote = require('../../api/models/Quotes'),
    sinon = require('sinon'),
    assert = require('assert'),
    sails = require('sails'),
    request = require('request'),
    async = require('async');


describe('quotes CRUD', function() {

    this.timeout(30000);

    before(function(done) {
        // Lift Sails and start the server
        async.parallel({
            // Set up a listener for grunt finish
            listenForGrunt: function(cb) {
                sails.on('hook:grunt:done', cb);
            },
            // Lift sails
            liftSails: function(cb) {
                sails.lift({
                    log: {
                        level: 'error'
                    },
                }, cb);
            }
        }, done);
    });

    after(function(done) {
        sails.lower(done);
    });

    it('creates a quote', function(done) {
        request({
                method: 'POST',
                url: 'http://localhost:' + process.env.PORT + '/quotes',
                data: {
                    text: "test quote",
                    author: 'test author'
                }
            },
            function(err, data) {
                assert.ok(data);
                done(err);
            });
    });

});