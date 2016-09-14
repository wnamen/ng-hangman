console.log('app.js loaded!');
var word = "hello";
var words = ['hello','chicken','cow','house',"elephant",'pork','table','vehicle','angular','ruby','wooden'];
function nextWord(words) {
  if (words.indexOf(word) === words.length-1) {
    return word = words[0];
  }
  return word = words[words.indexOf(word) + 1];
}
// initialize the application
var app = angular.module("hangmanApp", []);
app.controller('hangmanCtrl', hangmanCtrl);

function hangmanCtrl(){
  var vm = this;

  vm.game = new HangmanGame(word);
  vm.guessLetter = function(){
    vm.game.guess(vm.input.toLowerCase());
    vm.input = "";
  };
  vm.reset = function(){
    nextWord(words);
    vm.game = new HangmanGame(word);
  }
}
