// $(function(){
// })
//filter()里面填入选择器
$(document).ready(function(){
	var ch=$("form>input[type=checkbox]")[0];
		function alertChecked(obj) {
		if(obj.checked){
			alert("同意!");
		}
	}

	// ch.onclick=function(){
	// 	alertChecked(ch);
	// }
	ch.addEventListener("click",function(){alertChecked(ch)},false);
})
