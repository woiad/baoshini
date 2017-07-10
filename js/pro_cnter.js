$(function(){
	$(".pic_cut>ul>li>img").click(function(){
		var src = $(this).attr("src");
		$(".pic_cut img.big_pic").attr("src",src)
	})
	$(".swich_top>ul>li").each(function(index,element){
		$(this).click(function(){
			$(".swich_top li.on").removeClass();
	   	    $(this).addClass(".on");
	   	    $(".swich_con li").hide().eq(index).show();
		})
	})
	$(".color a").click(function(){
			$(this).parent().addClass("active");
			$(this).parent().siblings().removeClass("active")
	})
	$(".size i").bind("click",function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active")
	})
})
