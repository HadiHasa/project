const loginBtn = document.querySelector(".header-nav__btn");

loginBtn.addEventListener("click", () => {
  const login = document.querySelector("#login-form");

  login.classList.add("flex");
  shadowBtn.classList.add("block");
});

const shadowBtn = document.querySelector(".shadow");

shadowBtn.addEventListener("click", () => {
  const login = document.querySelector("#login-form");

  login.classList.remove("flex");
  shadowBtn.classList.remove("block");
});

// Form Comments

const inputComment = document.querySelector(".comments-form__input");
const commentBtn = document.querySelector(".comment-form__btn");
const commentWrap = document.querySelector(".comment-wrapper");

commentBtn.addEventListener("click", () => {
  const HTML = `  <div class="comment">
<p class="comment-text">${inputComment.value}</p>
</div>`;
  inputComment.value = "";
  commentWrap.insertAdjacentHTML("afterend", `${HTML}`);
  localStorage.setItem();
});

let getComment = localStorage.getItem("commentDate");

function getComm() {
  commentWrap.innerHTML = getComment;
}

getComm();
