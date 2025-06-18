const UPPERCASE_LETTERS_REGEXP = /[A-Z]/;
const LOWERCASE_LETTERS_REGEXP = /[a-z]/;
const DIGITS_REGEXP = /[0-9]/;
const NON_WORDS_REGEXP = /[\W_]/;

const LevelPercentage = {
  NONE: 0,
  WEAK: 20,
  MEDIUM: 60,
  STRONG: 100,
};

const passwordFieldNode = document.querySelector("#password");
const strengthFillNode = document.querySelector("#strength-meter-fill");
const strengthLevelNode = document.querySelector("#strength-text");

const checkPasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 8) strength++;
  if (UPPERCASE_LETTERS_REGEXP.test(password)) strength++;
  if (LOWERCASE_LETTERS_REGEXP.test(password)) strength++;
  if (DIGITS_REGEXP.test(password)) strength++;
  if (NON_WORDS_REGEXP.test(password)) strength++;
  return strength;
};

const onPasswordFieldInput = (evt) => {
  const password = evt.target.value;
  const passwordStrength = checkPasswordStrength(password);
  let fillPercentage = LevelPercentage.NONE;
  let strengthLevel = "N/A";

  if (passwordStrength === 0) {
    strengthFillNode.className = "";
  } else if (passwordStrength === 1) {
    strengthFillNode.className = "weak";
    fillPercentage = LevelPercentage.WEAK;
    strengthLevel = "Weak";
  } else if (passwordStrength === 2 || passwordStrength === 3) {
    strengthFillNode.className = "medium";
    fillPercentage = LevelPercentage.MEDIUM;
    strengthLevel = "Medium";
  } else {
    strengthFillNode.className = "strong";
    fillPercentage = LevelPercentage.STRONG;
    strengthLevel = "Strong";
  }

  strengthFillNode.style.width = `${fillPercentage}%`;
  strengthLevelNode.textContent = strengthLevel;
};

passwordFieldNode.addEventListener("input", onPasswordFieldInput);
