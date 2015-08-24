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
    vm.method = MethodsService.getMethod($stateParams.slug);
    vm.getUVPFromTemplate = getUVPFromTemplate;
    vm.isLastMethod = isLastMethod;

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }

    function getUVPFromTemplate(){
      var fields = vm.method.formFields;
      var templateWords = vm.method.template.split(" ");
      return buildUVPFromFieldsAndTemplate(fields, templateWords);
    }

    function getMethodsLength() {
      return MethodsService.methods.length;
    }

    function getMethodIndex() {
      return vm.method.index + 1;
    }

    function isLastMethod() {
      return getMethodsLength() === getMethodIndex() ;
    }

    function buildUVPFromFieldsAndTemplate(fields, template) {
      var UVPText = "";
      for (var i = 0; i < template.length; i++) {
        var currentTemplateWord = template[i];
        UVPText += replaceIfReplaceable(fields, currentTemplateWord);
      }
      return UVPText;
    }

    function replaceIfReplaceable(fields, currentTemplateWord) {
      return isReplaceable(currentTemplateWord) ?
                getFieldText(fields, currentTemplateWord)
                : (currentTemplateWord + " ");
    }

    function getFieldText(fields, targetReplaceableWord) {
      var extraChars = "";
      for (var i = 0; i < fields.length; i++) {
        var currentField = fields[i];
        extraChars = checkForExtraChars(targetReplaceableWord);
        var targetName = getRigthWord(targetReplaceableWord);
        if (currentField.name === targetName)
          return buildWholeWord(currentField.value, extraChars);
      }
      return "";
    }

    function checkForExtraChars(word) {
      if (hasExtraChars(word))
        return getExtraChars(word);
      return "";
    }

    function buildWholeWord(word, extraChars) {
      return word + extraChars + " ";
    }

    function hasExtraChars(word) {
      return getExtraChars(word) !== null;
    }

    function isReplaceable(word) {
      return word.charAt(0) === '$';
    }

    function getRigthWord(word) {
      if (word.match(/\w+/))
        return word.match(/\w+/)[0];
      return "";
    }

    function getExtraChars(word) {
      return word.match(/\.+|\,|\;|\:/);
    }


  }
})();
