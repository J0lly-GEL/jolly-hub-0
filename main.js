if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
    });
}

let dp;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    dp = e;
});

document.getElementById('callBtn').addEventListener('click', () => {
    if (dp) {
        dp.prompt();
        dp.userChoice.then(() => { dp = null; });
    } else {
        window.location.href = 'tel:+393409394665';
    }
});

document.getElementById('apBtn').addEventListener('click', () => {
    window.location.href = 'https://t.me/J0llyGEL';
});
