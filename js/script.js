$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$(function($){
   $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
   $("#user_phone").mask("+380 ( 9 9 ) 9 9 9 - 9 9 - 9 9");
});

$("#brand").change(function() {
  if ($(this).data('options') == undefined) {
    /*Taking an array of all options-2 and kind of embedding it on the select1*/
    $(this).data('options', $('#model option').clone());
  }
  var id = $(this).val();
  var options = $(this).data('options').filter('[value=' + id + ']');
  $('#model').html(options);
});

function YO() {
    var years_old = $('.years').text(),
        i = 0,
        timer = setInterval(function() {
            p = i++;
            if (p <= years_old) {
                $('.years').html(p);
            }
        }, 80);

};

function PC() {

    var peoples_count = $('.peoples').text(),
        ii = 0,
        p_count = setInterval(function() {
            pp = ii++;
            if (pp <= peoples_count) {
                $('.peoples').html(pp);
            }
        }, 1);

};

function AnimateRotate(angle) {
    var $elem = $('.why_us__svg');

    $({
        deg: 0
    }).animate({
        deg: angle
    }, {
        duration: 2000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
};

$('#why-us').viewportChecker({
    callbackFunction: function(elem, action) {
        YO();
        PC();
        AnimateRotate(360);
    }
});

$('.just-sold__carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.comments__carousel').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
