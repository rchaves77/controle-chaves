const firebaseConfig = {
    apiKey: "AIzaSyCTXsWaCrdgo4hNNDhTgRv-YYS0-S37FOc-OkqtQFGhhtpSa0p92I",
    authDomain: "chaves-estacio.firebaseapp.com",
    databaseURL: "https://chaves-estacio-default-rtdb.firebaseio.com",
    projectId: "chaves-estacio",
    storageBucket: "chaves-estacio.firebasestorage.app",
    messagingSenderId: "1052463955885",
    appId: "1:1052463955885:web:32abff964d95be9f95ab24",
    measurementId: "G-CESXMKVRE0"
};

// Inicialização segura
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage(); // ADICIONE ESTA LINHA PARA AS FOTOS