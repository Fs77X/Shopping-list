var input = document.getElementById('userinput')
var ul = document.querySelector('ul')
var button = document.getElementById('enter')
var doneBtns = document.getElementsByClassName('Done')

function crossOut (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done')
  }
}

function inputLength () {
  return input.value.length
}

function doneIt (doneBtns) {
  for (var i = 0; i < doneBtns.length; i++) {
    doneBtns[i].onclick = function () {
      var btn = this.parentElement
      btn.style.display = 'none'
    }
  }
}

function createListElement () {
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value))
  var button2 = document.createElement('button')
  button2.innerHTML = 'Delete!'
  button2.setAttribute('class', 'dlt')
  li.appendChild(button2)
  ul.appendChild(li)
  input.value = ''
  doneBtns = document.getElementsByClassName('dlt')
  doneIt(doneBtns)
}

function addListAfterClick () {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement()
  }
}

button.addEventListener('click', addListAfterClick)
input.addEventListener('keypress', addListAfterKeypress)
ul.addEventListener('click', crossOut)
