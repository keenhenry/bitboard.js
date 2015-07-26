/**
 * Provides generic Board module for writing board games
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
     * constructor function
     *
     */
    function BitBoard (np, w, h) {
        width      = w;
        height     = h;
        bitboard   = new Uint8Array(new ArrayBuffer(width * height / 8));

        numPlayers = np;
        players    = [];
    }

    // class methods for BitBoard class
    /**
     * 
     *
     *
     */
    // BitBoard.prototype.setPosition = function () {};
    // BitBoard.prototype.getPosition = function () {};
    // BitBoard.prototype.getBoard    = function () {};

    // return a module!
    return {
    };
})();
