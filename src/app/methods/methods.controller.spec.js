'use strict';

describe('methods.controller', function(){

  var controller, MethodsService, scope, state;

  var CURRENT_STATE = { name: 'someMethod' },
    CURRENT_METHOD = function(){ this.name = CURRENT_STATE.name; },
    METHODS = {};

  METHODS[CURRENT_STATE.name] = CURRENT_METHOD;

  beforeEach(module('uvpBuilderWeb.methods'));

  beforeEach(inject(function(_MethodsService_, $controller, $state, $rootScope){
    MethodsService = _MethodsService_;
    MethodsService.methods = METHODS;
    state = $state;
    state.current = CURRENT_STATE;
    scope = $rootScope.$new();
    controller = $controller('MethodsController', {
      $scope: scope
    });
  }));

  it('defines the user background', function() {
    expect(scope.userBackground).toBeDefined();
  });

  it('gets the current method\'s name', function(){
    expect(controller.methodName).toEqual(CURRENT_STATE.name);
  });

  it('defines the current method', function () {
    expect(controller.method).toEqual(new CURRENT_METHOD());
  });

  describe('display', function() {
    it('sets the value of showUVP to true', function () {
      controller.display();
      expect(controller.showUVP).toBeTruthy();
    });
  });

  describe('back', function() {
    it('sets the value of showUVP to false', function () {
      controller.showUVP = true;
      controller.back();
      expect(controller.showUVP).toBeFalsy();
    });
  });
});
