menuPoints = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuPoints.length; i++) {
    menuPoints[i].onclick = () => {
        subMenuHead = menuPoints[i].closest('li');
        subMenu = subMenuHead.querySelectorAll('li ul.menu_sub');
        updSubMenu = Array.from(subMenu);
        updSubMenu[0].classList.add('menu_active');
        return false;
    };
};