// $(function(){
// })
//filter()里面填入选择器
$(document).ready(function(){
	$("form>input").filter("[type=submit]").css("color","red").on("click",function(e){
		e.preventDefault();
		if($("form>input").filter("[type=checkbox]").is(":checked")){
			alert("同意！");
		}
	});
})
