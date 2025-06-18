import { useState } from "react";

const UPPERCASE_LETTERS_REGEXP = /[A-Z]/;
const LOWERCASE_LETTERS_REGEXP = /[a-z]/;
const DIGITS_REGEXP = /[0-9]/;
const NON_WORDS_REGEXP = /[\W_]/;

const levels = [
  { level: "N/A", percentage: 0, color: "black" },
  { level: "Weak", percentage: 20, color: "red" },
  { level: "Medium", percentage: 60, color: "yellow" },
  { level: "Strong", percentage: 100, color: "goldenrod" },
];

const checkPasswordStrength = (password: string) => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (UPPERCASE_LETTERS_REGEXP.test(password)) strength++;
  if (LOWERCASE_LETTERS_REGEXP.test(password)) strength++;
  if (DIGITS_REGEXP.test(password)) strength++;
  if (NON_WORDS_REGEXP.test(password)) strength++;

  return strength;
};

const PasswordStrengthChecker = () => {
  const [level, setLevel] = useState(levels[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strength = checkPasswordStrength(e.target.value);
    if (strength === 0) {
      setLevel(levels[0]);
    } else if (strength === 1) {
      setLevel(levels[1]);
    } else if (strength === 2 || strength === 3) {
      setLevel(levels[2]);
    } else {
      setLevel(levels[3]);
    }
  };

  return (
    <div>
      <label className="pr-2" htmlFor="password">
        Enter password:
      </label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        className="p-1"
        placeholder="Enter your password"
      />

      <div className="w-full h-3 my-6 bg-white rounded">
        <div
          className="h-full transition-all rounded"
          style={{
            width: level.percentage + "%",
            backgroundColor: level.color,
          }}
        ></div>
      </div>

      <div className="mt-2">Password strength: {level.level}</div>
    </div>
  );
};

export default PasswordStrengthChecker;
