pageTabs = document.getElementsByClassName('tab')
tabContent = document.getElementsByClassName('tab__content')
activeTab = document.getElementsByClassName('tab_active')
tabContentActive = document.getElementsByClassName('tab__content_active')

for (let i = 0; i < pageTabs.length; i++) {
    pageTabs[i].onclick = () => {
        activeTab[0].classList.remove('tab_active');
        pageTabs[i].classList.add('tab_active');
        tabContentActive[0].classList.remove('tab__content_active');
        tabContent[i].classList.add('tab__content_active');
    }
}