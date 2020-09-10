//$(function(){
//	$('.product').on('click', function(){
//		$(this).next().slideToggle('fast');
//	})//.next() : 선택한 요소의 바로 다음 selector를 선택한다. 형제선택자
//})

$(function(){
	$('.product').click(function(){
		$('.sub-product').removeClass('on');
		$(this).next().addClass('on');
	})
	$('.mobile-menu').click(function(){
		$('.nav-area').toggleClass('on');
	})
})