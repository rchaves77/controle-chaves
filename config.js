// config.js - Inicialização e Escopo Global

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// O uso do 'window.' garante que o HTML inteiro consiga enxergar essas funções
window.auth = firebase.auth();
window.db = firebase.database();
window.storage = firebase.storage();