$(document).ready(function(){
  $("button").click(function(event){
    var userInput = $("input#word").val();
    var words = userInput.split(" ");

    var newArray= [];
    words.forEach(function(word){
      if(word.length >= 3){
        newArray.push(word);
      }
    });

    event.preventDefault();
    console.log(newArray);

  });
});
