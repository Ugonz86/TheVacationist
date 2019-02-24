$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var clientInput = $("input#client").val();
    var weather = $("select#weather").val();
    var place = $("select#place").val();
    var budget = $("select#budget").val();
    var kind = $("select#kind").val();
    var contactInput = $("input#contact").val();

      $(".client").text(clientInput);
      $(".contact").text(contactInput);


    var result = '';
    if (weather === 'sunny' && place === 'africa' && budget === 'a' && kind === '1'){
     result = 'Morocco';
    }

    $("#destination").text(result);
    $("#result").fadeIn();
    $("#survey").hide();
  });
});
