import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf4LIryophT_6ioCG33xKA3yacwJIIrmc",
  authDomain: "project1-51bf7.firebaseapp.com",
  projectId: "project1-51bf7",
  storageBucket: "project1-51bf7.appspot.com",
  messagingSenderId: "308179615184",
  appId: "1:308179615184:web:3363b5b30ddf785aff0dd5"
};

const app = initializeApp(firebaseConfig);

export { app };