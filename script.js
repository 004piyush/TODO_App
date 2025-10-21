// Select dom elements

const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

// load save todos from local storage
const saved = localStorage.getItem('todos')
const todos = saved ? JSON.parse(saved) : [];

function saveTodo(){
    // save current todos array to localStorage
    localStorage.setItem('todos',JSON.stringify(todos))
}

//Create a dom node for a todo object and append it to the list 

function createTodoNode(todo, index) {
    const li = document.createElement('li');

    // checkbox to toggle completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        
    })

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    textSpan.style.margin = "10px"
    if(todo.completed){
        textSpan.style.textDecoration = 'line-through'

        textSpan.addEventListener("dblclick",()=>{
            const newText = prompt("Edit todo",todo.text)
        })

    }

}

//Render the whole todo list from todos array
function Render(){

    list.innerHTML = ''

    todos.forEach((todo,index) => {
        const node = createTodoNode(todo,index)
        list.appendChild(node)
    });



}