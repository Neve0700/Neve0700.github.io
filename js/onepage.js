


$(".Hem").click(function(){


  $('html, body').animate({
        scrollTop: $("#text").offset().top-800
    }, 3000);



});

$(".omOss").click(function(){


  $('html, body').animate({
        scrollTop: $("#box1").offset().top
    }, 3000);



});

$(".hype").click(function(){


  $('html, body').animate({
        scrollTop: $("#box2").offset().top
    }, 3000);



});

$(".nyhetsbrev").click(function(){


  $('html, body').animate({
        scrollTop: $("#box3").offset().top
    }, 3000);



});


var positionSmall = 0;
    $(document).scroll(function () {
        positionSmall = $(this).scrollTop();
        if (positionSmall > 610) {
            $("nav").css('background-color', '#e04e9e');
        } else {
            $("nav").css('background-color', '');
        }
    });






    $(document).ready(function() {

      $("#phone").keyup(function(){

        var re = /^[0]{1}[0-9]{3,12}$/;    //måste börja med 1 nolla, sedan 0-9 minst 3st max 12 där efter får de ej finnas något

        var OK = re.exec($('#phone').val());

        if (!OK) {
          $("#red").show("");
          $("#ok").hide();

        }
        else{
          $("#red").hide("");
          $("#ok").show();
          $('#text').text("");
        }

        if ($('#phone').val().length===0){
          $('#text').text("");

        }
      });


    });
