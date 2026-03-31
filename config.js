const firebaseConfig = {
    apiKey: "AIzaSyAztds4noCmJbLu-OkqtQFGhhtpSa0p92I",
    authDomain: "chaves-estacio.firebaseapp.com",
    databaseURL: "https://chaves-estacio-default-rtdb.firebaseio.com",
    projectId: "chaves-estacio",
    storageBucket: "chaves-estacio.firebasestorage.app",
    messagingSenderId: "1052463955885",
    appId: "1:1052463955885:web:32abff964d95be9f95ab24",
    measurementId: "G-CESXMKVRE0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.database(); // Linha que estava dando erro
const storage = firebase.storage();