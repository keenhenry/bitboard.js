.PHONY: test lint docs uglify clean

SRC=bitboard.js
fbname=`basename "$(SRC)" .js`
TESTS=test/*.js

test:
	mocha $(TESTS)

lint:
	jshint $(SRC) $(TESTS)

docs:
	jsdoc $(SRC)

uglify:
	uglifyjs $(SRC) -o "$(fbname)".min.js -c -m

clean:
	rm -rf *.min.js *.log out/
