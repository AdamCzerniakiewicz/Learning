const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Masz wszystko'
		p.style.color = 'lime'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'Brakuje znaku specjalnego'
		p.style.color = 'gold'
	} else if (pass.value.length > minValue && pass.value.match(letters)) {
		p.textContent = 'Brakuje cyfr i znaków specjalnychy'
		p.style.color = 'orange'
	} else if (pass.value.length > minValue) {
		p.textContent = 'Długość odpowiednia, ale czegoś tu brakuje'
		p.style.color = 'red'
	} else {
		p.textContent = 'Za mało wszystkiego'
		p.style.color = 'pink'
	}
}

const checkPassword = () => {
	if (pass.value !== '') {
		showMsg()
	} else {
		p.textContent = 'Nie podałeś hasła...'
		p.style.color = ''
	}
}

pass.addEventListener('keyup', checkPassword)
