console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#355766");
      }, function(){
      $(this).css("background-color", "#274E5F");
    });
  });