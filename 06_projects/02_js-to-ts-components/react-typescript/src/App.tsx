import { useState } from "react";
import HiddenSearchBox from "./projects/01-HiddenSearchBox/HiddenSearchBox";
import QRcodeGenerator from "./projects/02-QRCodeGenerator/QRCodeGenerator";
import PasswordGenerator from "./projects/03-PasswordGenerator/PasswordGenerator";
import PasswordStrengthChecker from "./projects/04-PasswordStrengthChecker/PasswordStrengthChecker";
import TextToSpeak from "./projects/05-TextToSpeak/TextToSpeak";
import CircularProgressBar from "./projects/06-CircularProgressBar/CircularProgressBar";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { label: "Hidden Search Box", component: <HiddenSearchBox /> },
    { label: "QRcode Generator", component: <QRcodeGenerator /> },
    { label: "Password Generator", component: <PasswordGenerator /> },
    { label: "Password Checker", component: <PasswordStrengthChecker /> },
    { label: "Text To Speak", component: <TextToSpeak /> },
    { label: "Circular Progress Bar", component: <CircularProgressBar /> },
  ];

  return (
    <div className="flex h-full">
      <aside className="flex h-[100vh] overflow-auto flex-col items-start gap-3 p-3">
        {components.map((item, index) => (
          <button
            key={index}
            className={`button transition-transform ${activeIndex === index ? "translate-x-2 bg-green-700" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </aside>
      <main className="flex items-center justify-center flex-1 border-l-2">{components[activeIndex].component}</main>
    </div>
  );
}

export default App;
