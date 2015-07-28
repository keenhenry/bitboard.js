/**
 * Provides BitBoard module for writing board games.
 * An example of an 8x8 Board is depicted as follows: 
 *
 *             01234567  (X)
 *            0........
 *            1........
 *            2........
 *            3........
 *            4........
 *            5........
 *            6........
 *            7........
 *            
 *           (Y)
 *
 * @module BitBoard
 */ 

define(function() {
    'use strict';

    // TODO: should i make these variables internal
    //       or per copy for each BitBoard object?
    // internal private variables for BitBoard class
    var width;  // should be internal and constant and only need one copy -> make it static
    var height; // make it static

    var numPlayers; // make it static (should be a constant once initialized)

    var players;  // should be per BitBoard instance -> make it instance variable
    var bitboard; // should be per BitBoard instance -> make it instance variable

    /**
     * Represents a BitBoard: https://chessprogramming.wikispaces.com/Bitboards
     *
     * @constructor
     * @param {number} np - number of players for this bitboard
     * @param {number} w - width of this bitboard
     * @param {number} h - height this bitboard
     */
    function BitBoard (np, w, h) {
        width      = w;
        height     = h;
        bitboard   = new Uint8Array(new ArrayBuffer(width * height / 8));

        numPlayers = np;
        players    = [];
    }

    /** @function setPosition
     * Sets a player's position on board.
     * 
     * @param {number} player - the player for which the postion to be set
     * @param {number} x - the x coordinate of the postion
     * @param {number} y - the y coordinate of the postion
     */
    BitBoard.prototype.setPosition = function (player, x, y) {
        bitboard[y]      = 128 >>> x;
        players [player] = y*height + x;
    };

    /** @function getPosition
     * Gets a player's position on board.
     * 
     * @param {number} player - the player for which the postion to be retrieved
     * @returns {Object} - the x and y coordinate in Object literal format
     */
    BitBoard.prototype.getPosition = function (player) {
        var pos = players[player];

        return {
            x: pos % 8,
            y: pos / 8
        };
    };

    // TODO: create a function to return a copy of current BitBoard object!
    BitBoard.prototype.getBoardCopy = function () {
    };

    // TODO: a debugging method to print current board
    BitBoard.prototype.printBoard = function () {
        console.log("I am alive!!!");
    };

    // return initBitBoard function!
    return {
        initBitBoard: function(np, w, h) {
            var board = new BitBoard(np, w, h);

            for (var i = 0; i < height; ++i) {
                bitboard[i] = 0;
            }

            return board;
        }
    };
});
