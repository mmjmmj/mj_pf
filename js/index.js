//높이값 조절
var ht = $(window).height();
$('section').height(ht);


$('section').on('mousewheel',function(event, delta){
	if(delta > 0){
		var prev = $(this).prev().offset().top;
		$('html, body').stop().animate({'scrollTop':prev},1000, 'easeOutBack');
	} else if(delta < 0){
		var nxt = $(this).next().offset().top;
		$('html, body').stop().animate({'scrollTop':nxt},1000, 'easeOutBack');
	}
});

$('.close').click(function(){
	$('.menu').animate({right:-250 + 'px'})
});
$('.trg').click(function(){
	$('.menu').animate({right:0})
});

$('.eggtwi').click(function(){
	$('.eggtwi').attr('src','images/twi1_1.gif');
	$('.eggs img').eq(1).attr('src','images/lv1.png');
	$('.eggs p').html('<p>I was <br>born<br>again</p>');
	$('.eggs p').css({'color':'#de1e28','left':200 + 'px','top': 10+'px'})
});