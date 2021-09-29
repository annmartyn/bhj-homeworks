mainWindow = document.getElementById('modal_main');
showSuccess = document.getElementById('modal_success');
closeWindow = document.getElementsByClassName('modal__close');
successWindow = document.getElementsByClassName('show-success');

mainWindow.classList.add('modal_active');
successWindow[0].onclick = () => {
    showSuccess.classList.add('modal_active');
};
closeWindow[0].onclick = () => {
    mainWindow.classList.remove('modal_active');
};