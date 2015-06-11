'use strict';

describe('methods.route', function(){

  var $location, $state, $scope;

  var views = {
    geoffMoores: 'app/methods/geoff-moores/geoff-moores.html',
    steveBlanks: 'app/methods/steve-blanks/steve-blanks.html',
    davidCowans: 'app/methods/david-cowans/david-cowans.html',
    elevatorPitch: 'app/methods/elevator-pitch/elevator-pitch.html',
    mintoPyramid: 'app/methods/minto-pyramid/minto-pyramid.html',
    clayChristensen: 'app/methods/clay-christensen/clay-christensen.html',
    erickSinksSuperlative: 'app/methods/eric-sinks-superlative/eric-sinks-superlative.html',
    erickSinksLabel: 'app/methods/eric-sinks-label/eric-sinks-label.html',
    simonSineks: 'app/methods/simon-sineks/simon-sineks.html',
    zagFormat: 'app/methods/zag-format/zag-format.html',
    justWriteIt: 'app/methods/just-write-it/just-write-it.html',
    theQuestion: 'app/methods/the-question/the-question.html',
    daveMcClures: 'app/methods/dave-mcclures/dave-mcclures.html',
    venturehacks: 'app/methods/venture-hacks/venture-hacks.html',
    vlaskovitsAndCoopers: 'app/methods/vlaskovits-and-coopers/vlaskovits-and-coopers.html',
    threeWords: 'app/methods/3-words/3-words.html'
  };

  beforeEach(module('uvpBuilderWeb.methods'));

  beforeEach(inject(function(_$location_, _$rootScope_, _$state_, $templateCache) {
    $state = _$state_;
    $scope = _$rootScope_;
    $location = _$location_;

    $templateCache.put(views.geoffMoores, '');
    $templateCache.put(views.steveBlanks, '');
    $templateCache.put(views.davidCowans, '');
    $templateCache.put(views.elevatorPitch, '');
    $templateCache.put(views.mintoPyramid, '');
    $templateCache.put(views.clayChristensen, '');
    $templateCache.put(views.erickSinksSuperlative, '');
    $templateCache.put(views.erickSinksLabel, '');
    $templateCache.put(views.simonSineks, '');
    $templateCache.put(views.zagFormat, '');
    $templateCache.put(views.justWriteIt, '');
    $templateCache.put(views.theQuestion, '');
    $templateCache.put(views.daveMcClures, '');
    $templateCache.put(views.venturehacks, '');
    $templateCache.put(views.vlaskovitsAndCoopers, '');
    $templateCache.put(views.threeWords, '');
  }));

  it('maps state GeoffMoores to url #/method/geoff-moores', function(){
    expect($state.href('GeoffMoores', {})).toEqual('#/method/geoff-moores');
  });

  it('maps state SteveBlanks to url #/method/steve-blanks', function(){
    expect($state.href('SteveBlanks', {})).toEqual('#/method/steve-blanks');
  });

  it('maps state DavidCowans to url #/method/david-cowans', function(){
    expect($state.href('DavidCowans', {})).toEqual('#/method/david-cowans');
  });

  it('maps state ElevatorPitch to url #/method/elevator-pitch', function(){
    expect($state.href('ElevatorPitch', {})).toEqual('#/method/elevator-pitch');
  });

  it('maps state MintoPyramid to url #/method/minto-pyramid', function(){
    expect($state.href('MintoPyramid', {})).toEqual('#/method/minto-pyramid');
  });

  it('maps state ClayChristensen to url #/method/clay-christensen', function(){
    expect($state.href('ClayChristensen', {})).toEqual('#/method/clay-christensen');
  });

  it('maps state EricSinksSuperlative to url #/method/eric-sinks-superlative', function(){
    expect($state.href('EricSinksSuperlative', {})).toEqual('#/method/eric-sinks-superlative');
  });

  it('maps state EricSinksLabel to url #/method/erick-sinks-label', function(){
    expect($state.href('EricSinksLabel', {})).toEqual('#/method/eric-sinks-label');
  });

  it('maps state SimonSineks to url #/method/simon-sineks', function(){
    expect($state.href('SimonSineks', {})).toEqual('#/method/simon-sineks');
  });

  it('maps state ZagFormat to url #/method/zag-format', function(){
    expect($state.href('ZagFormat', {})).toEqual('#/method/zag-format');
  });

  it('maps state JustWriteIt to url #/method/just-write-it', function(){
    expect($state.href('JustWriteIt', {})).toEqual('#/method/just-write-it');
  });

  it('maps state TheQuestion to url #/method/the-question', function(){
    expect($state.href('TheQuestion', {})).toEqual('#/method/the-question');
  });

  it('maps state DaveMcClures to url #/method/dave-mcclures', function(){
    expect($state.href('DaveMcClures', {})).toEqual('#/method/dave-mcclures');
  });

  it('maps state VentureHacks to url #/method/venture-hacks', function(){
    expect($state.href('VentureHacks', {})).toEqual('#/method/venture-hacks');
  });

  it('maps state VlaskovitsAndCoopers to url #/method/vlaskovits-and-coopers', function(){
    expect($state.href('VlaskovitsAndCoopers', {})).toEqual('#/method/vlaskovits-and-coopers');
  });

  it('maps state ThreeWords to url #/method/3-words', function(){
    expect($state.href('ThreeWords', {})).toEqual('#/method/3-words');
  });

  it('maps #/method/geoff-moores route to GeoffMoores template', function(){
    expect($state.get('GeoffMoores').templateUrl).toEqual(views.geoffMoores);
  });

  it('maps #/method/steve-blanks route to SteveBlanks template', function(){
    expect($state.get('SteveBlanks').templateUrl).toEqual(views.steveBlanks);
  });

  it('maps #/method/david-cowans route to DavidCowans template', function(){
    expect($state.get('DavidCowans').templateUrl).toEqual(views.davidCowans);
  });

  it('maps #/method/elevator-pitch route to ElevatorPitch template', function(){
    expect($state.get('ElevatorPitch').templateUrl).toEqual(views.elevatorPitch);
  });

  it('maps #/method/minto-pyramid route to MintoPyramid template', function(){
    expect($state.get('MintoPyramid').templateUrl).toEqual(views.mintoPyramid);
  });

  it('maps #/method/clay-christensen route to ClayChristensen template', function(){
    expect($state.get('ClayChristensen').templateUrl).toEqual(views.clayChristensen);
  });

  it('maps #/method/eric-sinks-superlative route to EricSinksSuperlative template', function(){
    expect($state.get('EricSinksSuperlative').templateUrl).toEqual(views.erickSinksSuperlative);
  });

  it('maps #/method/eric-sinks-label route to EricSinksLabel template', function(){
    expect($state.get('EricSinksLabel').templateUrl).toEqual(views.erickSinksLabel);
  });

  it('maps #/method/simon-sineks route to SimonSineks template', function(){
    expect($state.get('SimonSineks').templateUrl).toEqual(views.simonSineks);
  });

  it('maps #/method/zag-format route to ZagFormat template', function(){
    expect($state.get('ZagFormat').templateUrl).toEqual(views.zagFormat);
  });

  it('maps #/method/just-write-it route to JustWriteIt template', function(){
    expect($state.get('JustWriteIt').templateUrl).toEqual(views.justWriteIt);
  });

  it('maps #/method/the-question route to TheQuestion template', function(){
    expect($state.get('TheQuestion').templateUrl).toEqual(views.theQuestion);
  });

  it('maps #/method/dave-mcclures route to DaveMcClures template', function(){
    expect($state.get('DaveMcClures').templateUrl).toEqual(views.daveMcClures);
  });

  it('maps #/method/venture-hacks route to VentureHacks template', function(){
    expect($state.get('VentureHacks').templateUrl).toEqual(views.venturehacks);
  });

  it('maps #/method/vlaskovits-and-coopers route to VlaskovitsAndCoopers template', function(){
    expect($state.get('VlaskovitsAndCoopers').templateUrl).toEqual(views.vlaskovitsAndCoopers);
  });

  it('maps #/method/3-words route to ThreeWords template', function(){
    expect($state.get('ThreeWords').templateUrl).toEqual(views.threeWords);
  });
});
