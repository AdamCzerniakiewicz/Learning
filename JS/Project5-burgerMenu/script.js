const burgerBtn = document.querySelector('.burger')
const burgerOpen = document.querySelector('.fa-bars')
const burgerClose = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const hideBurger = () => {
	nav.classList.toggle('active')
	burgerClose.classList.toggle('hide')
	burgerOpen.classList.toggle('hide')
	burgerBtn.classList.toggle('active')
}

burgerBtn.addEventListener('click', hideBurger)
