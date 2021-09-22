const clicker = document.getElementById('clicker__counter');

let cookie = document.getElementById('cookie');
cookie.onclick = function () {
    if (clicker.width === '200px') {
        clicker.width = '400px';
    } else {
        clicker.width = '200px';
    }
    clicker.textContent = Number(clicker.textContent) + 1;
    
}