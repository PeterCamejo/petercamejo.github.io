

$(document).ready(function(){
	$('.fade-first').each(function(){
		$(this).animate({'opacity':'1'}, 800);
	});
	$(window).scroll(function(){
		$('.card').each(function(){
			var card_bottom = $(this).position().top +
								$(this).outerHeight();
			var win_bottom = $(window).scrollTop() +
									$(window).height();
			if(win_bottom > card_bottom){
				$(this).animate({'opacity':'1'}, 500);
			}
		});
	});
});