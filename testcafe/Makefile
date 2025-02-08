start:
	npm test

start-docker:
	npm run build
	docker-compose run --rm --build testcafe

clean:
	npm run clean

install:
	rm -rf node_modules
	npm ci

lint:
	npm run lint
	npm run format
