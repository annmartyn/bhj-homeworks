const interestLabel = document.getElementsByClassName("interest__check");

for (let i = 0; i < interestLabel.length; i++) {
    interestLabel[i].onclick = () => {
        if (interestLabel[i].checked) {
            let wholeList = interestLabel[i].closest('.interest');
            console.log(wholeList);
            let boxes = wholeList.querySelectorAll('.interest__check');
            for (let a = 0; a < boxes.length; a++) {
                boxes[a].checked = true;
            };
        };
    };
};