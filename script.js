const input = document.querySelector('input')
const addbutton = document.querySelector('.addtodo > button')
const todos = document.querySelector('.todos')

addbutton.addEventListener('click', addTodo)

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault()
     document.getElementById("addbtn").click()
    }
});

const todoTemplate = (todo) => {
    const html = `<li>
    <input type="checkbox" id="check" onclick="myFunction(this)">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`
    todos.innerHTML += html
};

function addTodo() {
    const todo = input.value.trim(); 
    if (todo.length) {
        todoTemplate(todo)
        input.value = ''
    }
}
todos.addEventListener('click', deleteTodos);

function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}

function myFunction(x) {
    if(x.checked){
        x.classList.add('checked')
    }
    else{
        x.classList.remove('checked')
    }
}