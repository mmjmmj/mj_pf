$(function(){
	$('#tab1 > .btn > li').on('click', function(){
		var i = $(this).index();//.index() 해당 객체의 인덱스 번호를 불러오거나 변경
		$('#tab1 > .subMenu > li').hide();
		$('#tab1 > .subMenu > li').eq(i).show();
	});
	$('#tab2 > .btn > li').on('click', function(){
		var i = $(this).index();//.index() 해당 객체의 인덱스 번호를 불러오거나 변경
		$('#tab2 > .subMenu > li').hide();
		$('#tab2 > .subMenu > li').eq(i).show();
	});
	$('#tab3 > .btn > li').on('click', function(){
		var i = $(this).index();//.index() 해당 객체의 인덱스 번호를 불러오거나 변경
		$('#tab3 > .subMenu > li').hide();
		$('#tab3 > .subMenu > li').eq(i).show();
	});

	$('.box1').on('click',function(){
		$('#tab2, #tab3').hide();
		$('#tab1').show();
	});
	$('.box2').on('click',function(){
		$('#tab1, #tab3').hide();
		$('#tab2').show();
	});
	$('.box3').on('click',function(){
		$('#tab1, #tab2').hide();
		$('#tab3').show();
	})


	$('.box1').on('click',function(){
		$('.box2 img').attr({'src':'images/place.png'});
		$('.box3 img').attr({'src':'images/tour.png'});
		$('.box1 img').attr({'src':'images/hotel2.png'})
	});
	$('.box2').on('click',function(){
		$('.box1 img').attr({'src':'images/hotel.png'});
		$('.box3 img').attr({'src':'images/tour.png'});
		$('.box2 img').attr({'src':'images/place2.png'})
	});
	$('.box3').on('click',function(){
		$('.box2 img').attr({'src':'images/place.png'});
		$('.box1 img').attr({'src':'images/hotel.png'});
		$('.box3 img').attr({'src':'images/tour2.png'})
	});

	$('.btn li').on('click',function(){
		$('.btn li').removeClass('on');
		$(this).addClass('on');
	})
});	
