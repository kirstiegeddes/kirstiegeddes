  
$(function(){ 
    $('.jsHamburger').on('click', function(event) {
        event.preventDefault();
        
        $('nav').toggle();
        $('.menu').toggleClass('mobileNav');
    });
});


$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});