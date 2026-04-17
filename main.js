if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        reg.update(); // Forza l'aggiornamento del Service Worker
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
    } else {
        window.location.href = 'tel:+393409394665';
    }
});

document.getElementById('apBtn').addEventListener('click', () => {
    // Stringa Bot per Telegram con codice 20/18
    const msg = encodeURIComponent("PROTOCOLLO REVERSE 20/18 ATTIVATO: Richiedo attivazione consulenza per valore lealtà.");
    window.location.href = `https://t.me/J0llyGEL?text=${msg}`;
});
