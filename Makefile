# @Author: Andreee Ray <develdoe>
# @Date:   2017-04-11T12:51:08+02:00
# @Email:  me@andreeray.se
# @Filename: Makefile
# @Last modified by:   develdoe
# @Last modified time: 2017-04-11T13:04:53+02:00



test:
	./node_modules/.bin/mocha --reporter spec

.PHONY: test
