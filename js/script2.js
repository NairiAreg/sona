$(document).ready(function () {

    //! LATER
    var input = document.querySelector("#telephone");
    window.intlTelInput(input, ({
        // options here
        preferredCountries: ["am", "us", "ru"]
    }));
    //!

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

    window.addEventListener('scroll', function () {
        if (window.scrollY > 550) {
            document.getElementById('navbar_top').classList.add('fixed-top');

            $('nav .container-fluid').addClass('bg-white');
            $('nav .navbar-collapse').addClass('py-3');
            $('nav .container-fluid img').attr('src', 'img/logo.svg');
            $('nav .container-fluid img').addClass('scrolled-logo');
            $('nav .container-fluid img').removeClass('logo2');
            $('nav .container-fluid img.shadows').removeClass('d-none');
            // // add padding top to show content behind navbar
            // navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');

            $('nav .container-fluid img').addClass('logo2');
            $('nav .container-fluid').removeClass('bg-white');
            $('nav .container-fluid img').removeClass('scrolled-logo');
            $('nav .navbar-collapse').removeClass('py-3');
            $('nav .container-fluid img').attr('src', 'img/logo-white.png');
            $('nav .container-fluid img.shadows').addClass('d-none');
            //  // remove padding top from body
            // document.body.style.paddingTop = '0';
        }

    });
    // DOMContentLoaded  end


    const queryString = window.location.search;
    // ?product=shirt&color=blue&newuser&size=m
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('filter')

    console.log(product);

    if (product) {
        $('#brandings > div > div > div').hide();
        $('.' + product).show();

        $('#ourWorks div a').removeClass("selectedFilter");
        $('#ourWorks div a[data-filter= '+product+']').addClass('selectedFilter');
    }

    $('a[data-filter]').on('click', function () {
        //lighsldier reload
        if ($(this).attr('data-filter') == "all") {
            $('#brandings > div > div > div:not(.modal)').show('fast');

            $('#ourWorks div a').removeClass("selectedFilter");
            $(this).addClass('selectedFilter');
        } else {
            $('#brandings > div > div > div').hide();
            $('.' + $(this).attr('data-filter')).show('fast');

            $('#ourWorks div a').removeClass("selectedFilter");
            $(this).addClass('selectedFilter');
        }
    })


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

$('.slider-modal').on('shown.bs.modal', function () {

    if (!$(this).hasClass('alreadyLight')) {

        $(this).find(".lightSlider").lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 9
        });

    }

    $(this).addClass("alreadyLight");

});