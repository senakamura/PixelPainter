$(document).ready(function() {
  $('#pixelPainter').append('<input id="xInput">');
  $('#pixelPainter').append('<input id="yInput">');
  $('#pixelPainter').append('<button id="submitInput">Submit Me!</button>');
  $('#pixelPainter').append('<div class="clear">');
  $('#pixelPainter').append('<div id="palette">');
  $('#pixelPainter').append('<div id="canvas">');

  // $('#canvas').append('<div class="grid">');

  $('#yInput').keyup(function(){
    if(event.keyCode === 13){

    }
  });

  $('#submitInput').click(function (){
    $('#canvas').empty();

    var x = xInput.value;
    var y = yInput.value;

    function numGrid(x, y){
      var input = x*y;
      for (var i=0; i < input; i++){
        $('#canvas').append('<div class="grid" name="color">');
      }
    }

    numGrid(x, y);

    var input = 'blue';

    $('.grid').on('click', function (){
      $(this).attr("id", input);
    });

  });





});