$(function(){
	// 先取得#marquee ul
	// 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
	// append() 在被選元素的结尾（仍然在内部）插入指定内容。
	// html()   返回或設置被選元素的内容，如果未設置参數，則返回被選元素的當前内容。
	
	var ulul = $('#box ul')
	var	lili = ulul.append( ulul.html() ).children()
	var	TT
 
/*=========控制跑馬燈移動的處理函式=================*/
 	
	function GOGO(){
		
		var NOW = ulul.position().top / -25;
		NOW+=1
		
		ulul.animate({top: NOW * -25}, 600, function(){ if(NOW == lili.length/2){ulul.css("top",0)}  })
 
		TT = setTimeout(GOGO,3000);
	}

	GOGO();  //啟動計時器
 
	
/*=========當滑鼠移入時停止計時器；反之則啟動=========*/

	$("#box").hover(function(){
		clearTimeout(TT);
	}, function(){
		TT = setTimeout(GOGO,3000);
	});
	
	
	
	
});
