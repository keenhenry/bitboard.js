SRC=Board.js

.PHONY: lint
lint:
	jshint $(SRC)
