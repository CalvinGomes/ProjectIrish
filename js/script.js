//FlexSlider
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
});

//start-smooth-scrolling

jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});

//Starts scrolling icon

$(document).ready(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
});

//Slide Pictures

$(document).ready(function () {
    $('.carousal').wmuSlider();         
});

//Swipebox

$(document).ready(function () {
    jQuery(function($) {
        $(".swipebox").swipebox();
    });
});

//Hover

$(document).ready(function () {
    $(function() {
        $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
    });
});
