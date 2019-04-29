var loadCount = 0;
var doTitlePanelInteract = false;

$(document).ready(function() {
	load();
	initListeners();

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
	setTimeout(animTypewriter, timeout, ele, newText, timeout, pad, origText, curchar);
}

function showLinkboxCircle(ele) {
	var mocircle = $(ele.querySelector('.linkbox-mocircle'));
	mocircle.css('opacity',0.5);
	mocircle.css('height','20vh');
	mocircle.css('width','20vh');
	mocircle.css('margin-top','-23vh');
	mocircle.css('-webkit-border-radius','10vh');
	var icon = $(ele.querySelector('.linkbox-icon'));
	icon.css('margin-top','0vh');
}
function hideLinkboxCircle(ele) {
	var mocircle = $(ele.querySelector('.linkbox-mocircle'));
	mocircle.css('opacity',0.0);
	mocircle.css('height','8vh');
	mocircle.css('width','8vh');
	mocircle.css('margin-top','-17vh');
	mocircle.css('-webkit-border-radius','4vh');
	var icon = $(ele.querySelector('.linkbox-icon'));
	icon.css('margin-top','-8vh');
}

function animLinkboxSlideOut(ele) {
	var linkbox = $(ele.parentNode);
	var style = ele.currentStyle || window.getComputedStyle(ele, false);
	var url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	linkbox.css('background-image','url(' + url + ')');
	var sliders = linkbox.children(':not(#' + ele.id + ')');
	sliders.each(function() {
		$(this).css('transform','translateY(100%)');
	});
}
function animLinkboxSlideIn(ele) {
	var linkbox = $(ele.parentNode);
	var sliders = linkbox.children(':not(#' + ele.id + ')');
	sliders.each(function() {
		$(this).css('transform','translateY(0px)');
	});
}

function initListeners() {
	$('#title-panel').click(function() {
		if(doTitlePanelInteract == false) 
			return;
		window.scrollTo(0,$(window).height())
	});

	$('.linkbox-slate').mouseenter(function() {
		showLinkboxCircle(this);
	}).mouseleave(function() {
		hideLinkboxCircle(this);
	});
	
	$('.linkbox-mocircle').mouseenter(function() {
		if(this.style.opacity != 0)
			animLinkboxSlideOut(this.parentNode);
	}).mouseleave(function() {
		animLinkboxSlideIn(this.parentNode);
		//hideLinkboxCircle(this.parentNode);
	});
}