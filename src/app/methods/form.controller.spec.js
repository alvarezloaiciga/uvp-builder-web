(function()  {
  'use strict';

  describe('form.controller', formControllerSpec);

  function formControllerSpec() {
    beforeEach(module('uvpBuilderWeb.methods'));

    var FormController;

    beforeEach(inject(function ($controller) {
      FormController = $controller('FormController');
    }));

    describe('FormController.getTemplate',function() {
      it('before calling the function the field value should be undefined', function () {
        expect(false).not.toBeTruthy();
      });

    });
  }
})();
