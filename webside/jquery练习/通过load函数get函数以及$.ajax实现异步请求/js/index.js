$(function(){
	// $("#form0 input:submit").on("click",function(e){
	// 	e.preventDefault();
	// 	$("#content").load("testAjax.html #p0");
	// });
	
	// $("#form0 input:submit").on("click",function(e){
	// 	e.preventDefault();
	// 	// $.get("testAjax.html",function(response){
	// 	// 	$("#content").append(response.getElementById('p0'));
	// 	// });
	// 	$.post("testAjax.html",function(response){
	// 		$("#content").append(response.getElementById('p0'));
	// 	});
	// });
	
	$("#form0 input:submit").on("click",function(e){
		var details=$("form").serialize();
		$.ajax({
			type:"GET",
			url:"testAjax.html",
			timeout:2000,
			beforeSend:function(){
				alert('提交中，请稍等！');
			},
			success:function(data){
				console.log(details);
			},
			error:function(){
				alert("failed!");
			}
		});
	});
});