var elForm = document.querySelector('.run-form') //forma
var elNumberInput = elForm.querySelector('.number-input') //number input
var elRainInput = elForm.querySelector('.rain-input') // yomgirli input
var elGymInput = elForm.querySelector('.gym-input') //zal input
var elTextResult = document.querySelector('.text-result') //text

var func = function (evt) {
  evt.preventDefault();

  var userInput = elNumberInput.value.trim()

  if (elNumberInput.value.trim() === '') {
    if (userInput.length === 0) {
      elNumberInput.classList.add('is-invalid')
      return
    }
  }
  var temperature = parseFloat(userInput, 10)

  if (isNaN(temperature)) {
    elNumberInput.classList.add('is-invalid')
    return
  }
  elNumberInput.classList.remove('is-invalid')

  if (elNumberInput.value < 5 && elGymInput.checked && elRainInput.checked) {
    elTextResult.textContent = `Yo'q`
    return
  }

  if (elNumberInput.value < 5 && elGymInput.checked) {
    elTextResult.textContent = `Ha`
    return
  }

  if (elNumberInput.value >= 5 && elRainInput.checked) {
    elTextResult.textContent = `Yo'q`
    return
  }

  if (elNumberInput.value >= 5 && elNumberInput.value <= 30 && elGymInput.checked) {
    elTextResult.textContent = `Ha`
    return
  }

  if (elNumberInput.value > 30 && elGymInput.checked && elRainInput.checked) {
    elTextResult.textContent = `Yo'q`
    return
  }
}


elForm.addEventListener('submit', func)
elNumberInput.addEventListener('change', func)
elRainInput.addEventListener('change', func)
elGymInput.addEventListener('change', func)