//импорт инициализированного объекта firebase
import { app } from "./app.js";
//импорт функций авторизации
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

//объект кнопки "Sign in"
let submit_btn = document.getElementById("form-submit");
//поле ввода пароля
let password = document.getElementById("password");
//объект сообщения
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

        msg.textContent = "Неверное имя пользователя или пароль";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    })
  };


//обработчик события нажатия на кнопку "Sign in"
submit_btn.addEventListener("click", () => {
    console.log("Ok");
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