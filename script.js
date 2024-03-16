$(document).ready(function() {
    // Lightbox
    $('[class^=item]').click(function() {
        let imgSrc = $(this).find('img').attr('src');
        $('.lightbox-img').attr('src', imgSrc);
        $('.lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('.lightbox').fadeOut();
    });

    // Category filtering
    $('.filter-btn').click(function() {
        let category = $(this).data('category');
        if (category == 'all') {
            $('[class^=item]').fadeIn();
        } else {
            $('[class^=item]').hide().filter('.item-' + category).fadeIn();
        }
    });
});
