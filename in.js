import { app } from "./app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

let submit_btn = document.getElementById("form-submit");
let password = document.getElementById("password");
let msg = document.getElementsByClassName("msg")[0];

//функция авторизации
function signInUser(email, password) {
    signInWithEmailAndPassword(getAuth(app), email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        msg.textContent = "Авторизация прошла успешно";
        msg.classList.add("msg-success");
        msg.classList.remove("hide", "msg-error");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        msg.textContent = "Неверный адрес электронный почты или пароль";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    })
  };


//обработчик события нажатия на кнопку "Sign in"
submit_btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        msg.textContent = "Не все поля заполнены";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    }
    else {
        signInUser(email, password);
    }
});