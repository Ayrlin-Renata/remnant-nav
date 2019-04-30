var loadCount = 0;
var doTitlePanelInteract = false;

$(document).ready(function() {
	load();
});

function load() {
	loadImage("img/back.png",true);
	loadImage("img/cerise.png",true);
	loadImage("img/outer-belt.png",true);
	setTimeout(function() {
		loadImage("img/tsevaya-pravitiko-gray.png");
		loadImage("img/tsevaya-pravitiko-blue.png");
		loadImage("img/tsevaya-pravitiko-red.png");
	}, 5000);
	initListeners();
}

function loadImage(url,primaryLoad = false) {
	var img = new Image();
	if(primaryLoad) {
		img.onload = function() {
			checkLoad();
		}
	}
	img.src = url;
}

function checkLoad() {
	loadCount++;
	if(loadCount >= 3) {
		setTimeout(animTitlePage, 1000);
	}
}

function animTitlePage() {
	var tlcSlate = $('#tlc-slate');
	var tlvSlate = $('#tlv-slate');
	var tlrSlate = $('#tlr-slate');
	var tloadCinder = $('#tload-cinder');
	var tloadVershenna = $('#tload-vershenna');
	var tloadRomyshlen = $('#tload-romyshlen');
	var tgraphCerise = $('#tgraph-cerise');
	var tgraphOuterBelt = $('#tgraph-outer-belt');
	$('#tload-text').animate(
		{
			opacity: 0
		},
		500,
		function() {
			
		}
	);
	//text scrolls
	setTimeout(animTypewriter, 1000, $('#title-text')[0],'Remnant',100,true);
	setTimeout(animTypewriter, 2350, $('#title-subtext')[0],'1,103,166 ad',90);
	setTimeout(animTypewriter, 4100, $('#title-subtext')[0],'1c2.a63 gc',60,true);
	//celestial movement
	tlcSlate.css('transform','translateX(0vw)');
	tlvSlate.css('transform','translateX(0vw)');
	tlrSlate.css('transform','translateX(0vw)');
	tgraphCerise.css('transform','translateX(-70vw)');
	tgraphOuterBelt.css('transform','translateX(70vw)');
	setTimeout(function() {tgraphOuterBelt.css('transform','translateX(0vw)');},100);
	setTimeout(function() {tgraphOuterBelt.css('opacity',1);},100);
	setTimeout(function() {tgraphCerise.css('transform','translateX(0vw)');},200);
	setTimeout(function() {tgraphCerise.css('opacity',1);},200);
	setTimeout(function() {
		tloadCinder.css('animation','unset');
		tlcSlate.css('transform','translateX(-30vw)');
	},300);
	setTimeout(function() {
		tloadVershenna.css('animation','unset');
		tlvSlate.css('transform','translateX(-16vw)');
	},400);
	setTimeout(function() {
		tloadRomyshlen.css('animation','unset');
		tlrSlate.css('transform','translateX(10vw)');
	},500);
	//markerlines
	var vpWidth = $(document).width();
	var basisWidth = $("#tlcs-desc").width();
	if(vpWidth/basisWidth > 8.6) { 
		setTimeout(function() {$('.markerline').css("opacity","1");},2000);
		setTimeout(function() {$('.ml-label').css("opacity","1");},2000);
		setTimeout(function() {$('.ml-desc').css("opacity","1");},2000);
	}
	//down arrow
	setTimeout(function() {$('#tarrow-down').css("opacity","1");},3800);
	setTimeout(function() {doTitlePanelInteract = true;},4500);
}

function initListeners() {
	$('#title-panel').click(function() {
		if(doTitlePanelInteract == false) 
			return;
		window.scrollTo(0,$(window).height())
	});
	initLinkboxListeners();
}