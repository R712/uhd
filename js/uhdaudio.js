$(document).ready(function(){
	
	/* 공통 헤더 로드 (미리보기용) - failed. URL load 방식이 file이라서 jquery에서 보안문제로 막는 듯 ㅠ
	$( "#header" ).load( "header.html #header" ); */
	
	/* 정사각형 썸네일을 위한 - 가로 너비에 맞게 세로 크기 조절하기 */
	var cardThumbWidth = $('.list-default .card-image').width();
	$('.list-default .card-image').height(cardThumbWidth);
	
	/* 창 높이 가져와서 푸터 위치 맞추기 */
	var bodyHeight = $('body').height();
	var headerHeight = $('.header').outerHeight();
	var footerHeight = $('.footer').outerHeight();
	var contentHeight = bodyHeight - headerHeight - footerHeight;
	$('.contents-wrap').css('min-height', contentHeight);
	
	/* 브라우저 리사이즈일 때에도 */
	$(window).resize(function() {
		/* + 정사각형 썸네일 만들기 */
		var cardThumbWidth = $('.card-image').width();
		$('.card-image').height(cardThumbWidth);
		/* + 창 높이 가져와서 푸터 위치 맞추기 */
		var bodyHeight = $('body').height();
		var headerHeight = $('.header').outerHeight();
		var footerHeight = $('.footer').outerHeight();
		var contentHeight = bodyHeight - headerHeight - footerHeight;
		$('.contents-wrap').css('min-height', contentHeight);
	});
	
	/* 미리보기용 장바구니 버튼들 클릭시 장바구니 페이지로 이동 */
	$('.typcn-shopping-cart').parent('.btn').click(function(){
	   location.href = 'cart.html'; 
	});
	
	/* 슬라이더 제어용 */
    $('.recommend-artist .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: { items: 2 },
            375: { items: 3 },
            720: { items: 4 },
            1280: { items: 6 },
            1440: { items: 8 }
        }
    });
    $('.newest-album .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        margin: 10,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            375: { items: 2 },
            720: { items: 3 },
            1280: { items: 4 },
            1440: { items: 6 }
        }
    });
    
    /* 사이드 GNB 제어용 */
    $('.btn-sidebar').click(function(){
        $('body').toggleClass('sidebar-toggle');
        $(".sidebar").slideToggle();
    });
    
    /* 샘플 팝업 레이어 제어용 */
    $('.blind, .layer .layer-close').click(function(){
       $('.layer-set').fadeOut(); 
    });    $('.account-set button').click(function(){
       $('#welcome-layer').fadeIn('fast');
    });

    /* 샘플 코드용 페이지 이동 코드. 실제로 필요하지 않음 */
    $('.img-logo').click(function(){
	   location.href = 'index.html'; 
    });
});