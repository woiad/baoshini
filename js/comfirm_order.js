$(document).ready(function(){
	$(".content .order label").click(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on")
	})
})
	
$(function(){
	var cont = function(){
		var len1 = $("tbody input[type=checkbox]").length;
		var len2 = $("tbody input[type=checkbox]:checked").length;
		return len1-len2; 
	}
    var total = function(){
         
		
	}
		$(".add").click(function(){
			var num = parseInt($(this).siblings(".prd_num").val());
			++num;
			if(num>99){
				num=99;
			}
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(2) ").text().replace(/￥/i,""));
			$(this).parents().siblings(".cont").text("￥"+tdV3*num +".00");
			$(".order p>strong").text("￥"+tdV3*num +".00");
			$(this).siblings(".prd_num").val(num);
			total();
		})
		$(".reduce").click(function(){
			var num = parseInt($(this).siblings(".prd_num").val());
			--num;
			if(num<1){
				num=1;
			}
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(2) ").text().replace(/￥/i,""));
			$(this).parents().siblings(".cont").text("￥"+ tdV3*num +".00");
			$(".order p>strong").text("￥"+tdV3*num +".00");
			$(this).siblings(".prd_num").val(num);
			total();
		})
		$("thead input").click(function(){
			if($(this).is(":checked")){
				$("tbody input[type=checkbox]").prop("checked","checked");
				total();
			}else{
				$("tbody input[type=checkbox]").removeAttr("checked")
				total();
			}
			
		})
        $("tbody input[type=checkbox]").bind("click",function(){
			if(!cont()){
				$("thead input").prop("checked","checked");
			}else{
				$("thead input").removeAttr("checked");
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
			var tdV3 = parseInt($(this).parents().siblings("td:nth-child(2)").text().replace(/￥/i,""));	
				$(this).parents("td").siblings(" td:nth-child(5)").text("￥"+tdV3*numA);
				$(".order p>strong").text("￥"+tdV3*numA +".00");
			
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
