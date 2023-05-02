const chat = document.querySelector('.chat-widget');
const chat_button = chat.querySelector('.chat-widget__side');
const input = chat.querySelector('#chat-widget__input');
const answList = [
    'Давай досвидания!',
    'Где ваша совесть?',
    'Вы не купили ни одного товара чтобы так разговаривать',
    'Все операторы заняты, не пиши сюда больше',
    'Мы ничего не будем вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
];
let timer;

chat_button.addEventListener('click', () => chat.classList.add('chat-widget_active'))

function addMessage(message__text, client=false){
    const messages = chat.querySelector( '.chat-widget__messages' );
    const msgContainer = chat.querySelector('.chat-widget__messages-container')
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()

    messages.innerHTML += `
    <div class="message${client? ' message_client':''}">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
        ${message__text}
        </div>
    </div>
    `
    msgContainer.scrollTop = msgContainer.scrollHeight
    
}


input.addEventListener('keydown', enterHandler)
input.addEventListener('blur', () => clearTimeout(timer))


function enterHandler(event){   
    if(event.code == 'Enter' || event.code == 'NumpadEnter'){
        let rand = Math.floor(Math.random() * answList.length)
        console.log(rand)

        addMessage(input.value, true)
        input.value = ''
        addMessage(answList[rand])
        startTimer()
        
    }
}

function startTimer(){
    clearTimeout(timer)
    timer = setTimeout(()=> addMessage('вы всё еще тут?'), 5000)
}

 