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
    dots: true
  });

  $('.slick2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false
  });


  $(".navbar-light .navbar-toggler").click(() => {
    $(".navbar-light .navbar-toggler-icon").toggleClass('x-button');
  })


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

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
  
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
  
      return elementBottom > viewportTop && elementTop +  240 < viewportBottom;
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
      else if ($('#partners').isInViewport()) {
        $(".nav-link").removeClass('underline');
        $("a[href$='#partners']").addClass('underline');
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




  $("#centerOfHive").hover(function(){
    $('.hexs').addClass("hexs-hover");
    }, function(){
    $('.hexs').removeClass("hexs-hover");
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
          $('#msgModal').modal('hide');
          $('#successModal').modal('show');
        }

        form.classList.add('was-validated')


      }, false)
    })
})()