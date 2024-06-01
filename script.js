const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

const addTask = ()=>{
    if(inputBox.value === ''){
        alert('Please enter a task!!')
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        //for cross icon
        let span = document.createElement('span')
        span.innerHTML = '\u00D7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveTask()
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
}, false)

const saveTask = ()=>{
    localStorage.setItem('tasks', listContainer.innerHTML)
}

const showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem('tasks')
}
showTask()