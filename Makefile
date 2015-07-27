SRC=Board.js testBoard.js

.PHONY: lint docs clean

lint:
	jshint $(SRC)

docs:
	jsdoc $(SRC)

clean:
	rm -rf out/
