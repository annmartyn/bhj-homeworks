const controllers = document.getElementsByClassName('product__quantity-control');
let adds = document.getElementsByClassName('product__add');

for (let i = 0; i < controllers.length; i++) {
    let contr = controllers[i];
    contr.onclick = () => {
        let buy = contr.closest('.product__quantity-controls');
        let amount = buy.querySelector('.product__quantity-value');
        if (contr.classList.contains('product__quantity-control_inc')) {
            amount.innerText = Number(amount.innerText) + 1;
        } else {
            if (Number(amount.innerText) > 1) {
                amount.innerText = amount.innerText - 1;
            };
        };
    };
};

const myCart = document.getElementsByClassName('cart__products')[0];
let products = document.getElementsByClassName('cart__product');

for (let a = 0; a < adds.length; a++) {
    adds[a].onclick = () => {
        let amountCard = adds[a].closest('.product__quantity');
        let amount = amountCard.querySelector('.product__quantity-value').textContent;
        let buying = amountCard.closest('.product');
        let myID = buying.dataset.id;
        let mySrc = buying.querySelector('img').src;
        if (products.length == 0) {
            let newItem = '<div class="cart__product" data-id="' + myID + '"><img class="cart__product-image" src="' + mySrc + '"><div class="cart__product-count">' + amount + '</div></div>';
            myCart.insertAdjacentHTML('beforeend', newItem);
        } else {
            for (let p = 0; p < products.length; p++) {
                console.log(amount)
                if (products[p].dataset.id === myID) {
                    let count = products[p].querySelector('.cart__product-count');
                    count.textContent = Number(count.textContent) + Number(amount);
                } else {
                    let newItem = '<div class="cart__product" data-id="' + myID + '"><img class="cart__product-image" src="' + mySrc + '"><div class="cart__product-count">' + amount + '</div></div>';
                    myCart.insertAdjacentHTML('beforeend', newItem);
                };
            };
        };
    };
};