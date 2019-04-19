var loadCount = 0;

$(document).ready(function() {
	load();
	
});

function load() {
	var imgBack = new Image();
	imgBack.onload = function() {
		checkLoad();
	}
	imgBack.src = "img/back.png";
	
	var imgCerise = new Image();
	imgCerise.onload = function() {
		checkLoad();
	}
	imgCerise.src = "img/cerise.png";
}

function checkLoad() {
	loadCount++;
	if(loadCount >= 2) {
		setTimeout(animTitlePage,1000);
	}
}

function animTitlePage() {
	var tloadVershenna = $('#tload-vershenna');
	var tloadCinder = $('#tload-cinder');
	var tloadRomyshlen = $('#tload-romyshlen');
	var tgraphCerise = $('#tgraph-cerise');
	$('#tload-text').animate(
		{
			opacity: 0
		},
		500,
		function() {
			
		}
	);
	tloadVershenna.css('animation','unset');
	tloadCinder.css('animation','unset');
	tloadRomyshlen.css('animation','unset');
	//text scrolls
	setTimeout(animTypewriter, 1000, $('#title-text')[0],'Remnant',100,true);
	setTimeout(animTypewriter, 2000, $('#title-subtext')[0],'1,103,166 AD',100);
	setTimeout(animTypewriter, 4300, $('#title-subtext')[0],'1c2.a63 gc',60,true);
	//celestial movement
	tloadVershenna.css('transform','translateX(0vw)');
	tloadCinder.css('transform','translateX(0vw)');
	tloadRomyshlen.css('transform','translateX(0vw)');
	tgraphCerise.css('transform','translateX(-100vw)');
	setTimeout(function() {tloadVershenna.css('transform','translateX(-16vw)');},200);
	setTimeout(function() {tloadCinder.css('transform','translateX(-30vw)');},100);
	setTimeout(function() {tloadRomyshlen.css('transform','translateX(8vw)');},300);
	setTimeout(function() {tgraphCerise.css('transform','translateX(0vw)');},400);
	setTimeout(function() {tgraphCerise.css('opacity',1);},400);
	//down arrow
	setTimeout(function() {$('#tarrow-down').css("opacity","1");},3800);
}

function animTypewriter(ele, newText, timeout, pad = false, origText = "", curchar = 0) {
	if(curchar == 0) 
		origText = ele.textContent;
	curchar++;
	var untyped = newText.substr(0,curchar);
	if(pad) 
		untyped = untyped.padEnd(newText.length,origText);
	ele.textContent = untyped;
	if(curchar == newText.length) 
		return;
	setTimeout(animTypewriter,timeout,ele, newText, timeout, pad, origText, curchar);
}

//listeners/handlers