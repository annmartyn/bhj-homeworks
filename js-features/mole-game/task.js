const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let checkWin = (message) => {
    if (dead.textContent === '10' || lost.textContent === '5') {
        dead.textContent = 0;
        lost.textContent = 0;
        alert(message);
    }
}

let elements = [];
for (let i = 1; i < 10; i++) {
    hole = document.getElementById(String('hole' + i));
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            checkWin('You won!');
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            checkWin('You lost!');
        }
    }
}