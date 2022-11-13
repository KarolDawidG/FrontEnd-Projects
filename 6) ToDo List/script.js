let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
let $alertInfo; // info o braku zadań / konieczności dodania tekstu
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodany LI, nowe zadanie
let $allTasks; // lista wszystkich dodanych LI
let $idNumber = 0; // ID dodawane do każdego nowego zadania
let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; //tekst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn //przycisk od zamykania popup'a

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input');
    $alertInfo = document.querySelector('.alert-info');
    $addBtn = document.querySelector('.add-btn');
    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keyup', enterCheck);
    $ulList.addEventListener('click', checkClic);
    $addPopupBtn.addEventListener('click', changeToDo);
    $closeTodoBtn.addEventListener('click', closePopup);
}

const addNewTask = () => {
   if($todoInput.value !== ''){
    $idNumber++;
    $newTask = document.createElement('li');
    $newTask.innerText = $todoInput.value;
    $newTask.setAttribute('id', `todo-${$idNumber}`);
    $ulList.appendChild($newTask);

    $todoInput.value = '';
    $alertInfo.innerText = '';
    createToolsArea();
   } else {
    $alertInfo.innerText = 'Enter the content of the task!'
   }
}

const enterCheck = () => {
    if (e.keyCode === 13){
        addNewTask();
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = 'Complet';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';

    const deleteeBtn = document.createElement('button');
    deleteeBtn.classList.add('delete');
    deleteeBtn.innerHTML = 'DEL';
    
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteeBtn);
}

const checkClic = (e) => {
        if (e.target.classList.value !== '') {
            if (e.target.closest('button').classList.contains('complete')) {
                e.target.closest('li').classList.toggle('completed');
                e.target.closest('button').classList.toggle('completed');
            } else if (e.target.closest('button').classList.contains('edit')) {
                editTask(e);
            } else if (e.target.closest('button').classList.contains('delete')) {
                deleteTask(e);
            }
        }
    }

const deleteTask = (e) => {
    const deleteToDo = e.target.closest('li');
    deleteToDo.remove();

if($allTasks.length === 0){
    $alertInfo.innerText = 'No tasks on the list!'
}
}

const editTask = (e) => {
    const oldToDo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldToDo);
    $popupInput.value = $editedTodo.firstChild.textContent;

    $popup.style.display = 'flex';
}

const changeToDo = () => {
    if($popupInput.value !== ''){
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    }else {
        $popupInfo.innerText = 'You must provide some content';
    }
}

const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';
}

document.addEventListener('DOMContentLoaded', main);