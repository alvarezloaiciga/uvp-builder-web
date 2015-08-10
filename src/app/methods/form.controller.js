(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .controller('FormController', FormController);

  FormController.$inject = ['MethodsService', '$stateParams'];

  function FormController(MethodsService, $stateParams) {
    var vm = this;
    vm.showUVP = false;
    vm.display = display;
    vm.back = back;
    vm.getTemplate = getTemplate;
    vm.method = MethodsService.getMethod($stateParams.slug);

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }

    function getTemplate(){
      var currentMethodTemplate = vm.method.template;
      var fields = vm.method.formFields;
      var templateWordsArray = currentMethodTemplate.split(" ");
      return parseTemplate(fields, templateWordsArray);
    }

    function parseTemplate(fields, wordsArray) {
      var uvpText = "";
      for (var i = 0; i < wordsArray.length; i++) {
        var currentWord = wordsArray[i];
        uvpText += isFieldSpot(currentWord)? getValueFromName(currentWord, fields) : currentWord;
        uvpText += " ";
      }
      return uvpText;
    }

    function getValueFromName(name, fields) {
      for (var i = 0; i < fields.length; i++) {
        var currentField = fields[i];
        if (isMatch(name, currentField.name)) {
          return fields[i].value;
        }
      }
      return "";
    }

    function isFieldSpot(word) {
      return word.charAt(0) === '$';
    }

    function isMatch(templateWord, fieldName) {
      var fieldNameBoundary = fieldName.length + 1;  // To get exactly the same word
      return removeDollarSign(templateWord, fieldNameBoundary) === fieldName;
    }

    function removeDollarSign(word, limit) {
      return word.slice(1,limit);
    }

  }
})();
