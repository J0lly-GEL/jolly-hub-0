if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
    });
}

let dp;
const btn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    dp = e;
    btn.onclick = () => {
        dp.prompt();
        dp.userChoice.then((choiceResult) => {
            dp = null; 
        });
    };
});

btn.addEventListener('click', () => {
    if (!dp) {
        window.location.href = 'https://t.me/Elisataxi';
    }
});
