var loadCount = 0;

$(document).ready(function() {
	load();
	
});

function load() {
	loadImage("img/tsevaya-pravitiko-blue.png",true);
	setTimeout(function() {
		loadImage("img/tsevaya-pravitiko-gray.png");
		loadImage("img/tsevaya-pravitiko-red.png");
	}, 3000);
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
	if(loadCount >= 1) {
		setTimeout(animTitlePage, 1000);
	}
}

function initListeners() {
	$('#title-panel').click(function() {
		if(doTitlePanelInteract == false) 
			return;
		window.scrollTo(0,$(window).height())
	});
	initLinkboxListeners();
}

function animTitlePage() {
	//text scrolls
	setTimeout(animTypewriter, 0, $('#title-text')[0],'Tsevaya Sovereignty',50,true);
	setTimeout(animTypewriter, 1000, $('#title-subtext')[0],'capitol: Pravitiko, Vershenna',40);
	//down arrow
	setTimeout(function() {$('#tarrow-down').css("opacity","1");},1900);
	setTimeout(function() {doTitlePanelInteract = true;},1700);
}