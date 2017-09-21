$(function(){
	// $("div").css("opacity","1");
	// $("div").animate({
	// 	left:"-20px"
	// },500)
	// .animate({top:"200px"},500)
	// .animate({opacity:"1"},500,function(){
	// 	$("div>p").animate({height:"show"},500);
	// })
	// //$("div>p").delay(1500).animate({height:"show"},500)这里该使用回调函数来实现排队
	$("div>h3").hover(function(){
		$("div>p").stop(true,true).animate({height:"show"},500);
	},function(){
		$("div>p").stop(true,true).animate({height:"hide"},500);
	})

})