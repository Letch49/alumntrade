$(document).ready(() => {
    // SVG raplce
    $('img.svg').each((idx, el) => {
        const $img = $(el);
        const imgClass = $img.attr('class');
        const imgUri = $img.attr('src');
        $.get(imgUri, (data) => {
            let $svg = $(data).find('svg');
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });

    // slider
    $('#slider').owlCarousel({
        singleItem: true,
        items: 1,
    });

    // slider popular
    const popularSlider = $('#popular-slider');
    popularSlider.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
                loop: false,
            }
        }
    });
    $('.pop-next').click(() => {
        popularSlider.trigger('next.owl.carousel')
    });
    $('.pop-prev').click(() => {
        popularSlider.trigger('prev.owl.carousel');
    });


    //product item hover
    $('.product-item').hover(function () {
            // over
            const productHover = $(this).find('.product-hover');
            productHover.animate({'opacity': 1}, 200);
            productHover.removeClass('invisible');
            $(this).find('.text-container').animate({'opacity': 0}, 200)
        }, function () {
            const productHover = $(this).find('.product-hover');
            productHover.animate({'opacity': 0}, 200);
            productHover.addClass('invisible');
            $(this).find('.text-container').animate({'opacity': 1}, 200)
        }
    );
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
            menuLabel: 'Меню',
            closeBtn: false, // adds a close button to the end of nav
            mobileMode: false,
            scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
        });
    });
});
