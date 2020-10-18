$(document).ready(function() {
    $('.projects').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false
    });

    var show = true;
    $(window).on("scroll", function() {

    	if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(".statistics__numbers").offset().top;

        if (w_top + 750 >= e_top) {
            $(".counter__number").spincrement({
                thousandSeparator: "",
                duration: 1500,
                from: 0,
            });

            show = false;
        }
    });
});

$(function(){
	$('.promo-footer__button').click(function(){
		$('html, body').animate({scrollTop: $(".services").offset().top}, 600);
		return false;
	});
});