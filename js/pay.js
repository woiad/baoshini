$(function(){
	$(".invoice .radio label").bind("click",function(){
		$(this).addClass("on")
		$(this).siblings().removeClass("on")
	})
	
})
$(function(){
	$(".pay label input").bind("click",function(){
		
	    if($(this).is(":checked")){
	    	$(this).parent().addClass("on")
	    }else{
	    	$(this).parent().removeClass("on")
	    }
	})
})


$(function(){
	$('.form li input').keyup(function(e){
		var index = $(this).parent().index()
		index++;
		$('.form ul li').eq(index).find('input').focus()
		if(e.keyCode == 8){
			var index = $(this).parent().index()
			$(this).val().length = null
			$(this).blur
			$('.form ul li').eq(index-1).find('input').focus()
			if(!index==1){
				$('.form ul li').eq(0).find('input').focus()
			}
		}
	})
})


$(function(){
	$(".check_pay a").bind("click",function(){
		if($(".pay_bottom li input").val() ==""){
			$(this).attr("href","###")
		}else{
			if(confirm("亲，您确认支付吗？")){
				$(this).attr("href","pay_for_success.html")
			}else{
				$(this).attr("href","pay_failue.html")
			}
		}
	})
})
