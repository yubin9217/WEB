$(document).ready(function(){
	var $category=$("ul li:gt(5):not(:last)");
	$category.hide();
	$toggleBtn=$(".button");
	$toggleBtn.click(function(e){
		if($category.is(":visible")){
			$category.hide();
		}else{
			$category.show();
		}
		console.log(e.target);
	})
})