

$(document).ready(function(){
	$('.card').each(function(){
			const card_bottom = $(this).position().top +
								$(this).outerHeight();
			const win_bottom = $(window).scrollTop() +
									$(window).height();
			if(win_bottom > card_bottom){
				$(this).animate({'opacity':'1'}, 500);
			}
	});
	$(window).scroll(function(){
		$('.card').each(function(){
			const card_bottom = $(this).position().top +
								$(this).outerHeight();
			const win_bottom = $(window).scrollTop() +
									$(window).height();
			if(win_bottom > card_bottom){
				$(this).animate({'opacity':'1'}, 500);
			}
		});
	});
});