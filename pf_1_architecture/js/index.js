
var $btn=$('.btnG > li');
var $imgG=$('.imgG');
var n =0;

$btn.click(function(){
	n=$(this).index();
	$imgG.animate({marginLeft : -100 * n + '%'},1000);

	$btn.removeClass('on');
	$(this).addClass('on')
})


var autoPlay = setInterval(slide, 2000);

function slide(){
	n = (n+1) % 4; //0, 1, 2, 3
	$imgG.animate({marginLeft:-100 * n + '%'})
	$btn.eq(n).addClass('on').siblings().removeClass('on')
}


$('.btnG').mouseenter(function(){ 
	clearInterval(autoPlay)
});
$('.btnG').mouseleave(function(){
	autoPlay=setInterval(slide, 2000);
})
