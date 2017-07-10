
$(function(){
	 	$("[data-toggle='popover']").popover();
});
var checkUser = function(v){
	var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(reg.test(v) ){
		$("#userNameTip").popover("hide")
	}else{
		$("#userNameTip").popover("show")
	}
}

var checkPassword = function(v){
	var reg = /^[a-z0-9_-]{6,20}$/;
	if(reg.test(v)){
		$("#passwordTip").popover("hide")
	}else{
		$("#passwordTip").popover("show")
	}
}

 var checkLogin = function(){
	var U_value = document.getElementById("userName").value;
	var P_value = document.getElementById("password").value;
	if(U_value == "" && P_value == ""){
		return false;
		
	}else{
			
			var IsAutoCheck = document.getElementById("IsautoCheck").checked;
			setCookie(U_value,P_value,IsAutoCheck);
			return true;
	    }
	
}
var setCookie = function(userName,password,IsAutoCheck){
			if(IsautoCheck){
				var now = new Date();
				now.setMonth(now.getMonth()+2);
				var exp = "expires="+now.toUTCString();
				document.cookie="userName="+userName+";"+exp+";path=/";
				document.cookie="password="+password+";"+exp+";path=/";
				document.cookie="IsAutoCheck=true;"+exp+";path=/";
			}else{
				document.cookie="userName=";
				document.cookie="password=";
				document.cookie="IsAutoCheck=";
			}
		}
		
		var loadCookie = function(){
			
			if(document.cookie.length>0){
				var cookies = document.cookie.split(";");
				var userNames = cookies[0].split("=");
				var passwords = cookies[1].split("=");
				var IsAutoChecks = cookies[1].split("=");
				
				document.getElementById("userName").value=userNames[1];
				document.getElementById("password").value=passwords[1];
				document.getElementById("IsautoCheck").checked=IsAutoChecks[1];
			}
		}