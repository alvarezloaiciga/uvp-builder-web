'use strict';
describe('methods.service', function () {

  var MethodService, $httpBackend, $scope;
  beforeEach(module('uvpBuilderWeb.methods'));
  beforeEach(inject(function (_MethodService_, _$httpBackend_) {
    MethodService = _MethodService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Load methods', function () {
    $httpBackend.when('GET', '/app/methods/methods.json')
    .respond({'methods':[{'name': 'someName1'},{'name': 'someName2'}]});

    it('Loads methods.json into the service', function () {
      expect(MethodService.methods.length).toEqual(2);
    });

  });

});