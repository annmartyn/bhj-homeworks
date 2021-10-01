mainWindow = document.getElementById('modal_main');
showSuccess = document.getElementById('modal_success');
closeWindow = document.getElementsByClassName('modal__close');
successWindow = document.getElementsByClassName('show-success');

mainWindow.classList.add('modal_active');

successWindow[0].onclick = () => {
    showSuccess.classList.add('modal_active');
    mainWindow.classList.remove('modal_active');
};

for (let i = 0; i < closeWindow.length; i++) {
    closeWindow[i].onclick = () => {
        this.closest.classList.remove('modal_active');
    };
}