'use strict';

$(document).ready(function () {
    // SVG raplce
    $('img.svg').each(function (idx, el) {
        var $img = $(el);
        var imgClass = $img.attr('class');
        var imgUri = $img.attr('src');
        $.ajax({
            type: "get",
            url: imgUri,
            data: "data",
            crossDomian: true,
            dataType: "xml",
            success: function success(response) {
                var $svg = $(response).find('svg');
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }
        });
    });
    // slider
    $('#slider').owlCarousel({
        singleItem: true,
        items: 1
    });

    // slider popular
    var popularSlider = $('#popular-slider');
    popularSlider.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    });
    $('.pop-next').click(function () {
        popularSlider.trigger('next.owl.carousel');
    });
    $('.pop-prev').click(function () {
        popularSlider.trigger('prev.owl.carousel');
    });
    //product item hover
    $('.product-item').hover(function () {
        var productHover = $(this).find('.product-hover');
        productHover.animate({ 'opacity': 1 }, 200);
        productHover.removeClass('invisible');
        $(this).find('.text-container').animate({ 'opacity': 0 }, 200);
    }, function () {
        var productHover = $(this).find('.product-hover');
        productHover.animate({ 'opacity': 0 }, 200);
        productHover.addClass('invisible');
        $(this).find('.text-container').animate({ 'opacity': 1 }, 200);
    });
    //navigation
    $(document).ready(function ($) {
        $('.stellarnav').stellarNav({
            theme: 'light',
            breakpoint: 768,
            sticky: false, // makes nav sticky on scroll (desktop only)
            position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
            openingSpeed: 250, // how fast the dropdown should open in milliseconds
            closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
            showArrows: true, // shows dropdown arrows next to the items that have sub menus
            locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
            locationLabel: 'Location', // label for the location button
            menuLabel: '',
            closeBtn: false, // adds a close button to the end of nav
            mobileMode: false,
            scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
        });
    });
    // change city and phone in header
    $('#cityModal').find('a.city').click(function (el) {
        el.preventDefault();
        var tel = $(el.target).data('value');
        var city = $(el.target).text();
        document.querySelector('#city').innerHTML = city;
        document.querySelector('#tel').innerHTML = tel;
        $('#cityModal').modal('hide');
        var dataLocalStorage = JSON.stringify({
            "city": city,
            "num": tel
        });
        localStorage.setItem('header-info', dataLocalStorage);
    });
    // change city if localStorage not undefined
    if (localStorage.getItem('header-info')) {
        document.querySelector('#city').innerHTML = JSON.parse(localStorage.getItem('header-info'))['city'];
        document.querySelector('#tel').innerHTML = JSON.parse(localStorage.getItem('header-info'))['num'];
    }

    // slider in item page
    var workSlider = $('#work-slider');
    workSlider.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                loop: false
            }
        }
    });
    $('.work-next').click(function () {
        workSlider.trigger('next.owl.carousel');
    });
    $('.work-prev').click(function () {
        workSlider.trigger('prev.owl.carousel');
    });

    var productGallery = $('#product-gallery');
    productGallery.owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    });
    $('.gallery-next').click(function () {
        productGallery.trigger('next.owl.carousel');
    });
    $('.gallery-prev').click(function () {
        productGallery.trigger('prev.owl.carousel');
    });
});
