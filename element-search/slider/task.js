arrow = document.getElementsByClassName('slider__arrow');
pic = document.getElementsByClassName('slider__items');
pics = document.getElementsByClassName('slider__item');


for (let i = 0; i < 2; i++) {
    arrow[i].onclick = () => {
        let ind = 0;
        let dir = arrow[i].textContent;
        newInd = changeSlide(dir, ind);
        pics[ind].classList.remove('slider__item-active');
        pics[newInd].classList.add('slider__item-active');
        ind = newInd;
    }
}

function changeSlide(direction, i) {
    newIndex = Number();
    if (direction === '<') {
        if (i == 0) {
            newIndex = 4;
        } else {
            newIndex = i - 1;
        };
    } else if (direction === '>') {
        if (i == 4) {
            newIndex = 0;
        } else {
            newIndex = i + 1;
        };
    };
    return newIndex;
};