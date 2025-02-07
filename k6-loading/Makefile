start:
	echo "k6-loading:start"
	#npm run build
	#docker-compose up

start-docker:
	npm run build
	docker-compose run --rm k6 run /scripts/get-200.test.js
	#docker-compose run --rm --build k6

clean:
	rm -rf dist

install:
	rm -rf node_modules
	npm ci
