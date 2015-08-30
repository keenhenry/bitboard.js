var requirejs = require('requirejs');
var chai      = require('chai');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    baseUrl: '.',
    nodeRequire: require
});

describe('BitBoard', function() {

    var module = requirejs('./bitboard.js'),
        assert = chai.assert,
        should = chai.should();

    // You can also load module asynchronously like the following:
    // before(function(done) {
    //     requirejs(['BitBoard'], function (mBitBoard) {
    //         module = mBitBoard;
    //         done();
    //     });
    // });

    describe('#initBitBoard()', function() {

        it('should throw error for only one argument', function() {
            try {
                module.initBitBoard(2);
            }
            catch (e) {
                assert.equal(e.message, "function initBitBoard called with 1 arguments, but it expects 2 arguments");
            }
        });

        it('should throw error for more than 2 arguments', function() {
            try {
                module.initBitBoard(2, 4, 4);
            }
            catch (e) {
                assert.equal(e.message, "function initBitBoard called with 3 arguments, but it expects 2 arguments");
            }
        });

        it('should throw error for non-number first argument', function() {
            try {
                module.initBitBoard('4', 4);
            }
            catch (e) {
                assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
            }
        });

        it('should throw error for non-integer first argument', function() {
            try {
                module.initBitBoard(4.5, 4);
            }
            catch (e) {
                assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
            }
        });

        it('should throw error for negative integer first argument', function() {
            try {
                module.initBitBoard(-4, 4);
            }
            catch (e) {
                assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
            }
        });
    });

    var b;
    before(function() {
        b = module.initBitBoard(8,8); // create a 8x8 board
    });

    describe('#setPosition', function() {

        it('should throw Error - no coordinates provided', function() {
            (function() {
                b.setPosition(0);
            }).should.throw();
        });

        it('should throw Error - coordinates out of bounds', function() {
            (function() {
                b.setPosition(0, 3, 8);
            }).should.throw();
        });

        it('should throw Error - coordinates out of bounds', function() {
            (function() {
                b.setPosition(0, -1, 2);
            }).should.throw();
        });

        it('positions should be set successfully', function() {
            assert.isTrue(b.setPosition(0, 1, 1), "player 0 is now at (1,1)");
            assert.isTrue(b.setPosition(0, 2, 3), "player 0 is now at (2,3)");
            assert.isTrue(b.setPosition(1, 3, 4), "player 1 is now at (3,4)");
            assert.isTrue(b.setPosition(2, 7, 7), "player 2 is now at (7,7)");
        });

    });

    describe('#getPosition', function() {

        it('should throw Error - player is undefined', function() {
            (function() {
                b.getPosition(3);
            }).should.throw();
        });

        it('should get positions as expected', function() {
            var pos0 = b.getPosition(0),
                pos1 = b.getPosition(1),
                pos2 = b.getPosition(2);

            assert.isTrue(pos0.x != 1 && pos0.y != 1, "coordinate of player 0 is not (1,1)");
            assert.isTrue(pos0.x == 2 && pos0.y == 3, "coordinate of player 0 is (2,3)");
            assert.isTrue(pos1.x == 3 && pos1.y == 4, "coordinate of player 1 is (3,4)");
            assert.isTrue(pos2.x == 7 && pos2.y == 7, "coordinate of player 2 is (7,7)");
        });

    });

    describe('#printBoard()', function() {
        it('should print BitBoard content', function() {
            module.printBoard(b);
        });
    });

    describe('#getBoardCopy', function() {
        var copy;

        before(function() {
            copy = b.getBoardCopy();
        });

        it('should get a copy', function() {
            assert.isTrue(b === b,    "BitBoard object should be equal to itself");
            assert.isTrue(b !== copy, "BitBoard object should not equal to its copy");
        });

        it('should have equal contents in the copied object ', function() {
            for (var i = 0; i < b.players.length; ++i)
                assert.isTrue(b.players[i] == copy.players[i], "players should be the same");

            for (var r = 0; r < b.bitboard.length; ++r)
                assert.isTrue(b.bitboard[r] == copy.bitboard[r], "board contents should be the same");
        });
    });
});
