const needTooltip = document.getElementsByClassName('has-tooltip');

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < needTooltip.length; i++) {
        var toAdd = '<div class="tooltip">' + needTooltip[i].title + '</div>';
        console.log(toAdd);
        needTooltip[i].insertAdjacentHTML('afterend', toAdd);
    };
    return false;
});

const tools = document.getElementsByClassName('tooltip');
for (let i = 0; i < needTooltip.length; i++) {
    needTooltip[i].onclick = () => {
        tools[i].classList.toggle('tooltip-active');
        return false;
    };
};