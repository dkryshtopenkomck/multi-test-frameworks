start:
	$(MAKE) -C cypress-api start
	$(MAKE) -C testcafe start
	$(MAKE) -C k6-loading start

clean:
	$(MAKE) -C cypress-api clean
	$(MAKE) -C testcafe clean
	$(MAKE) -C k6-loading clean

install:
	$(MAKE) -C cypress-api install
	$(MAKE) -C testcafe install
	$(MAKE) -C k6-loading install
