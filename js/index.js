
let navButton = document.getElementsByClassName('nav-button')[0];
if(getComputedStyle(navButton).backgroundColor === 'rgb(47, 61, 84)'){
	let navOverlay = document.getElementsByClassName("nav-overlay")[0];
	document.getElementsByClassName('close-btn')[0].addEventListener('click', function(){
		navOverlay.style.height = "0%"
	})
	navButton.addEventListener('click', function(){
		navOverlay.style.height = "100%"
	})
}