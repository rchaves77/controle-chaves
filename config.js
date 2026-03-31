// config.js - Lógica de inicialização do Firebase
if (!firebase.apps.length) {
    // A variável firebaseConfig deve ser carregada via env.js no HTML
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage(); // Essencial para a gestão de fotos dos alunos