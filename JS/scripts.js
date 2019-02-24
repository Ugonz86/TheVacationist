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
    if (weather === 'cold' && place === 'africa' && budget === 'a' && kind === '1'){
    result = 'Lesotho';
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'a' && kind === '1'){
    result = 'Madagascar';
    }
    if (weather === 'sunny' && place === 'america' && budget === 'a' && kind === '1'){
    result = 'Mexico City';
    }
    if (weather === 'cold' && place === 'america' && budget === 'a' && kind === '1'){
    result = 'Whistler';
    }
    if (weather === 'tropical' && place === 'america' && budget === 'a' && kind === '1'){
    result = 'Miami';
    }

    if (weather === 'sunny' && place === 'asia' && budget === 'a' && kind === '1'){
    result  = 'Thailand';
    }
    if (weather === 'cold' && place === 'asia' && budget === 'a' && kind === '1'){
    result = 'Vietnam';
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'a' && kind === '1'){
    result = 'Indonesia';
    }
    if (weather === 'sunny' && place === 'australia' && budget === 'a' && kind === '1'){
    result = 'Perth';
    }
    if (weather === 'cold' && place === 'australia' && budget === 'a' && kind === '1'){
    result = 'Melbourne';
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'a' && kind === '1'){
    result = 'North Queensland';
    }
    if (weather === 'sunny' && place === 'europe' && budget === 'a' && kind === '1'){
    result = 'Lisbon';
    }
    if (weather === 'cold' && place === 'europe' && budget === 'a' && kind === '1'){
    result = 'Venice';
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'a' && kind === '1'){
    result = 'Mallorca';
    }

    if (weather === 'sunny' && place === 'africa' && budget === 'b' && kind === '1'){
     result = 'El Cairo';
    }
    if (weather === 'cold' && place === 'africa' && budget === 'b' && kind === '1'){
    result = 'Kilimanjaro, Tanzania';
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'b' && kind === '1'){
    result = 'Seychelles';
    }

    if (weather === 'sunny' && place === 'america' && budget === 'b' && kind === '1'){
    result = 'Los Angeles';
    }
    if (weather === 'cold' && place === 'america' && budget === 'b' && kind === '1'){
    result = 'New York';
    }
    if (weather === 'tropical' && place === 'america' && budget === 'b' && kind === '1'){
    result = 'Puerto Vallarta';
    }
    if (weather === 'sunny' && place === 'asia' && budget === 'b' && kind === '1'){
    result = 'Philippines';
    }
    if (weather === 'cold' && place === 'asia' && budget === 'b' && kind === '1'){
    result = 'Chiang Rai';
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'b' && kind === '1'){
    result = 'Laos';
    }
    if (weather === 'sunny' && place === 'australia' && budget === 'b' && kind === '1'){
    result = 'Tasmania';
    }
    if (weather === 'cold' && place === 'australia' && budget === 'b' && kind === '1'){
    result = 'Victoria';
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'b' && kind === '1'){
    result = 'Gold Coast';
    }

    if (weather === 'sunny' && place === 'europe' && budget === 'b' && kind === '1'){
    result = 'Athens';
    }
    if (weather === 'cold' && place === 'europe' && budget === 'b' && kind === '1'){
    result = 'Reykjavik';
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'b' && kind === '1'){
    result = 'Mykonos';
    }
    if (weather === 'sunny' && place === 'africa' && budget === 'c' && kind === '1'){
     result = 'Cape Town';
    }
    if (weather === 'cold' && place === 'africa' && budget === 'c' && kind === '1'){
    result = 'Suthernland';
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'c' && kind === '1'){
    result = 'Malawi';
    }
    if (weather === 'sunny' && place === 'america' && budget === 'c' && kind === '1'){
    result = 'Rio de Janeiro';
    }
    if (weather === 'cold' && place === 'america' && budget === 'c' && kind === '1'){
    result = 'Patagonia';
    }
    if (weather === 'tropical' && place === 'america' && budget === 'c' && kind === '1'){
    result = 'Puerto Rico';
    }
    if (weather === 'sunny' && place === 'asia' && budget === 'c' && kind === '1'){
    result = 'Shanghai';
    }
    if (weather === 'cold' && place === 'asia' && budget === 'c' && kind === '1'){
    result = 'Japan';
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'c' && kind === '1'){
    result = 'Railay';
    }
    if (weather === 'sunny' && place === 'australia' && budget === 'c' && kind === '1'){
    result = 'Adelaide';
    }
    if (weather === 'cold' && place === 'australia' && budget === 'c' && kind === '1'){
    result = 'Armidale';
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'c' && kind === '1'){
    result = 'Lizard Island';
    }
    if (weather === 'sunny' && place === 'europe' && budget === 'c' && kind === '1'){
    }
    if (weather === 'cold' && place === 'europe' && budget === 'c' && kind === '1'){
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'c' && kind === '1'){
    }
    if (weather === 'sunny' && place === 'africa' && budget === 'd' && kind === '1'){
     result = 'Cape Town';
    }
    if (weather === 'cold' && place === 'africa' && budget === 'd' && kind === '1'){
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'd' && kind === '1'){
    result = 'Mauritius';
    }
    if (weather === 'sunny' && place === 'america' && budget === 'd' && kind === '1'){
    result = 'Hawaii';
    }
    if (weather === 'cold' && place === 'america' && budget === 'd' && kind === '1'){
    resuilt = 'Tierra del Fuego';
    }
    if (weather === 'tropical' && place === 'america' && budget === 'd' && kind === '1'){
    result = 'Anguilla';
    }
    if (weather === 'sunny' && place === 'asia' && budget === 'd' && kind === '1'){
    }
    if (weather === 'cold' && place === 'asia' && budget === 'd' && kind === '1'){
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'd' && kind === '1'){
    }

    if (weather === 'sunny' && place === 'africa' && budget === 'a' && kind === '2'){
     result = 'Morocco';
    }
    if (weather === 'cold' && place === 'africa' && budget === 'a' && kind === '2'){
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'a' && kind === '2'){
    }

    if (weather === 'sunny' && place === 'america' && budget === 'a' && kind === '2'){
    }
    if (weather === 'cold' && place === 'america' && budget === 'a' && kind === '2'){
    }
    if (weather === 'tropical' && place === 'america' && budget === 'a' && kind === '2'){
    }

    if (weather === 'sunny' && place === 'asia' && budget === 'a' && kind === '2'){
    }
    if (weather === 'cold' && place === 'asia' && budget === 'a' && kind === '2'){
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'a' && kind === '2'){
    }


    if (weather === 'sunny' && place === 'australia' && budget === 'a' && kind === '2'){
    }
    if (weather === 'cold' && place === 'australia' && budget === 'a' && kind === '2'){
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'a' && kind === '2'){
    }

    if (weather === 'sunny' && place === 'europe' && budget === 'a' && kind === '2'){
    }
    if (weather === 'cold' && place === 'europe' && budget === 'a' && kind === '2'){
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'a' && kind === '2'){
    }
    if (weather === 'sunny' && place === 'africa' && budget === 'b' && kind === '3'){
     result = 'Morocco';
    }
    if (weather === 'cold' && place === 'africa' && budget === 'b' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'b' && kind === '3'){
    }

    if (weather === 'sunny' && place === 'america' && budget === 'b' && kind === '3'){
    }
    if (weather === 'cold' && place === 'america' && budget === 'b' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'america' && budget === 'b' && kind === '3'){
    }

    if (weather === 'sunny' && place === 'asia' && budget === 'b' && kind === '3'){
    }
    if (weather === 'cold' && place === 'asia' && budget === 'b' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'b' && kind === '3'){
    }


    if (weather === 'sunny' && place === 'australia' && budget === 'b' && kind === '3'){
    }
    if (weather === 'cold' && place === 'australia' && budget === 'b' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'b' && kind === '3'){
    }

    if (weather === 'sunny' && place === 'europe' && budget === 'b' && kind === '3'){
    }
    if (weather === 'cold' && place === 'europe' && budget === 'b' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'b' && kind === '3'){
    }
    if (weather === 'sunny' && place === 'australia' && budget === 'd' && kind === '3'){
    }
    if (weather === 'cold' && place === 'australia' && budget === 'd' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'd' && kind === '3'){
    }

    if (weather === 'sunny' && place === 'europe' && budget === 'd' && kind === '3'){
    }
    if (weather === 'cold' && place === 'europe' && budget === 'd' && kind === '3'){
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'd' && kind === '3'){
    }
    if (weather === 'sunny' && place === 'africa' && budget === 'b' && kind === '4'){

    }
    if (weather === 'cold' && place === 'africa' && budget === 'b' && kind === '4'){
    }
    if (weather === 'tropical' && place === 'africa' && budget === 'b' && kind === '4'){
    }

    if (weather === 'sunny' && place === 'america' && budget === 'b' && kind === '4'){
    }
    if (weather === 'cold' && place === 'america' && budget === 'b' && kind === '4'){
    }
    if (weather === 'tropical' && place === 'america' && budget === 'b' && kind === '4'){
    }

    if (weather === 'sunny' && place === 'asia' && budget === 'b' && kind === '4'){
    }
    if (weather === 'cold' && place === 'asia' && budget === 'b' && kind === '4'){
    }
    if (weather === 'tropical' && place === 'asia' && budget === 'b' && kind === '4'){
    }


    if (weather === 'sunny' && place === 'australia' && budget === 'b' && kind === '4'){
    }
    if (weather === 'cold' && place === 'australia' && budget === 'b' && kind === '4'){
    }
    if (weather === 'tropical' && place === 'australia' && budget === 'b' && kind === '4'){
    }

    if (weather === 'sunny' && place === 'europe' && budget === 'b' && kind === '4'){
    }
    if (weather === 'cold' && place === 'europe' && budget === 'b' && kind === '4'){
    }
    if (weather === 'tropical' && place === 'europe' && budget === 'b' && kind === '4'){
    }


    $("#destination").text(result);
    $("#result").fadeIn();
    $("#survey").hide();
  });
});
