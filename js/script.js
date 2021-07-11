var input = document.querySelector("#telephone");
window.intlTelInput(input, ({
  // options here
  preferredCountries: ["am", "us", "ru"]
}));

// input.addEventListener("countrychange", function () {
//     // do something with iti.getSelectedCountryData()
// });

// input.addEventListener("open:countrydropdown", function () {
//     // triggered when the user opens the dropdown
// });

// input.addEventListener("close:countrydropdown", function () {
//     // triggered when the user closes the dropdown
// });

$(document).ready(function () {
  $('.slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 550) {
        document.getElementById('navbar_top').classList.add('fixed-top');

        $('nav .container-fluid').addClass('bg-white');
        $('nav .navbar-collapse').addClass('py-3');
        $('nav .container-fluid img').attr('src','img/logo2.png');
        $('nav .container-fluid img').addClass('scrolled-logo');
        // // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        
        $('nav .container-fluid').removeClass('bg-white');
        $('nav .container-fluid img').removeClass('scrolled-logo');
        $('nav .navbar-collapse').removeClass('py-3');
        $('nav .container-fluid img').attr('src','img/logo.png');
        //  // remove padding top from body
        // document.body.style.paddingTop = '0';
      } 
  });
}); 
// DOMContentLoaded  end