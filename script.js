/* ----------- PRELOADER ---------------*/

$(window).on('load', function() {
	$('.load').fadeOut('slow');
});

/* ------------ WOW --------------------*/

new WOW().init();

/*-------------- NAVIGATION --------------*/


$('.open').click(function() {
	$('.toggle-nav').addClass('nav-open');
	$('.close').css('display','block');
	$('.open').css('display','none');
});

$('.close').click(function() {
	$('.toggle-nav').removeClass('nav-open');
	$('.close').css('display','none');
	$('.open').css('display','block');
});

$('.nav-link').click(function() {
	$('.toggle-nav').removeClass('nav-open');
	$('.close').css('display','none');
	$('.open').css('display','block');
});