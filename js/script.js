const newYear = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now= new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = 'Mutlu Yıllar!';
    }
}

const interval=setInterval(updateCountdown,  1000);

function switchTheme(theme) {
    document.body.className=theme;
}

document.querySelectorAll('.snowflake').forEach(snowflake => {
    snowflake.addEventListener('click', () =>{
        snowflake.computedStyleMap.animation ='explode 1s forwards';
    });
});

const messages = [
    "Mutlu yıllar! Yeni yılın sana sağlık, mutluluk ve başarı getirmesini dilerim.",
    "Yeni yılın kutlu olsun! Umutların gerçek, başarıların daim olsun.",
    "2024 yılı sana ve sevdiklerine mutluluk, sağlık ve huzur getirsin.",
    "Yeni yılın tüm güzelliklerle dolu geçsin. Mutlu yıllar!",
    "Yeni yılın sağlık, mutluluk ve başarı dolu geçsin. İyi yıllar!"
];

function loadMessage() {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
        messages = JSON.parse(storedMessages);
    }
}

function saveMessages () {
    localStorage.setItem('messages', JSON.stringify(messages));
}

function showMessage() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = message;
}

function addCustomMessage(){
    const customMessage = document.getElementById('customMessage').value;
    if (customMessage){
        messages.push(customMessage);
        saveMessages();
        document.getElementById('customMessage').value ='';
        alert('Mesaj eklendi');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadMessages(); // Mesajları yükle

    setTimeout(() => {
        const curtain = document.getElementById('curtain');
        curtain.style.transition = 'width 1s';
        curtain.style.width = '0';
    }, 3000);
});
