$(document).ready(function(){
	var textVal0=$("#form0 :text").val();
	console.log(textVal0);


	var textVal1=$("#form0 :text:eq(1)").val();
	console.log(textVal1);

 	//获取的form标签底下:text类型元素的个数
	// var textlen=$("#form0 :text").length;
	// console.log(textVal1len);

	var textVal1Length=$("#form0 :text:eq(1)").val().length;
	console.log(textVal1Length);
})