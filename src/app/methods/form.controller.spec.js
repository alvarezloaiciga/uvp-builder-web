(function() {
    'use strict';

    describe("form.controller", FormControllerSpec);

    function FormControllerSpec() {
      var MethodsService, createController;

      beforeEach(function(){
        module('uvpBuilderWeb.methods');

        // Pseudo service to inject into the controller
        module(function($provide){
          $provide.factory('MethodsService', function(){

            return {
              methods: [{
                index: 0,
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
              }],
              getMethod: getMethod
            };

            function getMethod(){
              return this.methods[0];
            }
          });
        });

        inject(function($controller,_MethodsService_) {
          MethodsService = _MethodsService_;
          createController = function() {
            return $controller('FormController', {
              MethodsService: _MethodsService_
            });
          };
        });
      });

      describe("FormController.display", function () {
        it("The function should be defined", function () {
          var controller = createController();
          var targetFunction = controller.display;
          expect(targetFunction).toBeDefined();
        });

        it("should set the showUVP value to true ", function () {
          var controller = createController();
          controller.display();
          expect(controller.showUVP).toBeTruthy();
        });
      });

      describe("FormController.back", function () {
        it("The function should be defined", function () {
          var controller = createController();
          var targetFunction = controller.back;
          expect(targetFunction).toBeDefined();
        });

        it("should set the showUVP value to false ", function () {
          var controller = createController();
          controller.back();
          expect(controller.showUVP).toBeFalsy();
        });
      });

      describe('FormController.getUVPFromTemplate',function() {
        it("The function should be defined", function () {
          var controller = createController();
          var targetFunction = controller.getUVPFromTemplate;
          expect(targetFunction).toBeDefined();
        });

        it("should return a message based on its template", function () {
          var controller = createController();
          var UVP = controller.getUVPFromTemplate();
          var message = "Our Product is the only alternative ";
          expect(UVP).toBe(message);
        });
      });

      describe("FormController.methodIsLast", function () {
        it("The function should be defined", function () {
          var controller = createController();
          var targetFunction = controller.isLastMethod;
          expect(targetFunction).toBeDefined();
        });

        it("Should check if the element is the last one based on its index", function () {
          var controller = createController();
          var targetResult = controller.isLastMethod();
          expect(targetResult).toBeTruthy();
        });
      });


    }
})();
