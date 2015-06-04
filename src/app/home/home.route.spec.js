'use strict';

describe('home.route', function(){

  var $location, $state, $scope, $injector;

  var views = {
    home: 'app/home/home.html'
  };

  beforeEach(module('uvpBuilderWeb.home'));

  beforeEach(inject(function(_$location_, _$rootScope_, _$state_, _$injector_, $templateCache) {
    $state = _$state_;
    $scope = _$rootScope_;
    $location = _$location_;
    $injector = _$injector_;

    $templateCache.put(views.home, '');
  }));

  it('maps state home to url #/', function(){
    expect($state.href('home', {})).toEqual('#/');
  });

  it('maps #/ route to home template', function(){
    expect($state.get('home').templateUrl).toEqual(views.home);
  });

  it('maps any undefined route to url / and state home', function(){
    $location.url('/someInvalidURL');
    $scope.$digest();
    expect($state.current.name).toEqual('home');
    expect($location.url()).toEqual('/');
  });
});
