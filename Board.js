/**
 * Provides generic Board module for writing board games
 *
 * @module Board
 */ 

var module = module || {};

module.Board = function() {
    function(width, height){
        var buf_len = width * height / 8;
        var buffer  = new ArrayBuffer(buf_len);
        var board   = new UInt8Array(buffer);
    }
}
