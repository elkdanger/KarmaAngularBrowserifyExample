
var angular = require('angular');

var app = angular.module('example', [])
	.controller('ExampleController', require('./controller'));

module.exports = app;
