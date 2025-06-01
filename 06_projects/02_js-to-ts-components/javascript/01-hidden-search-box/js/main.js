const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".button");

btnEl.addEventListener("click", () => {
  inputEl.classList.toggle("active");
  inputEl.focus();
});
