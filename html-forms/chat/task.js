const widget = document.getElementsByClassName("chat-widget")
const messages = document.querySelector('.chat-widget__messages');
const inputStr = document.getElementById('chat-widget__input')

let messageList = ['Ну ладно :(', 'Добрый день! Не пишите нам.', 'Всего вам недоброго', 'Кто тут?', 'Где ваша совесть?', 'Мы ничего не будем вам продавать!']

widget[0].onclick = function () {
    widget[0].classList.add('chat-widget_active');
}

document.querySelector('input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        msg = this.value;
        if (msg != '') {
            let date = new Date();
            hrs = date.getHours();
            mnts = date.getMinutes();
            time = String(hrs + ':' + mnts);
            inputStr.textContent = '';
            messages.innerHTML += '<div class="message message_client"><div class="message__time">' + time + '</div><div class="message__text">' + msg + '</div></div>';
            this.value = '';
            let messNumb = Math.floor(Math.random() * messageList.length);
            console.log(messageList[messNumb]);
            messages.innerHTML += '<div class="message"><div class="message__time">' + time + '</div><div class="message__text">' +  messageList[messNumb]  + '</div></div>';
        };
    };
});


