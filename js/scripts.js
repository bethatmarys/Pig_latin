//Business Logic
var pigLatin = function(inputtedPhrase) {
  return inputtedPhrase;
};

var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

//User Interface Logic

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#phrase").val();

    userInput = userInput.split("").join("");


// //Adds way to vowels
    for (var index = 0; index < userInput.length; index +=1) {
      if (userInput[0] === vowels[index]) {
        userInput += "way";
      }
    }
// Adds ay to consonants
    for(var index = 0; index < consonant.length; index +=1) {
      if (userInput[0] === consonant[index]) {
        userInput += "ay";
      }
    }

    var result = pigLatin(userInput);

    $("#result").text(result);
  });
});








// userInput = userInput.split("").join("");
// //Adds way to vowels
// for (var index = 0; index < userInput.length; index +=1) {
//   if (userInput[0] === vowels[index]) {
//     userInput += "way";
//   }
// }
// Adds ay to consonan


// var remove = userInput.replace(/ /g, '').replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()]0-9/g,"");


// var reversed = remove.split("").reverse().join("");
