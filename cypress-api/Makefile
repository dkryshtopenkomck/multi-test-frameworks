start:
	npm test
	#docker-compose up

start-docker:
	docker-compose run --rm --build cypress-api

clean:
	rm -rf cypress/screenshots cypress/videos cypress/downloads

install:
	rm -rf node_modules
	npm ci

lint:
	npm run lint
