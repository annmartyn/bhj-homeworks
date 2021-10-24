rotators = document.getElementsByClassName('rotator');
for (let i = 0; i < rotators.length; i++) {
    setInterval(function change() {
        myElems = rotators[i].querySelectorAll('.rotator__case');
        myNewElems = Array.from(myElems);
        currElem = rotators[i].querySelector('.rotator__case_active');
        console.log(myNewElems.indexOf(currElem));
        let ind = myNewElems.indexOf(currElem);
        if (ind === myNewElems.length - 1) {
            currElem.classList.remove('rotator__case_active');
            myNewElems[0].classList.add('rotator__case_active');
        } else {
            currElem.classList.remove('rotator__case_active');
            myNewElems[ind + 1].classList.add('rotator__case_active');
        };
    }, 1000);
}