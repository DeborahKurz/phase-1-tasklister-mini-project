document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTasks(e.target.newTaskDescription.value)
    form.reset()
  })
});

function buildTasks(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', causeDelete)
  btn.textContent = 'x'
  p.textContent = `${toDo}  `
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p)
}

function causeDelete(e){
  e.target.parentNode.remove()
}