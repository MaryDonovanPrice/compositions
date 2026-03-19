const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')
const mary = document.getElementById('mary')
// const top = document.getElementByClass('top')


function toggleButton() {
	navList.classList.toggle('show')
	hamburgerButton.classList.toggle('show')
	mary.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
