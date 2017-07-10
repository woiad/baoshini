
window .onload = function(){
	var num = document.getElementById("num");
	
}
function add(){
	if(num.value>=99){
		return;
	}
	var value = document.getElementById("num").value;
	if( isNaN(value)){
		document.getElementById("num").value = 1;
		return;
	}else{
		num.value++;	
	}

}
function reduce(){
	if(num.value<=1){
		return;
	}else{
		var value = document.getElementById("num").value;
		if(isNaN(value)){
			document.getElementById("num").value = 1;
		return;
		}else{
		 	num.value--;	
		}
		
	}
	
}

function change(v){
	if(isNaN(v)){
		document.getElementById("num").value = 1;
		return;
	}
}

