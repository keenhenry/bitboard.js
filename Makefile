.PHONY: test lint docs clean

SRC=BitBoard.js
TESTS=test/*.js

test:
	mocha $(TESTS)

lint:
	jshint $(SRC)

docs:
	jsdoc $(SRC)

clean:
	rm -rf *.log out/
