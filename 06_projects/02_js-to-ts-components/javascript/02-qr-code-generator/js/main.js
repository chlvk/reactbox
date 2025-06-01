const buttonEl = document.querySelector("#button");
const inputEl = document.querySelector("#input");
const qrCodeEl = document.querySelector("#qrcode");

buttonEl.addEventListener("click", () => {
  const text = inputEl.value.trim();
  if (!text) return;
  qrCodeEl.innerHTML = "";
  new QRCode(qrCodeEl, {
    text,
    width: 128,
    height: 128,
  });
});
