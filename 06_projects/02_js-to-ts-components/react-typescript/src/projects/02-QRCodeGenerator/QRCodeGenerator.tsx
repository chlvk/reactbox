import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">QR Code Generator</h1>
      <div className="flex items-center gap-3">
        <label htmlFor="input">Enter text or URL:</label>
        <input
          type="text"
          id="input"
          placeholder="Some text"
          className="p-1 border border-black rounded-lg"
          onChange={onChange}
        />
      </div>
      {text && <QRCodeCanvas value={text} size={128} />}
    </div>
  );
};

export default QRCodeGenerator;
