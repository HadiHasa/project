// Form Comments

const inputComment = document.querySelector(".comments-form__input");
const commentBtn = document.querySelector(".comment-form__btn");
const commentWrap = document.querySelector(".comment-wrapper");

commentBtn.addEventListener("click", () => {
  const HTML = `  
<p class="comment-text">${inputComment.value}</p>
`;
  inputComment.value = "";
  commentWrap.insertAdjacentHTML("beforeend", `${HTML}`);
  localStorage.setItem("date", commentWrap.outerHTML);
});

let getComment = localStorage.getItem("date");

function getComm() {
  commentWrap.innerHTML = getComment;
}

getComm();
