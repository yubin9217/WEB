$(document).ready(function(){
	var y=0;
	var x=0;
	$diva=$("div").find("a");
	$diva.on("mouseover",function(e){
		console.log(this);
		this.oriTitle=this.title;
		$diva.attr("title","");
	 	$("body").append('<p class="pTip">'+this.oriTitle+'</p>');
	 	$("body>p[class=pTip]").css({
	 		"position":"absolute",
	 		"left":e.pageX ,
	 		"top":e.pageY 
	 	}).show("fast");
	}).on("mouseout",function(e){
		$diva.attr("title",this.oriTitle);
		$("body>p[class=pTip]").remove();
	}).mousemove(function(e){
		$("body>p[class=pTip]")
			.css({
				"position":"absolute",
				"top": (e.pageY) + "px",
				"left": (e.pageX)+ "px"
			});
	});
});