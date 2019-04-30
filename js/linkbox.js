function showLinkboxCircle(ele) {
	var mocircle = $(ele.querySelector('.linkbox-mocircle'));
	mocircle.css('opacity',0.4);
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

//call this from page script init
function initLinkboxListeners() {
	$('.linkbox-slate').mouseenter(function() {
		showLinkboxCircle(this);
	}).mouseleave(function() {
		hideLinkboxCircle(this);
	});
	
	$('.linkbox-mocircle').mouseenter(function() {
		if(this.style.opacity != 0) {
			animLinkboxSlideOut(this.parentNode);
			$(this).css('opacity',0.5);
		}
	}).mouseleave(function() {
		animLinkboxSlideIn(this.parentNode);
		$(this).css('opacity',0.4);
		//hideLinkboxCircle(this.parentNode);
	}).click(function() {
		var href = this.textContent;
		window.location = href;
	});
}