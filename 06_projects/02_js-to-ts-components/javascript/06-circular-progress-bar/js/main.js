const DEGREE_MULTIPLIER = 3.6;
const progressBar = {
  MIN_VALUE: 0,
  MAX_VALUE: 100,
  STEP: 10,
  LOADING_SPEED: 400,
};

const [loadingButtonNode, resetButtonNode, smallButtonNode, mediumButtonNode, bigButtonNode] = Array.from(
  document.querySelectorAll(".button")
);
const progressNode = document.querySelector("#progress");

let value = progressBar.MIN_VALUE;
let intervalId;

const renderProgressBar = () => {
  progressNode.setAttribute("data-value", value);
  progressNode.style.setProperty("--progress", value * DEGREE_MULTIPLIER + "deg");
};

const onResetButtonClick = () => {
  value = progressBar.MIN_VALUE;
  clearInterval(intervalId);
  renderProgressBar();
};

const onSizeButtonClick = (evt) => {
  const size = evt.target.dataset.size + "px";
  progressNode.style.setProperty("--size", size);
};

const onLoadingButtonClick = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (value >= progressBar.MAX_VALUE) {
      clearInterval(intervalId);
    } else {
      value += progressBar.STEP;
      renderProgressBar();
    }
  }, progressBar.LOADING_SPEED);
};

resetButtonNode.addEventListener("click", onResetButtonClick);
smallButtonNode.addEventListener("click", onSizeButtonClick);
mediumButtonNode.addEventListener("click", onSizeButtonClick);
bigButtonNode.addEventListener("click", onSizeButtonClick);
loadingButtonNode.addEventListener("click", onLoadingButtonClick);

renderProgressBar();
