(function()
{
  'use strict';

  function methodsService()
  {
    this.getMethod = function(methodName)
    {
      switch (methodName)
      {
        case 'david-cowans':
          return  {
                    problem: '',
                    product: '',
                    differentiation: '',
                    pedigree: '',

                    template: function() {
                      return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
                    }
                  };
        case 'elevator-pitch':
          return  {
                    customer: '',
                    need: '',
                    product: '',
                    benefit: '',
                    competition: '',
                    differentiator: '',

                    template: function() {
                      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' that ' + this.benefit + ' unlike ' + this.competition + ' ' + this.differentiator;
                    }
                  };
        case 'geoff-moores':
          return  {
                    customer: '',
                    need: '',
                    product: '',
                    category: '',
                    benefit: '',

                    template: function() {
                      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is ' + this.category + ' that ' + this.benefit;
                    }
                  };
        case 'minto-pyramid':
          return  {
                    situation: '',
                    issue: '',
                    question: '',
                    answer: '',

                    template: function() {
                      return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
                    }
                  };
        case 'steve-blanks':
          return  {
                    customer: '',
                    product: '',
                    objective: '',

                    template: function() {
                      return 'We help ' + this.customer + ' do ' + this.objective + ' doing ' + this.product;
                    }
                  };
      }
    };
  }

  angular
    .module('uvpBuilderWeb')
    .service('MethodsService', methodsService);
})();
