const seconds = document.getElementById('timer');

console.log(typeof (seconds.textContent));

function checkTime() {
    if (seconds.textContent === '0') {
        alert('Вы победили в конкурсе!');
    } else {
        seconds.textContent = Number(seconds.textContent) - 1;
    }
}

setInterval(checkTime, 1000);
