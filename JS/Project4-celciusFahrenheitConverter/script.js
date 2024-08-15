const conv = document.querySelector('.conv')
const reset = document.querySelector('.reset')
const change = document.querySelector('.change')
const p = document.querySelector('p')
const input = document.querySelector('input')
const nrOne = document.querySelector('.one')
const nrTwo = document.querySelector('.two')
let tempIn = document.querySelector('#converter')
let tempOut

const fahrenheit = () => {
	tempOut = tempIn.value * 1.8 + 32
	p.textContent = `${tempIn.value} °C = ${tempOut.toFixed(1)} °F`
	p.style.color = 'white'
	input.value = ''
}

const celcius = () => {
	tempOut = (tempIn.value - 32) / 1.8
	p.textContent = `${tempIn.value} °F = ${tempOut.toFixed(1)} °C`
	p.style.color = 'white'
	input.value = ''
}

const resetBtn = () => {
	p.textContent = ''
}

const changeBtn = () => {
	if (nrOne.textContent === '°C') {
		nrOne.textContent = '°F'
		nrTwo.textContent = '°C'
		p.textContent = ''
	} else {
		nrOne.textContent = '°C'
		nrTwo.textContent = '°F'
		p.textContent = ''
	}
}

const changeBtn2 = () => {
	nrOne.classList = 'one'
	nrTwo.classList = 'two'
}

const checkValue = () => {
	if (tempIn.value !== '') {
		if (nrOne.textContent === '°C') {
			fahrenheit()
		} else {
			celcius()
		}
	} else {
		p.textContent = 'Podano błędne dane'
		p.style.color = 'red'
	}
}

conv.addEventListener('click', checkValue)
reset.addEventListener('click', resetBtn)
change.addEventListener('click', changeBtn, changeBtn)
/*let celcius
let temp

const fahrenheit = (c) => {

    celcius = c
    temp = celcius*1.8+32
    console.log(`${celcius} stopni celcjusza = ${temp} stopni fahrenheita`);
}

fahrenheit(20)
*/
