start:
	$(MAKE) -C cypress-api start
	$(MAKE) -C testcafe start
	$(MAKE) -C playwright start
	$(MAKE) -C k6-loading start
	$(MAKE) -C puppeteer start

start-docker:
	$(MAKE) -C cypress-api start-docker
	$(MAKE) -C testcafe start-docker
	$(MAKE) -C playwright start-docker
	$(MAKE) -C k6-loading start-docker
	$(MAKE) -C puppeteer start-docker

clean:
	$(MAKE) -C cypress-api clean
	$(MAKE) -C testcafe clean
	$(MAKE) -C playwright clean
	$(MAKE) -C k6-loading clean
	$(MAKE) -C puppeteer clean

install:
	$(MAKE) -C cypress-api install
	$(MAKE) -C testcafe install
	$(MAKE) -C playwright install
	$(MAKE) -C k6-loading install
	$(MAKE) -C puppeteer install

lint:
	$(MAKE) -C cypress-api lint
	$(MAKE) -C testcafe lint
	$(MAKE) -C playwright lint
	$(MAKE) -C k6-loading lint
	$(MAKE) -C puppeteer lint
