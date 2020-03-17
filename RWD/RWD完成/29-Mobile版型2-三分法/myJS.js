$(function(){
	
	$("header h4").on("touchstart click",show);
	
	function show(event){
		$("header nav").slideToggle(300);
		$("#content").on("touchstart click",hide);
		event.preventDefault();
	}
	
	function hide(event){
		$("header nav").slideUp(300);
		$("#content").off("touchstart click");
		event.preventDefault();
	}
	
})