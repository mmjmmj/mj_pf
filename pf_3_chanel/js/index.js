$(function(){
	var ht=$(window).height();
	$('section').height(ht);

	//브라우저가 리사이즈 될 떄마다 브라우저와 section의 높이값 갱신
	$(window).on('resize', function(){
		var ht =$(window).height()
		$('section').height(ht)
	});
	$(window).on('resize', function(){
		var ht =$(window).height()
		$('.img').height(ht)
	});
})	