$(function(){

	var BTN = $("#mobile_icon h3");
	var MENU = $("#menu");
	var DOCUMENT = $(document);

	BTN.on("touchstart click", AAA );
	
	$("a").on("touchstart click",CCC);
	function CCC(e){
		e.stopImmediatePropagation();
	}

	function AAA(e){
		MENU.show();
		var WW = DOCUMENT.innerWidth();
		var HH = DOCUMENT.innerHeight();
		MENU.css({ width:WW, minHeight:HH});
		MENU.on("touchstart click",BBB)
		return false;
		
	}
	
	
	
	function BBB(e){
		MENU.hide();
		MENU.off("touchstart click");
		return false;
		
	}
	
	$(window).on("resize", function(){
		var SIZE = $(window).innerWidth();
		if(SIZE>640){
			MENU.css({ display:"block",width:980, height:70, minHeight:70});
		}else{
			MENU.hide();
		}
	});
	
});
