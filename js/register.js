$(function(){
	 	$("[data-toggle='popover']").popover();
	 	
	 	 $("#button").click(function(){
	if($("#userName").val() == "" || $("#password").val() =="" || $("#comfirmPass").val()=="" || $("#e-mial").valu() =="" || $("#phone").val() == "" || $("#comm").val() =="" || $("#Isauto").checked ){
		
		$(this).attr('href','#')
	}else{
		$(this).attr('href','login.html')
	}
})
});


var checkUsrename = function (){
	var userName = document.getElementById("userName").value;
	if(userName ==""){
		$("#userNameTip").popover("show");
	}else{
		$("#userNameTip").popover("hide")
	}
}

var checkPass = function(v){
	var reg = /^[a-z0-9_-]{6,20}$/;
	if(reg.test(v) && v!=0 ){
		$("#passwordTip").popover("hide")
	}else{
		$("#passwordTip").popover("show")
	}
}

var checkComfirm = function(v){
	var Pass = document.getElementById("password").value;
	if(v == Pass){
		$("#comfirmPassTip").popover("hide")
	}else{
		$("#comfirmPassTip").popover("show");
	}
}


var checkEmial = function(v){
	var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(reg.test(v) ){
		$("#e-mialTip").popover("hide")
	}else{
		$("#e-mialTip").popover("show")
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

var checkContact = function(v){
	var reg = /^1(3|4|5|7|8)\d{9}$/;
	if(reg.test(v)){
		$("#contactTip").popover("hide")
	}else{
		$("#contactTip").popover("show")
	}
}


 var checkComm = function(v){
	if(v!=""){
		$("#commTip").popover("hide")
	}else{
		$("#commTip").popover("show")
	}
 }



