jQuery(document).ready(function (jQuery) {
    var parPosition = [];
    jQuery('.par').each(function () {
        parPosition.push(jQuery(this).offset().top);
    });

    jQuery('a').click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    jQuery('.vNav ul li a').click(function () {
        jQuery('.vNav ul li a').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.vNav a').hover(function () {
        jQuery(this).find('.label').show();
    }, function () {
        jQuery(this).find('.label').hide();
    });

    jQuery(document).scroll(function () {
        var position = jQuery(document).scrollTop(),
            index;
        for (var i = 0; i < parPosition.length; i++) {
            if (position <= parPosition[i]) {
                index = i;
                break;
            }
        }
        jQuery('.vNav ul li a').removeClass('active');
        jQuery('.vNav ul li a:eq(' + index + ')').addClass('active');
    }).scroll();

    jQuery('.vNav ul li a').click(function () {
        jQuery('.vNav ul li a').removeClass('active');
        jQuery(this).addClass('active');
    });
});