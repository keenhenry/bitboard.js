var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['BitBoard'], function (mBitBoard) {

    console.log("BOARD INITIALIZED:");
    var b1 = mBitBoard.initBitBoard(2, 8, 8);
    mBitBoard.printBoard(b1.bitboard);

    console.log("BOARD UPDATE player 0 position to (3,0):");
    b1.setPosition(0, 3, 0);
    mBitBoard.printBoard(b1.bitboard);
    console.log("BOARD UPDATE player 0 position to (4,0):");
    b1.setPosition(0, 4, 0);
    mBitBoard.printBoard(b1.bitboard);
    console.log("BOARD UPDATE player 1 position to (1,1):");
    b1.setPosition(1, 1, 1);
    mBitBoard.printBoard(b1.bitboard);
    console.log("BOARD UPDATE player 1 position to (1,5):");
    b1.setPosition(1, 1, 5);
    mBitBoard.printBoard(b1.bitboard);

    console.log("ANOTHER BOARD INITIALIZED:");
    var b2 = mBitBoard.initBitBoard(2, 8, 8);
    mBitBoard.printBoard(b2.bitboard);
    console.log("PREVIOUS BOARD:");
    mBitBoard.printBoard(b1.bitboard);
    console.log("BOARD UPDATE player 1 position to (1,5):");
    b2.setPosition(1, 1, 5);
    mBitBoard.printBoard(b2.bitboard);
    console.log("player 1 position should be (1,5):");
    var pos = b2.getPosition(1);
    console.assert(pos.x==1 && pos.y==5);
    console.log(pos);

});
