var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

describe('BitBoard', function() {

    // TODO: should define certain hooks for every tests to run
    describe('#initBitBoard()', function() {
        var assert = require('assert');

        it('should throw error for only one argument', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                try {
                    var b = mBitBoard.initBitBoard(2);
                }
                catch (e) {
                    assert.equal(e.message, "function initBitBoard called with 1 arguments, but it expects 2 arguments");
                }
            });
        });

        it('should throw error for more than 2 arguments', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                try {
                    var b = mBitBoard.initBitBoard(2, 4, 4);
                }
                catch (e) {
                    assert.equal(e.message, "function initBitBoard called with 3 arguments, but it expects 2 arguments");
                }
            });
        });

        it('should throw error for non-number first argument', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                try {
                    var b = mBitBoard.initBitBoard('4', 4);
                }
                catch (e) {
                    assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
                }
            });
        });

        it('should throw error for non-integer first argument', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                try {
                    var b = mBitBoard.initBitBoard(4.5, 4);
                }
                catch (e) {
                    assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
                }
            });
        });

        it('should throw error for negative integer first argument', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                try {
                    var b = mBitBoard.initBitBoard(-4, 4);
                }
                catch (e) {
                    assert.equal(e.message, "function initBitBoard expects the first argument to be an integer bigger than 0");
                }
            });
        });

        it('should print BitBoard content', function() {
            requirejs(['../BitBoard'], function (mBitBoard) {
                mBitBoard.printBoard(mBitBoard.initBitBoard(4, 4));
            });
        });
    });
});

// var b1 = mBitBoard.initBitBoard(8, 8);
// mBitBoard.printBoard(b1.bitboard);
//
// console.log("BOARD UPDATE player 0 position to (3,0):");
// b1.setPosition(0, 3, 0);
// mBitBoard.printBoard(b1.bitboard);
// console.log("BOARD UPDATE player 0 position to (4,0):");
// b1.setPosition(0, 4, 0);
// mBitBoard.printBoard(b1.bitboard);
// console.log("BOARD UPDATE player 1 position to (1,1):");
// b1.setPosition(1, 1, 1);
// mBitBoard.printBoard(b1.bitboard);
// console.log("BOARD UPDATE player 1 position to (1,5):");
// b1.setPosition(1, 1, 5);
// mBitBoard.printBoard(b1.bitboard);
//
// console.log("ANOTHER BOARD INITIALIZED:");
// var b2 = mBitBoard.initBitBoard(8, 8);
// mBitBoard.printBoard(b2.bitboard);
// console.log("PREVIOUS BOARD:");
// mBitBoard.printBoard(b1.bitboard);
// console.log("BOARD UPDATE player 1 position to (1,5):");
// b2.setPosition(1, 1, 5);
// mBitBoard.printBoard(b2.bitboard);
// console.log("player 1 position should be (1,5):");
// var pos = b2.getPosition(1);
// console.assert(pos.x==1 && pos.y==5);
// console.log(pos);
