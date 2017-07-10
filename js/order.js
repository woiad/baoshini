$(function(){
	$("table label input").bind("click",function(){
		if($(this).is(":checked")){
			$(this).parent().addClass("on")
		}else{
			$(this).parent().removeClass("on")
		}
	})
})
