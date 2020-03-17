$(function(){
	
	var N=16;
	
	$("#BBB").click(function(){
		
		N+=1;
		
		$("#CON_BOX").css({"font-size":N+"px","color":"#090"})
		
		
		
	})
	
	$("#MMM").click(function(){
		
		
		N=16;
		$("#CON_BOX").css({"font-size":N+"px","color":""})
		
		
		
	})
	
	
	
	$("#SSS").click(function(){
		
		N-=1;
		
		$("#CON_BOX").css({"font-size":N+"px","color":""})
		
		
		
	})
	
	
	
	
})