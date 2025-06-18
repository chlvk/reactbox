import { useState } from "react";
import CharsOption from "./CharsOption";

type OptionsType = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  special: boolean;
};

const Chars = {
  LOWERCASE_CHARS: "abcdefghijklmnopqrstuvwxyz",
  UPPERCASE_CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  NUMBER_CHARS: "0123456789",
  SPECIAL_CHARS: "!#€%&/()=?^'*-_.:,;<>°",
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(16);
  const [options, setOptions] = useState<OptionsType>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    special: false,
  });

  const handleGenerateButtonClick = () => {
    let chars = "";
    chars += options.uppercase ? Chars.UPPERCASE_CHARS : "";
    chars += options.lowercase ? Chars.LOWERCASE_CHARS : "";
    chars += options.numbers ? Chars.NUMBER_CHARS : "";
    chars += options.special ? Chars.SPECIAL_CHARS : "";

    if (chars === "") {
      setPassword("");
      return;
    }

    let password = "";
    for (let index = 0; index < rangeValue; index++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(password);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value, 10));
  };

  const handleChange = (option: keyof OptionsType) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [option]: !prevState[option],
      };
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <CharsOption
        type={"uppercase"}
        checked={options.uppercase}
        onChange={() => handleChange("uppercase")}
      />
      <CharsOption
        type={"lowercase"}
        checked={options.lowercase}
        onChange={() => handleChange("lowercase")}
      />
      <CharsOption
        type={"numbers"}
        checked={options.numbers}
        onChange={() => handleChange("numbers")}
      />
      <CharsOption
        type={"special"}
        checked={options.special}
        onChange={() => handleChange("special")}
      />
      <div className="flex gap-2">
        <input
          type="range"
          name="range"
          value={rangeValue}
          min="16"
          max="32"
          step="1"
          onChange={handleRangeChange}
        />
        <span>length: {rangeValue}</span>
      </div>
      <div className="flex">
        <button className="button" onClick={handleGenerateButtonClick}>
          Generate
        </button>
      </div>
      <div className="flex w-80">
        <pre style={{ backgroundColor: "aliceblue" }}>
          Password: {password.length > 0 ? password : "No options were chosen"}
        </pre>
      </div>
    </div>
  );
};

export default PasswordGenerator;
