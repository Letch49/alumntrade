$(document).ready(() => {
    // SVG raplce
    $('img.svg').each((idx, el) => {
        const $img = $(el);
        const imgClass = $img.attr('class');
        const imgUri = $img.attr('src');
        $.get(imgUri, (data) => {
            let $svg = jQuery(data).find('svg');
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });

    // slider
    $('#slider').owlCarousel({
        // navigation: true, // Show next and prev buttons
        singleItem: true,
        items: 1,
    });

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

});
