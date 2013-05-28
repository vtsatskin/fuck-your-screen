'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view', {templateUrl: 'partials/view', controller: ViewPage});
    $routeProvider.when('/add', {templateUrl: 'partials/add', controller: AddPage});
    
    $routeProvider.otherwise({redirectTo: '/view'});
    $locationProvider.html5Mode(true);
  }]);

$(function(){
  function sizeFrame() {
    $('iframe').css('height', ($(window).height() - $("#top").height()) + 'px');
  }

  // TODO: resize iframe on window load. Currently only works on resize...
  sizeFrame();
  $(window).bind('resize', sizeFrame);
});