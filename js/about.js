
$('.intro article').eq(0).animate({'height':260+'px'},500);
$('.intro article').eq(1).delay(500).animate({'height':68+'px'},500);
$('.intro article').eq(2).delay(1000).animate({'height':68+'px'},500);
$('.intro article').eq(3).delay(1500).animate({'height':68+'px'},500);
$('.intro article').eq(4).delay(1800).animate({'height':68+'px'},500);
$('.intro article').eq(5).delay(2000).animate({'height':68+'px'},500);
$('.intro article').eq(6).delay(2500).animate({'height':68+'px'},500);
$('.intro article').eq(7).delay(2800).animate({'height':68+'px'},500);

$('.intro article').eq(1).click(function(){
  $('.twipic img').attr('src','../images/name.gif')
});
$('.intro article').eq(2).click(function(){
  $('.twipic img').attr('src','../images/birth.gif')
});
$('.intro article').eq(3).click(function(){
  $('.twipic img').attr('src','../images/suwon.gif')
});
$('.intro article').eq(4).click(function(){
  $('.twipic img').attr('src','../images/phone.gif')
});
$('.intro article').eq(5).click(function(){
  $('.twipic img').attr('src','../images/mail.gif')
});
$('.intro article').eq(6).click(function(){
  $('.twipic img').attr('src','../images/character.gif')
});
$('.intro article').eq(7).click(function(){
  $('.twipic img').attr('src','../images/hobby.gif')
});

$('.pt li').delay(2600).animate({'height':16+'px'},800)
$('.ai li').delay(2600).animate({'height':16+'px'},800)
$('.html li').delay(2600).animate({'height':16+'px'},800)
$('.css li').delay(2600).animate({'height':16+'px'},800)
$('.java li').delay(2600).animate({'height':16+'px'},800)