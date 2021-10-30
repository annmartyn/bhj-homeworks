const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

button.onclick = () => {
    wholeForm = button.closest('form');
    inputForm = wholeForm.querySelector('input');
    task = inputForm.value;
    if (task.trim() != '') {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">' + task + '</div><a href="#" class="task__remove">&times;</a></div>');
        inputForm.value = '';
    };
    myList = tasksList.getElementsByClassName('task__remove');
    let myRemover = myList[myList.length - 1];
    myRemover.addEventListener('click', () => {
        let taskRemove = myRemover.closest('div.task');
        tasksList.remove(taskRemove);
    });
    return false;
};