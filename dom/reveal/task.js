
window.addEventListener('scroll', function () {
    const myElems = document.getElementsByClassName('reveal');
    for (let i = 0; i < myElems.length; i++) {
        if (myElems[i].getBoundingClientRect().top <= 700) {
            myElems[i].classList.add('reveal_active');
        };
    };
});