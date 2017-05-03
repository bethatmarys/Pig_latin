//Business Logic
var pigLatin = function(inputtedPhrase) {
  return inputtedPhrase;
};

var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]

// var convertStringtoArray = function(inputtedPhrase) {
//   return inputtedPhrase.split();
// }

//User Interface Logic

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#phrase").val();

    userInput = userInput.split("");

    // for (var index = 0; index < vowels.length; index +=1) {
      // return ("vowels[index]" + "a", + "y")
    // }

    var result = pigLatin(userInput);


    // var remove = userInput.replace(/ /g, '').replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()]0-9/g,"");

    // var reversed = remove.split("").reverse().join("");

    $("#result").text(result);
  });
});
