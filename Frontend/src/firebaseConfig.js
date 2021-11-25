import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-database'

const firebaseConfig = {
    apiKey: "AIzaSyCnF0pH5qQZfXKQ64iuUCieXlWkII0vx84",
    authDomain: "desafio-92ee5.firebaseapp.com",
    projectId: "desafio-92ee5",
    storageBucket: "desafio-92ee5.appspot.com",
    messagingSenderId: "655486023049",
    appId: "1:655486023049:web:b477ded335c13af25b9d58"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

