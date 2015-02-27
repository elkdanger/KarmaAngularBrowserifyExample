
var expect = require('chai').expect;
require('angular');
require('angular-mocks');
var ctrl = require('../app/controller');

describe('ExampleController', function() {

	var $scope = {};
	var http;
	var httpBackend;

	beforeEach(inject(function(_$httpBackend_, $http) {
		http = $http;
		httpBackend = _$httpBackend_;

		httpBackend.when('GET', '/post').respond('hello');
	}));
		
	it('should have a message', function() {

		httpBackend.expectGET('/post');

		ctrl($scope, http);

		httpBackend.flush();

		expect($scope.message).to.equal('hello');
	});
});