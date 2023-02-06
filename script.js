// Search Todo process
var search_input = document.querySelector('#search-input');

search_input.addEventListener('keyup', e =>{
    var search_value = search_input.value;
    var todo_objects = document.querySelectorAll('.todo-object');
    Array.from(todo_objects).forEach(todo => {
        if(!(todo.innerText.includes(search_value))){
            todo.classList.add('d-none');
        }
        else{
            todo.classList.remove('d-none');
        }
    })
})



// Delete Todo object
var todo_list = document.querySelector('.todo-list');


// Below function is full of bugs and problem:
// var todo_delete_trash = document.querySelectorAll('.todo-delete > i');
// Array.from(todo_delete_trash).forEach(trash => {
//     trash.addEventListener('mouseover', e => {
//         e.preventDefault();
//         // 2 following lines are the same
//         // trash.style.cursor = 'pointer';
//         e.target.style.cursor = 'pointer';
//         e.target.addEventListener('click', e => {
//             e.target.parentNode.parentNode.remove();
//         })
//     })
// })


// Below block is useless. Because this block only executed for 'THE TODOs ALREADY THERE FROM THE START' and does not contain
// the todos we will create in future with 'new-todo' input. It means if we append a new todo to our 'todo-list', the below
// function won't be executed and mouse pointer does not changed on the trash can icon.
// To fix this we must execute the function on 'todo-list' queryselect that is parent to 'todo-delete' queryselect.
// WRONG WAY TRASH CAN POINTER: START
// var todo_delete_trash = document.querySelectorAll('.todo-delete > i');
// console.log(document.querySelectorAll('.todo-delete > i').length);
// Array.from(todo_delete_trash).forEach(trash => {
//     trash.addEventListener('mouseover', e => {
//         e.preventDefault();
//         // 2 following lines are the same
//         // trash.style.cursor = 'pointer';
//         e.target.style.cursor = 'pointer';
//     })
// })
// WRONG WAY TRASH CAN POINTER: END

// Change mouse cursor on trash can
todo_list.addEventListener('mouseover', e => {
    e.preventDefault();
    // Following 2 lines do the same thing
    if (e.target.classList.contains('delete')){
    // if (e.target.nodeName == 'I'){
        e.target.style.cursor = 'pointer';
    }
})

// Click on the trash can to remove the todo object
todo_list.addEventListener('click', e => {
    e.preventDefault();
    // Following 2 lines do the same thing
    // if (e.target.classList.contains('delete')){
    if (e.target.nodeName == 'I'){
        // Following 2 lines do the same thing
        e.target.parentElement.parentElement.remove();
        // e.target.parentNode.parentNode.remove();
    }
})



// Add new Todo object
var todo_list = document.querySelector('.todo-list');
var new_todo = document.querySelector('#new-todo');

new_todo.addEventListener('keyup', e => {
    e.preventDefault();
    if (e.key == 'Enter' && new_todo.value){
        todo_list.innerHTML += `<div class="todo-object d-flex my-1 justify-content-between align-items-center  col-lg-4 col-md-6 col-sm-10 col-10">
        <div class="todo-text text-white col-lg-10 col-md-9 col-sm-10 col-9">
            <p>${new_todo.value.trim()}</p>
        </div>
        <div class="todo-delete col-lg-2 col-md-3 col-sm-2">
            <i class="fa fa-trash-o delete" style="font-size:24px"></i>
        </div>
    </div>`;
    new_todo.value = '';
    }
})
