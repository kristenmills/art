'use strict';

require('../bower_components/angular/angular');
require('../bower_components/ui-router/release/angular-ui-router');

angular
  .module('art', ['ui.router'])
  .config(config);

function config($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('art', {
      url: '',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('art.index', {
      url: '/',
      templateUrl: '/templates/home/index'
    });
}
