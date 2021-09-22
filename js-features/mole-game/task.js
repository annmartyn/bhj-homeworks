const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let elements = [];
for (let i = 1; i < 10; i++) {
    hole = document.getElementById(String('hole' + i));
    hole.onclick = function () {
        if (hole.className.includes( 'hole_has-mole ')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }
    }
}

if (dead.textContent || lost.textContent) {
    dead.textContent = 0;
    lost.textContent = 0;
}