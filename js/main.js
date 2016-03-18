(function(){

	$('#menu-menu-1').dropit({
		action: 'mouseenter'
	});

	$('.play').hover(
		function(){
			$('.play img').animate({
				width: '98px'
			}, 200);
		}, 
		function(){
			$('.play img').animate({
				width: '90px'
			}, 200);
		}
	);

	$('.play').on('click', function(){

		$('.play').hide();

		$('.video_container').html('<iframe width="639" height="360" src="https://www.youtube.com/embed/lLrPZR_7w5I?rel=0&autoplay=true" frameborder="0" allowfullscreen></iframe>');
	})

})();