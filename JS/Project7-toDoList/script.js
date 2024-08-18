let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania'
	}
}

/*          SAM TO DO CHUJA ZROBIŁEM ZGODNIE Z TYM CO MNIE TEN SIUR NAUCZYŁ! BRAWA DLA MNIE
const createToolsArea = () => {
    const newToolDiv = document.createElement('div')
    newToolDiv.classList = 'tools'
    newTodo.append(newToolDiv)

    const newToolDivButtonComplete = document.createElement('button')
    newToolDivButtonComplete.classList = 'complete'
    newToolDiv.append(newToolDivButtonComplete)
    i1 = document.createElement('i')
    i1.classList = 'fas fa-check'
    newToolDivButtonComplete.append(i1)

    const newToolDivButtonEdit = document.createElement('button')
    newToolDivButtonEdit.classList = 'edit'
    newToolDivButtonEdit.textContent = 'EDIT'
    newToolDiv.append(newToolDivButtonEdit)

    const newToolDivButtonDelete = document.createElement('button')
    newToolDivButtonDelete.classList = 'delete'
    newToolDiv.append(newToolDivButtonDelete)
    i2 = document.createElement('i')
    i2.classList = 'fas fa-times'
    newToolDivButtonDelete.append(i2)
}
*/

const createToolsArea = () => {
	const newToolDiv = document.createElement('div')
	newToolDiv.classList.add('tools')
	newTodo.append(newToolDiv)

	const newToolDivButtonComplete = document.createElement('button')
	newToolDivButtonComplete.classList.add('complete')
	newToolDivButtonComplete.innerHTML = '<i class="fas fa-check"></i>'

	const newToolDivButtonEdit = document.createElement('button')
	newToolDivButtonEdit.classList.add('edit')
	newToolDivButtonEdit.textContent = 'EDIT'

	const newToolDivButtonDelete = document.createElement('button')
	newToolDivButtonDelete.classList.add('delete')
	newToolDivButtonDelete.innerHTML = '<i class="fas fa-times"></i>'

	newToolDiv.append(newToolDivButtonComplete, newToolDivButtonEdit, newToolDivButtonDelete)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść'
	}
}

const deleteTodo = e => {
	e.target.closest('li').remove()

	const allTodos = ulList.querySelectorAll('li')

	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań'
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addNewTodo()
	}
}
document.addEventListener('DOMContentLoaded', main)
