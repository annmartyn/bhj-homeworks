const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

button.onclick = () => {
    wholeForm = button.closest('form');
    inputForm = wholeForm.querySelector('input');
    task = inputForm.value;
    tasksList.innerHTML += '<div class="task"><div class="task__title">' + task + '</div><a href="#" class="task__remove">&times;</a></div>';
    myList = tasksList.querySelectorAll('.task');
    inputForm.value = '';
    var myTask = myList[myList.length - 1];
    console.log(myTask);
    return false;
};