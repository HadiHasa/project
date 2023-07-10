const loginBtn = document.querySelector(".header-nav__btn");
const introBtn = document.querySelector(".intro-btn");
const login = document.querySelector("#login-form");

loginBtn.addEventListener("click", () => {
  login.classList.add("flex");
  shadowBtn.classList.add("block");
});

const shadowBtn = document.querySelector(".shadow");

shadowBtn.addEventListener("click", () => {
  const login = document.querySelector("#login-form");

  login.classList.remove("flex");
  shadowBtn.classList.remove("block");
});

introBtn.addEventListener("click", () => {
  const login = document.querySelector("#login-form");

  login.classList.add("flex");
  shadowBtn.classList.add("block");
});

// Slider

let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.querySelector(".container");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider__item");
const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");
let itemWidth = container.clientWidth / sliderToShow;
const movePosition = sliderToScroll * itemWidth;
const itemCount = items.length;

items.forEach((item) => {
  item.style.minWidth = `${1330}px`;
});

btnNext.addEventListener("click", () => {
  position -= movePosition;

  setPosition();
  checkBtn();
});

btnPrev.addEventListener("click", () => {
  position += movePosition;

  setPosition();
  checkBtn();
});

function setPosition() {
  track.style.transform = `translateX(${position}px)`;
}

function checkBtn() {
  btnPrev.disabled = position == 0;
  btnNext.disabled = position <= -(itemCount - sliderToShow) * itemWidth;
}

// Cabinet

login.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");

  data = `${name.value} кто бы ты ни был. Извини меня что я сделал такое. ${surname.value} надеюсь тебе удобно этим пользовавться`;

  document.querySelector(".user-info").innerHTML = data;
  document.querySelector(".page-wrap").classList.add("none");
  document.querySelector(".cabinet").classList.remove("none");
  document.querySelector(".page-wrap").classList.add("none");
  login.classList.remove("flex");
  shadowBtn.classList.remove("block");
});
