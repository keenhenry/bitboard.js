var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['BitBoard'], function (mBitBoard) {
    var b = mBitBoard.initBitBoard(2, 8, 8);

    // print out board state to console
    console.log("BOARD B STATE:");
    b.setPosition(0, 3, 0);
    b.printBoard();

    console.log("BOARD A STATE:");
    var a = mBitBoard.initBitBoard(2, 8, 8);
    a.setPosition(0, 3, 5);
    a.setPosition(0, 4, 6);
    a.printBoard();

    console.log("BOARD B STATE:");
    b.printBoard();
    b.setPosition(0, 3, 0);
    b.printBoard();
});
