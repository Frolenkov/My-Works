$(document).ready(function(){
	$('.promo-slider').slick({
		autoplay:true,
		dots:true
	});

	$(".js-range-slider").ionRangeSlider({
		grid:true,
		type:"double",
		prefix:"$",
		postfix:" grn."
	});
});