 // invert colour scheme
 var invert = document.querySelector('.invert')
 var body = document.querySelector('body')
 
invert.addEventListener('click', darkMode)

function darkMode() {
	body.classList.toggle('dark-mode')
	changeFont()

	if ( localStorage.getItem('mode') == 'dark' ) {
		localStorage.setItem('mode', 'light')
}else{
	localStorage.setItem('mode', 'dark')
}

}


if ( localStorage.getItem('mode') == 'dark' ) {
	body.classList.add('dark-mode')
}




var p = document.querySelector('p')
var altHi = [
	'“The alternative to good design is always bad design. There is no such thing as no design.” –Adam Judge',  
	'“Design is not just what it looks like and feels like. Design is how it works.” –Steve Jobs', '“It’s easier to ask forgiveness than it is to get permission.” Grace Hopper '
	]

if (localStorage.getItem('visited') ) {
	// ramdom quote
	var random = Math.floor( Math.random() * altHi.length  )

	p.textContent = altHi [random]


}else{

	localStorage.setItem('visited', 'true')


}






var _a = document.querySelector('.random-font')
var fonts = [
	"'comic sans', fantasy",
	"georgia, serif",
	"papyrus, fantasy",
	"helvetica, sans-serif",
	"impact, sans-serif",
	]

function changeFont() {
	var randomFont = Math.floor( Math.random() * fonts.length)
	_a.style.fontFamily = fonts[randomFont]
}
