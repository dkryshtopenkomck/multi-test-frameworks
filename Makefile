start:
	$(MAKE) -C cypress-api start
	$(MAKE) -C testcafe start
	$(MAKE) -C playwright start
	$(MAKE) -C k6-loading start

start-docker:
	$(MAKE) -C cypress-api start-docker
	$(MAKE) -C testcafe start-docker
	$(MAKE) -C playwright start-docker
	$(MAKE) -C k6-loading start-docker

clean:
	$(MAKE) -C cypress-api clean
	$(MAKE) -C testcafe clean
	$(MAKE) -C playwright clean
	$(MAKE) -C k6-loading clean

install:
	$(MAKE) -C cypress-api install
	$(MAKE) -C testcafe install
	$(MAKE) -C playwright install
	$(MAKE) -C k6-loading install
