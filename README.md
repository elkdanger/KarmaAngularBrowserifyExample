# Karma, Angular and Browserify example
An example project using Karma, Angular and Browserify, mainly to keep myself aprised of how to do basic tasks.

* It uses a gulp task to perform the bundling.
* Karma is set up to use Mocha and Chai for testing on the PhantomJS headless browser (although the Chrome launcher is also installed)
* Browserify is set up to bundle the app, and for Karma to bundle the testing files

## Install
    $ npm install
    $ gulp

## Testing
	$ npm test
