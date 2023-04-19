const adicionar = document.querySelector('.new-task-button')
const buttunInput = document.querySelector('.new-task-input')
const tasksContainer = document.querySelector('.tasks-container')

const criarTarefa = (e) => {
    const paragrafo = document.createElement('p')
    const divNova = document.createElement('div')
    const icon = document.createElement('i')
    paragrafo.addEventListener('click',() => handleClick(paragrafo))
    icon.addEventListener('click',() => handleDeleteClick(divNova,paragrafo))
    icon.classList.add("far")
    icon.classList.add("fa-trash-alt")
    divNova.classList.add('task-item')
    paragrafo.innerText += buttunInput.value    
    tasksContainer.appendChild(divNova)
    divNova.appendChild(paragrafo)
    divNova.appendChild(icon)
    buttunInput.value = ''
    updateLocalStore()
    
}
const handleClick = (paragrafo) => {
  const tasks = tasksContainer.childNodes;
  for(const task of tasks){
    if(task.firstChild.isSameNode(paragrafo)){
       task.firstChild.classList.toggle('completed')
    }
  }
  updateLocalStore()
}

const handleDeleteClick = (divNova,paragrafo) => {
     const tasks = tasksContainer.childNodes;
     for(const task of tasks){
      if(task.firstChild.isSameNode(paragrafo)){
        divNova.remove()
      }
     }
     updateLocalStore()
}
const updateLocalStore = () => {
  const tasks = tasksContainer.childNodes;

  const localStoregeTasks = [...tasks].map((task) => {
    const content = task.firstChild;
    const isCompleted = content.classList.contains('completed');

    return { description: content.innerText, isCompleted};
  });
  console.log(localStoregeTasks)
  localStorage.setItem('tasks', JSON.stringify(localStoregeTasks))
}

const refreshTaskLocalStorege = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'))
  if(!tasksFromLocalStorage) return;
  for(const task of tasksFromLocalStorage){
    const paragrafo = document.createElement('p')
    const divNova = document.createElement('div')
    const icon = document.createElement('i')
    paragrafo.addEventListener('click',() => handleClick(paragrafo))
    icon.addEventListener('click',() => handleDeleteClick(divNova,paragrafo))
    icon.classList.add("far")
    icon.classList.add("fa-trash-alt")
    divNova.classList.add('task-item')
    paragrafo.innerText += task.description   
    if(task.isCompleted){
      paragrafo.classList.add('completed')
    }
    tasksContainer.appendChild(divNova)
    divNova.appendChild(paragrafo)
    divNova.appendChild(icon)
  }
}
refreshTaskLocalStorege()
//https://www.youtube.com/watch?v=0bNeKAzVvlE

adicionar.addEventListener('click', criarTarefa)