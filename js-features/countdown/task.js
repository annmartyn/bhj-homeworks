const seconds = document.getElementById('timer');

console.log(typeof (seconds.textContent));

function checkWin() {
    if (seconds.textContent === '0') {
        alert('Вы победили в конкурсе!');
    }
}

let updateTime = () => seconds.textContent = Number(seconds.textContent) - 1;
setInterval(updateTime, 1000);
setInterval(checkWin, 1000);