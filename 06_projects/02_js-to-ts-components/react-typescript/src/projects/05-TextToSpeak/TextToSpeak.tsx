import { useState } from "react";

const TextToSpeak = () => {
  const [text, setText] = useState("");
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };
  const handleClick = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    // Working in Firefox, not working in Chrome
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor="text">Text to speak:</label>
      <textarea
        className="p-1 border border-black rounded"
        id="text"
        name="text"
        rows={5}
        onChange={handleChange}
      ></textarea>
      <button className="button" id="speak" type="button" onClick={handleClick}>
        Speak the text
      </button>
    </div>
  );
};

export default TextToSpeak;
