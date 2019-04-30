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
