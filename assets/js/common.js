$(document).ready(function () {
	pcGnb1DepHover();
	footer();
    familySite();
	dataTab();

    
});
function pcGnb1DepHover() {
  $('.headerBottom .gnb').mouseover(function () {
    $(this).addClass('active');
    gnb_Open();
  });
  $('.header').mouseleave(function () {
    $(this).removeClass('active');
    gnb_Close();
  });
  $('.headerBottom .gnb > li').mouseover(function () {
    $('.headerBottom .gnb > li').removeClass('active');
    $(this).addClass('active');
  });
  $('.headerBottom .gnb li').mouseleave(function () {
    $(this).children('a').removeClass('hover');
  });
}
function gnb_Open() {
  $('.header').addClass('active');
}
function gnb_Close(){
	$('.header').removeClass('active');
}




function footer(){
	var swiper_footer = new Swiper('.footer .swiper-container', {
		loop: false,
		slidesPerView: 5,
		spaceBetween: 15,
		
		/*autoplay: {
			delay: 2000,
			disableOnInteraction: false,
			type:'fraction',
		},
		pagination: {
            el: '.footer .swiper-pagination',
            type: 'fraction',
        },
		navigation: {
			nextEl: '.footer .swiper-button-next',
			prevEl: '.footer .swiper-button-prev',
		},*/
		breakpoints: {
			1400: {
				slidesPerView: 5,		
				initialSlide: 0,

			},
			1200: {
				slidesPerView: 4,				
				initialSlide: 0,

			},
			800: {
				slidesPerView: 3,	
				initialSlide: 0,

			},
			720: {
				slidesPerView: 2,				
				initialSlide: 0,

			},
			// when window width is >= 480px
		},
	});
}

function familySite(){ 
    $('.sitemap').on({
        mouseover: function(){
            $(this).find('ul').slideDown("slow");
        },
        mouseleave: function(){
            $(this).find('ul').slideUp("slow");
        },
        click: function(){
            $(this).toggleClass('on');
        }
    });
  }


function dataTab(){
	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
	  $(this).children(".tabs li:first").addClass("active"); //Activate first tab
	  $(this).children(".tab_content").first().show();
	});
	//탭메뉴 클릭 이벤트
	$(".tabs ul li a").click(function () {
	  $(this).parent().siblings("li").removeClass("active");
	  $(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_content").hide();
	  var activeTab = $(this).attr("rel");
	   $("#" + activeTab).fadeIn();
	});
}

