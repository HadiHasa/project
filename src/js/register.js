// Cabinet
const login = document.querySelector("#login-form");
const shadowBtn = document.querySelector(".shadow");

login.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const telephon = document.querySelector("#telephon");
  const textMessage = document.querySelector(".login__text");

  data = `<p>Имя:${name.value}.</p> <p>Фамилия:${surname.value}.</p> <p>Телефон:${telephon.value}.</p>
   <p>Текст обращения:${textMessage.value}</p> <p>Поздравляю! Ты зашел в личный кабинет!</p> `;

  document.querySelector(".user-info").innerHTML = data;
  document.querySelector(".page-wrap").classList.add("none");
  document.querySelector(".cabinet").classList.remove("none");
  document.querySelector(".page-wrap").classList.add("none");
  login.classList.remove("flex");
  shadowBtn.classList.remove("block");
});
