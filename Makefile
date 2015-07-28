RUN=testBoard.js
SRC=BitBoard.js testBoard.js

.PHONY: test lint docs clean

test:
	node $(RUN)

lint:
	jshint $(SRC)

docs:
	jsdoc $(SRC)

clean:
	rm -rf out/
