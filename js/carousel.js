$(document).ready(function(){
	$(".carousel").carousel({
		interval:3000
	})

})

$(document).ready(function(){
				$("#myCarousel").swipe({
					swipeLeft:function(){$(this).carousel("next")},
					swipeRight:function(){$(this).carousel("prev")},
					excludedElements:"button,input,select,textarea,noSwipe"
				})
})