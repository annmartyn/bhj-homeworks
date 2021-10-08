mainBtn = document.getElementsByClassName('dropdown__value');
mainList = document.getElementsByClassName('dropdown__list');
mainValues = document.getElementsByClassName('dropdown__item')

mainBtn[0].onclick = () => {
    mainList[0].classList.toggle('dropdown__list_active');
};

for (let i = 0; i < mainValues.length; i++) {
    mainValues[i].onclick = () => {
        let btnCard = mainValues[i].closest('.dropdown').querySelector('.dropdown__value');
        btnCard.textContent = mainValues[i].textContent;
        mainList[0].classList.toggle('dropdown__list_active');
        return false;
    }
}