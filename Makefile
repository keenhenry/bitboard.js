SRC=Board.js test.js

.PHONY: lint docs clean

lint:
	jshint $(SRC)

docs:
	jsdoc $(SRC)

clean:
	rm -rf out/
