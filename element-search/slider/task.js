arrow = document.getElementsByClassName('slider__arrow');
pic = document.getElementsByClassName('slider__items');
pics = document.getElementsByClassName('slider__item');

let ind = 0;
for (let i = 0; i < 2; i++) {
    arrow[i].onclick = () => {
        let dir = arrow[i].textContent;
        newInd = changeSlide(dir, ind);
        pics[ind].classList.remove('slider__item_active');
        pics[newInd].classList.add('slider__item_active');
        ind = newInd;
    }
}

function changeSlide(direction, i) {
    newIndex = Number();
    if (direction === '<') {
        if (i == 0) {
            newIndex = pics.length - 1;
        } else {
            newIndex = i - 1;
        };
    } else if (direction === '>') {
        if (i == pics.length - 1) {
            newIndex = 0;
        } else {
            newIndex = i + 1;
        };
    };
    return newIndex;
};