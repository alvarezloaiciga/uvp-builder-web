(function() {
    'use strict';

    describe("form.controller", FormControllerSpec);

    function FormControllerSpec() {
      var MethodsService, controller;

      beforeEach(function(){
        module('uvpBuilderWeb.methods');

        module(function($provide){
          $provide.factory('MethodsService', function(){
            function getMethod(){
              return {
                index: 12,
                slug: "ZagFormat",
                name: "The Zag format",
                hasLabels: true,
                formFields: [
                  {
                    label: "Our",
                    placeholder: "product category or brand",
                    name: "category",
                    value: "Product"
                  },
                  {
                    label: "is the only",
                    placeholder: "best customer attribute",
                    name: "attribute",
                    value: "alternative"
                  }
                ],
                template: "Our $category is the only $attribute",
                example: "Our publisher network is the only one that helps digital journalists to create public interviews"
              }
            }

            return {
              getMethod: getMethod
            };
          });
        });

        inject(function (_MethodsService_, $controller) {
          MethodsService = _MethodsService_;
          controller = $controller('FormController', {
              MethodsService: _MethodsService_
          });
        });
      });

      describe("FormController.display", function () {
        it("should set the showUVP value to true ", function () {
          controller.display();
          expect(controller.showUVP).toBeTruthy();
        });
      });

      describe("FormController.back", function () {
        it("should set the showUVP value to false ", function () {
          controller.back();
          expect(controller.showUVP).toBeFalsy();
        });
      });

      describe('FormController.getUVPFromTemplate',function() {
        it("should return a message based on its template", function () {
          var UVP = controller.getUVPFromTemplate();
          var message = "Our Product is the only alternative ";
          expect(UVP).toBe(message);
        });
      });


    }
})();
