$(document).ready(function(){
function getQuote(){
  var quotes = ["Be the change that you wish to see in the world.", "No one can make you feel inferior without your consent.", "Live as if you were to die tomorrow. Learn as if you were to live forever.", "Without music, life would be a mistake.", "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."];
var author=[".Mahatma Gandhi", ".Eleanor Roosevelt", ".Mahatma Gandhi", ".Friedrich Nietzsche", ".Bil Keane"];
var randomNum = Math.floor((Math.random()*quotes.length));
  var randomQuote = quotes[randomNum];
  var randomAuthor = author[randomNum];
  $(".quote").text(randomQuote);
  $(".author").text(randomAuthor);  
}
$(".btn").on("click", function(){
getQuote();
});
  
});