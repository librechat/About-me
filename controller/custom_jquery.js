var onready = function(){
	$('.proj-card').mouseenter(function(){
		var gif = $(this).find('.card-img-top > .proj-img-group > #gif');
		var img = $(this).find('.card-img-top > .proj-img-group > #img');

		if(gif.attr('src') !== '' && img.attr('src') !== ''){
			$(this).find('.card-img-top > .proj-img-group > #gif').fadeIn();
			$(this).find('.card-img-top > .proj-img-group > #img').fadeOut();
		}
		
	});
	$('.proj-card').mouseleave(function(){
		var gif = $(this).find('.card-img-top > .proj-img-group > #gif');
		var img = $(this).find('.card-img-top > .proj-img-group > #img');

		if(gif.attr('src') !== '' && img.attr('src') !== ''){
			$(this).find('.card-img-top > .proj-img-group > #gif').fadeOut();
			$(this).find('.card-img-top > .proj-img-group > #img').fadeIn();
		}
	});

	/*$('.proj-card').click(function(){
		$(this).find('#detailbody').collapse('toggle');
	});*/
}

window.onload = function(){
	$('.loading').fadeOut(600, function(){
		//$('#top').addClass('fixed-top');
	});
};
$(document).ready(onready);


