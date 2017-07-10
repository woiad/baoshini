



$(function(){
	var cont = function(){
		var len1 = $("tbody input[type=checkbox]").length;
		var len2 = $("tbody input[type=checkbox]:checked").length;
		return len1-len2; 
	}
    var total = function(){
		var check = $("tbody input[type=checkbox]:checked");
		var a = 0;
		for(var i=0;i<check.length;i++){
                a+=parseInt(check.eq(i).parents("td").siblings("td:nth-child(6)").text().replace(/￥/i,""))	
		}
		$(".total p>span").text("￥"+a.toFixed(2));
	}
		$(".add").click(function(){
			var num = parseInt($(this).siblings(".prd_num").val());
			++num;
			if(num>99){
				num=99;
			}
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(3) ").html().replace(/￥/i,""));
			$(this).parents().siblings(".cont").text("￥"+tdV3*num+".00" );
			$(this).siblings(".prd_num").val(num);
			total();
		})
		$(".reduce").click(function(){
			var num = parseInt($(this).siblings(".prd_num").val());
			--num;
			if(num<1){
				num=1;
			}
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(3) ").html().replace(/￥/i,""));
			$(this).parents().siblings(".cont").text("￥"+ tdV3*num +".00" );
			$(this).siblings(".prd_num").val(num);
			total();
		})
		$("thead label input").click(function(){
			if($(this).is(":checked")){
				$(".c-checkbox").addClass("on")
				$("tbody .c-checkbox input").prop("checked",true)
				total();
			}else{
				$(".c-checkbox").removeClass("on")
				$("tbody .c-checkbox input").prop("checked",false)
				total();
			}
			
		})
		$("tbody label input").bind("click",function(){
			if($(this).is(":checked")){
				$(this).parent().addClass("on")
			}else{
				$(this).parent().removeClass("on")
			}
		})
		
		
		
        $("tbody input[type=checkbox]").bind("click",function(){
			if(!cont()){
				$("thead input").prop("checked","checked").parent().addClass("on");
			}else{
				$("thead input").removeAttr("checked").parent().removeClass("on");
			}
			total();
		})
        $("tbody .count input").change(function(){
			var numA = $(this).val();
			if(isNaN(numA)){
				numA=1;
			}else if(numA>99){
				numA=99;
			}else if(numA<1){
				numA=1;
			}
			numA = Math.round(numA);
			$(this).val(numA);
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(3)").html().replace(/￥/i,""));	
				$(this).parents("td").siblings(" td:nth-child(6)").text("￥"+tdV3*numA);
			
			total();
		})
})
$(document).ready(function(){
	$(".del a").click(function(){
		if(confirm("亲！你确定要删除吗？")){
			$(this).parents("tr").remove();
		}
		
	});
});