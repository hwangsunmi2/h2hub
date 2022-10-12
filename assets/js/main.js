$(document).ready(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    css3: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth: 1200,

    /*'afterLoad': function (anchorLink, index) {
			if (index == 2) {
				$('#iphone3, #iphone2, #iphone4').addClass('active');
			}
		},

		'onLeave': function (index, nextIndex, direction) {
			if (index == 3 && direction == 'down') {
				$('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
			} else if (index == 3 && direction == 'up') {
				$('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
			}

			$('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
			$('#staticImg').toggleClass('moveDown', nextIndex == 4);
			$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
		}*/
  });

  firstSlide();
  secondSlide();
  mainTab();
  count();
  mMenu();

  $('.elem-statistics__inner').mouseover(function () {
    $(this).addClass('layout-full');
  });
  $('.elem-statistics__cont').hover(function () {
    $(this).toggleClass('elem-statistics__cont-hover');
  });
});

function firstSlide() {
  var firstswiper = new Swiper('.suso_main1 .mySwiper', {
    effect: 'fade',
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
    pagination: {
      el: '.suso_main1 .swiper-pagination',
      type: 'fraction',
      clickable: 'true',
    },
  });

  var bulletSwiper = new Swiper('.suso_main1 .mySwiper', {
    effect: 'fade',
    pagination: {
      el: '.pagination_bullet',
      type: 'bullets',
      clickable: 'true',
    },
  });

  firstswiper.controller.control = bulletSwiper;

  $('.suso_main1 .swiper-button-pause').click(function () {
    if ($(this).hasClass('off')) {
      $(this).removeClass('off');
      firstswiper.autoplay.start();
    } else {
      $(this).addClass('off');
      firstswiper.autoplay.stop();
    }
  });
}

function secondSlide() {
  var secondswiper = new Swiper('.secondSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.secondSwiper .swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      320: {
        spaceBetween: 17,
      },
      750: {
        spaceBetween: 30,
      },
    },
  });
}

function mainTab() {
  var $notice = $('.tab_wrap');
  var $noticeTab = $notice.find('h3');
  var $noticeCont = $notice.find('.tab_cont');

  $noticeTab.on('click focusin', function (e) {
    e.preventDefault();
    var tabID = this.id.split('_')[1];
    console.log('tabID', tabID);
    var $nListID = $('#list_' + tabID);
    if ($nListID.css('display') == 'none') {
      $noticeTab.removeClass('on');
      $noticeCont.css('display', 'none');
    }
    $(this).addClass('on');
    $nListID.css('display', 'block');
  });
}

function count() {
	$({ val : 0 }).animate({ val : 2339620 }, {
	  duration: 5000,
	  step: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num").text(num);
	  },
	  complete: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num").text(num);
	  }
	});

	$({ val : 0 }).animate({ val : 103 }, {
	  duration: 5500,
	  step: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num2").text(num);
	  },
	  complete: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num2").text(num);
	  }
	});

	$({ val : 0 }).animate({ val : 19404 }, {
	  duration: 5000,
	  step: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num3").text(num);
	  },
	  complete: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num3").text(num);
	  }
	});

	$({ val : 0 }).animate({ val : 32 }, {
	  duration: 5500,
	  step: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num4").text(num);
	  },
	  complete: function() {
		var num = numberWithCommas(Math.floor(this.val));
		$(".count_num4").text(num);
	  }
	});

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

}


function mMenu() {
  $('.m_sitemap').click(function () {
    $('body').toggleClass('fixed');
    $('.mMenu').toggleClass('active');
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  var menu = $('.overlay-menu ul li a');
  menu.click(function () {
    $('.depth2').slideUp();
    if ($(this).next().is(':hidden')) {
      $(this).parent().find(".depth2").slideDown();
    }
  });

}