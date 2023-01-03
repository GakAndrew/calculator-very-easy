const inputANode = document.querySelector('.js-input-a')
const inputBNode = document.querySelector('.js-input-b')
const btnResultNode = document.querySelector('.js-btn-result')
const selectOperation = document.querySelector('.js-select-operation')
const outputNode = document.querySelector('.js-output')

btnResultNode.addEventListener('click', function () {
	const a = Number(inputANode.value)
	const b = Number(inputBNode.value)
	const operation = selectOperation.value

	const resultat = calculator({
		a,
		b,
		operation,
	})

	outputNode.innerHTML = resultat
})
