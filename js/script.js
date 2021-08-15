$(document).ready(function () {

  //! LATER
  var input = document.querySelector("#telephone");
  window.intlTelInput(input, ({
    // options here
    preferredCountries: ["am", "us", "ru"]
  }));
  //! 

  // input.addEventListener("countrychange", function () {
  //     // do something with iti.getSelectedCountryData()
  // });

  // input.addEventListener("open:countrydropdown", function () {
  //     // triggered when the user opens the dropdown
  // });

  // input.addEventListener("close:countrydropdown", function () {
  //     // triggered when the user closes the dropdown
  // });

  $('.slick1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slick2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });


  $(".navbar-light .navbar-toggler").click(() => {
    $(".navbar-light .navbar-toggler-icon").toggleClass('x-button');
  })


  // $(".flip-card").click(() => {
  //   $(this).find(".flip-card-inner").toggleClass('rot-y-180');
  // })

  $(".flip-card:not(.flip-mobile)").on("click", function () {

    if ($(this).find(".flip-card-inner").hasClass('rot-y-180')) {

      $(".flip-card-inner").removeClass("rot-y-180");

    } else {

      $(".flip-card-inner").removeClass("rot-y-180");
      $(this).find(".flip-card-inner").addClass('rot-y-180')

    }

  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 550) {
      document.getElementById('navbar_top').classList.add('fixed-top');

      $('nav .container-fluid').addClass('bg-white');
      $('nav .navbar-collapse').addClass('py-3');
      $('nav .container-fluid img').attr('src', 'img/logo.svg');
      $('nav .container-fluid img').addClass('scrolled-logo');
      // // add padding top to show content behind navbar
      // navbar_height = document.querySelector('.navbar').offsetHeight;
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');

      $('nav .container-fluid').removeClass('bg-white');
      $('nav .container-fluid img').removeClass('scrolled-logo');
      $('nav .navbar-collapse').removeClass('py-3');
      $('nav .container-fluid img').attr('src', 'img/logo-white.png');
      //  // remove padding top from body
      // document.body.style.paddingTop = '0';
    }

    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop + 240 < viewportBottom;
    };

    $(window).on('resize scroll', function () {
      if ($('#aboutUs').isInViewport()) {
        $(".nav-link").removeClass('underline');
        $("a[href$='#aboutUs']").addClass('underline');
      }
      else if ($('#services').isInViewport()) {
        $(".nav-link").removeClass('underline');
        $("a[href$='#services']").addClass('underline');
      }
      else if ($('#ourWorks').isInViewport()) {
        $(".nav-link").removeClass('underline');
        $("a[href$='#ourWorks']").addClass('underline');
      }
      else if ($('#contacts').isInViewport()) {
        $(".nav-link").removeClass('underline');
        $("a[href$='#contacts']").addClass('underline');
      }
      else {
        $(".nav-link").removeClass('underline');
      }
    });
  });
  // DOMContentLoaded  end



  AOS.init({
    duration: 1000,
    offset: 500,
    anchorPlacement: 'bottom-center'
  });




  $("#centerOfHive").hover(function () {
    $('.hexs').addClass("hexs-hover");
  }, function () {
    $('.hexs').removeClass("hexs-hover");
  });

  $("div > .customArrow:nth-child(2)").click(function () {
    $('.slick-next').click();
  });
  $("div > .customArrow:nth-child(1)").click(function () {
    $('.slick-prev').click();
  });

});


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()
          event.stopPropagation()

          $('#msgModal').modal('hide');
          $('#successModal').modal('show');
        }

        form.classList.add('was-validated')


      }, false)
    })

  //   let selector = '.lightSlider li:not(".clone") a';
  // // selector = '#lightSliderVertical li:not(".clone") a';
  // $().fancybox({
  //   selector: selector,
  //   backFocus: false,
  //   buttons: [
  //     'slideShow',
  //     'share',
  //     'zoom',
  //     'fullScreen',
  //     'thumbs',
  //     'download',
  //     'close'
  //   ]
  // });

  $("#callback").on("submit", function (e) {
    alert();
    e.preventDefault();
  });
})()

$('.slider-modal').on('shown.bs.modal', function () {

  if (!$(this).hasClass('alreadyLight')) {

    $(this).find(".lightSlider").lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      thumbItem: 5,
      autoWidth: true
    });

  }

  $(this).addClass("alreadyLight");

});