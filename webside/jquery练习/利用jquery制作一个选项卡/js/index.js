$(document).ready(function(){
	$(".level1 > a").click(function(){
		if($(this).hasClass("current")){
			$(this).removeClass("current")   //给当前元素添加"current"样式
			.next().hide();
		}else{
			$(this).addClass("current")   //给当前元素添加"current"样式
			.next().show()                //下一个元素显示
			.parent().siblings().children("a").removeClass("current")        //父元素的兄弟元素的子元素<a>移除"current"样式
			.next().hide();                //它们的下一个元素隐藏
		}
		return false;
	});
});