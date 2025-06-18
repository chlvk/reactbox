const Chars = {
  LOWERCASE_CHARS: "abcdefghijklmnopqrstuvwxyz",
  UPPERCASE_CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  NUMBER_CHARS: "0123456789",
  SPECIAL_CHARS: "!#€%&/()=?^'*-_.:,;<>°",
};

const rangeNode = document.querySelector("#range");
const rangeValueNode = document.querySelector("#range-value");
const uppercaseCheckboxNode = document.querySelector("#uppercase");
const lowercaseCheckboxNode = document.querySelector("#lowercase");
const numbersCheckboxNode = document.querySelector("#numbers");
const specialCheckboxNode = document.querySelector("#special");
const generateButtonNode = document.querySelector("#generate-button");
const passwordNode = document.querySelector("#password-placement");

const onRangeNodeChange = (evt) => {
  rangeValueNode.textContent = `length: ${evt.target.value}`;
};

rangeNode.addEventListener("input", onRangeNodeChange);

const generatePassword = () => {
  let chars = "";
  chars += lowercaseCheckboxNode.checked ? Chars.LOWERCASE_CHARS : "";
  chars += uppercaseCheckboxNode.checked ? Chars.UPPERCASE_CHARS : "";
  chars += numbersCheckboxNode.checked ? Chars.NUMBER_CHARS : "";
  chars += specialCheckboxNode.checked ? Chars.SPECIAL_CHARS : "";

  if (chars === "") return "";

  const passwordLength = parseInt(rangeNode.value, 10);
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    password += chars.at(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const onGenerateButtonClick = (evt) => {
  const password = generatePassword();
  passwordNode.textContent =
    password.length > 0 ? password : "No options were chosen";
};

generateButtonNode.addEventListener("click", onGenerateButtonClick);
