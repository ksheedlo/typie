.PHONY: all
all: dist/web/Typie.js dist/web/Typie.min.js dist/node/Typie.js dist/test/Typie.js

dist/web/Typie.js: src/Typie.ts src/web.suffix.js
	./node_modules/.bin/tsc --target ES5 --out $@.i $<
	cat $@.i src/web.suffix.js > $@
	rm $@.i

dist/web/Typie.min.js: dist/web/Typie.js
	./node_modules/.bin/uglifyjs $^ -o $@ -e

dist/node/Typie.js: src/Typie.ts src/node.suffix.js
	./node_modules/.bin/tsc --target ES5 --out $@.i $<
	cat $@.i src/node.suffix.js > $@
	rm $@.i

dist/test/Typie.js: src/Typie.ts test/Typie.ts
	./node_modules/.bin/tsc --target ES5 --out $@ $^

.PHONY: clean
clean:
	rm dist/web/Typie.js dist/web/Typie.min.js dist/test/Typie.js

.PHONY: test
test: dist/test/Typie.js
	mocha --ui bdd -s 10 --reporter spec dist/test/*.js

