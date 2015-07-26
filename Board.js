/**
 * Provides generic Board module for writing board games.
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
 * @module Board
 */ 

var module = module || {};

module.Board = (function() {
    'use strict';

    // private variables for BitBoard class
    var width;
    var height;
    var bitboard;

    var numPlayers;
    var players;

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
     * 
     * @param {number} player - the player for which the postion to be set
     * @param {number} x - the x coordinate of the postion
     * @param {number} y - the y coordinate of the postion
     */
    BitBoard.prototype.setPosition = function (player, x, y) {
        bitboard[y]      = 128 >>> x;
        players [player] = y*height + x;
    };

    /** @function setPosition
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

    // BitBoard.prototype.getBoard    = function () {};

    // return a module/namespace!
    return {
        BitBoard: BitBoard
        // init: ;
    };
})();
