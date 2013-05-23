$(document).ready(function(){
  $('.container a').click(function(event) {
    event.preventDefault();
    $.post('/color', function(results) {
      console.log(results);
      var cell = results.cell;
      var color = results.color;
      $('ul#color_me li:nth-child('+cell+')').css("background-color", color);
    }, "json");
  });
});