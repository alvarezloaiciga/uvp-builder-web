'use strict';

describe('methods.controller', function(){

  var controller, MethodsService, scope, state, compile;

  beforeEach(module('uvpBuilderWeb.methods'));

  beforeEach(inject(function(_MethodsService_, $controller, $state, $rootScope, $compile){
    MethodsService = _MethodsService_;
    MethodsService.methods = { someMethod: function(){} };
    state = $state;
    state.current = { name: 'someMethod' };
    scope = $rootScope.$new();
    controller = $controller('MethodsController', {
      $scope: scope
    });
    compile = $compile;
  }));

  it('should define the user backgroun', function() {
    expect(scope.userBackground).toBeDefined();
  });

  it('should get the current method\'s name', function(){
    expect(controller.methodName).toBeDefined();
  });

  it('should define the current method', function () {
    expect(controller.method).toBeDefined();
  });

  describe('display', function() {
    it('should set the value of showUVP to true', function () {
      controller.display();
      expect(controller.showUVP).toBeTruthy();
    });
  });

  describe('back', function() {
    it('should set the value of showUVP to false', function () {
      controller.showUVP = true;
      controller.back();
      expect(controller.showUVP).toBeFalsy();
    });
  });
});
