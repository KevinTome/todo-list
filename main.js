const addToDoBtn = document.getElementById('addToDo')
const toDoContainer = document.getElementById('toDoContainer')
const inputField = document.getElementById('inputField')

addToDoBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerHTML = inputField.value

    toDoContainer.appendChild(paragraph)
    inputField.value = ''

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblClick', function(){
        toDoContainer.removeChild(paragraph)
    })
})