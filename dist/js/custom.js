$(document).ready(function() {
	newAnchor();

	$('#menu-opener').click(function() {
		$(this).toggleClass('on');
		$('.nav').slideToggle();
	});

	$('.select').select2({
		placeholder: 'Год рождения',
		minimumResultsForSearch: Infinity
	});

	// Slider jQuery Ui
	$( "#slider-range-min" ).slider({
		range: "min",
		value: 50,
		min: 1,
		max: 100,
	});
});

// Anchors Animation Scroll
function newAnchor(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		var id  = $(this).attr('href'),
				headerHeight = $('.fixed-head').outerHeight(),
				top = $(id).offset().top;
		$('body, html').animate({scrollTop: top - headerHeight}, 1000);
    $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active');
  });
}