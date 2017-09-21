$(function(){
	var ulPageWidth=$("div.animation").width()-10;
	var page=0;
	$("div.navigator_dot>p").eq(page).addClass("current");
	$("span.next").click(function(){
		if(page==3){
			page=0;
			$("div.animation_content").stop(true,true).animate({left : '0'},1000);
		}else{
			$("div.animation_content").stop(true,true).animate({left:'-='+ulPageWidth},1000);
			++page;
		}
		$("div.navigator_dot>p").eq((page)).addClass("current").siblings().removeClass("current");
	})
	$("span.pre").click(function(){
		if(page==0){
			page=3;
			$("div.animation_content").stop(true,true).animate({left:'-='+ulPageWidth*3},1000);
		}else{
			--page;
			$("div.animation_content").stop(true,true).animate({left:'+='+ulPageWidth},1000);
		}
		$("div.navigator_dot>p").eq((page)).addClass("current").siblings().removeClass("current");
	})

})