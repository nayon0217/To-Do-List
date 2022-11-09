const todoList = document.querySelector('.todo-list');
const submitBtn = document.querySelector('.submit-button');
const todoInput = document.querySelector('.todo-input');
const alertMsg = document.querySelector('.alert-msg');

alertMsg.style.display = 'none';

submitBtn.addEventListener('click',function(){
    if(todoInput.value.length == 0){
        alertMsg.style.display = 'block';
    }
    else{
        alertMsg.style.display = 'none';
        buttonFunction();
    }
})


function buttonFunction(){
    //create div
    const todoBlock = document.createElement('div');
    todoBlock.classList.add('todo-block');
    
    //create to do text (li)
    const todoElement = document.createElement('li');
    todoElement.innerText = todoInput.value
    todoElement.classList.add('item-element');
    todoElement.classList.add('todo-text');
    todoBlock.appendChild(todoElement);

    //create complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML='<i class="fa-solid fa-check"></i>';
    completeBtn.classList.add('complete');
    completeBtn.classList.add('item-element');
    todoBlock.appendChild(completeBtn);

    //create complete function
    completeBtn.addEventListener('click', function(){

        if(todoElement.classList.contains('finished-item')){
            todoElement.classList.remove('finished-item');
        }
        else{
            todoElement.classList.add('finished-item');
        }
    })


    //create edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.classList.add('edit');
    editBtn.classList.add('item-element');
    todoBlock.appendChild(editBtn);
    //create edit function
    editBtn.addEventListener('click',function(){
        const originalText = todoElement.innerText;
        console.log(originalText);
        const lineBreak = document.createElement('br')
        todoElement.style.display='none';

        todoBlock.prepend(lineBreak);

        const editSave = document.createElement('button');
        editSave.innerHTML='Save';
        todoBlock.prepend(editSave);

        const editSection = document.createElement('input');
        editSection.type= "text";
        editSection.value = originalText;
        todoBlock.prepend(editSection);   

        editSave.addEventListener('click',function(){
            todoElement.innerText = editSection.value;
            editSection.style.display = 'none';
            editSave.style.display = 'none';
            todoElement.style.display = 'block';
            lineBreak.style.display='none'
        })
        
    })

    //create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>'
    deleteBtn.classList.add('delete');
    deleteBtn.classList.add('item-element');
    todoBlock.appendChild(deleteBtn);

    //create delete function
    deleteBtn.addEventListener('click', function(){
        const deleteItem = deleteBtn.parentElement;
        deleteItem.remove();
    })
    //add div to ul
    todoList.appendChild(todoBlock);
    //clear input area
    todoInput.value= "";
}

