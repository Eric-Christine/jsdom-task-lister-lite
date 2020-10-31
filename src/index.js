document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submit_button = document.querySelector('#submit')
  console.log(submit_button)

  const submit_box = document.querySelector('#new-task-description')

  const ul = document.querySelector('#tasks')


  submit_button.addEventListener("click", function (e) {
    e.preventDefault()
    const new_list_item = document.createElement('li')
    new_list_item.textContent = submit_box.value
    ul.append(new_list_item)
  })
});
