const input = document.getElementById('input')
const list = document.getElementById('list')

input.addEventListener('keypress', event => {
  if (event.key === "Enter") {
    const li = document.createElement('li')
    const task = createSpan(input.value,'task')
    const remove = createSpan('удалить','remove')
    const mark  = createSpan('сделано','mark')

    li.append(task,remove,mark)
    list.append(li)

    remove.addEventListener('click', function() {
      li.remove()
    })

    mark.addEventListener('click', function() {
      task.classList.add('done')
    })

    task.addEventListener('dblclick', function() {
      const input = document.createElement('input')
      input.value = task.innerText
      task.innerText = ''
      task.append(input)
      input.addEventListener('keypress', event => {
        if (event.key === "Enter") {
          task.innerText = input.value
        }
      })
    })
    input.value = ''
  }
})

function createSpan(text,nameClass) {
  const span = document.createElement('span')
  span.classList.add(nameClass)
  span.innerText = text
  return span
}