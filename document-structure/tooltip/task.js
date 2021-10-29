const needTooltip = document.getElementsByClassName('has-tooltip');


for (let i = 0; i < needTooltip.length; i++) {
    let toAdd = '<div class="tooltip">' + needTooltip[i].title + '</div>';
    needTooltip[i].insertAdjacentHTML('afterend', toAdd);
};
let tools = document.getElementsByClassName('tooltip');

for (let a = 0; a < needTooltip.length; a++) {
    needTooltip[a].onclick = () => {
        console.log(needTooltip[a]);
        console.log(tools[a]);
        tools[a].classList.toggle('tooltip-active');
        return false;
    };
};


