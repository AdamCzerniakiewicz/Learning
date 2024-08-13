const plusBtn = document.querySelector('.sizeUp')
const minusBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const pTxt = document.querySelector('p')
let fontSize = 36

console.log(plusBtn);

const plusSize = () => {
	fontSize += 5
	pTxt.style.fontSize = fontSize + 'px'
}

const minusSize = () => {
	if (fontSize <= 21) return

	fontSize -= 5
	pTxt.style.fontSize = fontSize + 'px'
}

const changeColor = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	// pTxt.style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
	pTxt.style.color = `rgb(${r},${g},${b})`
}

plusBtn.addEventListener('click', plusSize)
minusBtn.addEventListener('click', minusSize)
colorBtn.addEventListener('click', changeColor)
