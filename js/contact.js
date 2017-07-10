$(function(){
	 	$("[data-toggle='popover']").popover();
	 	
//	 	 $("#button").click(function(){
//	if($("#userName").val() == "" || $("#password").val() =="" || $("#comfirmPass").val()=="" || $("#e-mial").valu() =="" || $("#phone").val() == "" || $("#comm").val() =="" || $("#Isauto").checked ){
//		
//		$(this).attr('href','#')
//	}else{
//		$(this).attr('href','login.html')
//	}
//})
});


var checkUsrename = function (){
	var userName = document.getElementById("userName").value;
	if(userName ==""){
		$("#userNameTip").popover("show");
	}else{
		$("#userNameTip").popover("hide")
	}
}

var checkPhone = function(v){
	var reg = /^1(3|4|5|7|8)\d{9}$/;
	if(reg.test(v)){
		$("#phoneTip").popover("hide")
	}else{
		$("#phoneTip").popover("show")
	}
}
var checkEmial = function(v){
	var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(reg.test(v)){
		$("#e-mialTip").popover("hide")
	}else{
		$("#e-mialTip").popover("show")
	}
	
}

var checkMessage = function(v){
	if(v == ""){
		$("#e-mialTip").popover("show")
	}else{
		$("#e-mialTip").popover("hide")
	}
}

