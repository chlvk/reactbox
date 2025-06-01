import { useState } from "react";
import HiddenSearchBox from "./projects/01-HiddenSearchBox/HiddenSearchBox";
import QRcodeGenerator from "./projects/02-QRCodeGenerator/QRCodeGenerator";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { label: "Hidden Search Box", component: <HiddenSearchBox /> },
    { label: "QRcode Generator", component: <QRcodeGenerator /> },
  ];

  return (
    <div className="flex h-full">
      <aside className="flex h-[100vh] overflow-auto flex-col items-start gap-3 p-3">
        {components.map((item, index) => (
          <button
            key={index}
            className={`button transition-transform ${
              activeIndex === index ? "translate-x-2 bg-green-700" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </aside>
      <main className="flex items-center justify-center flex-1 border-l-2">
        {components[activeIndex].component}
      </main>
    </div>
  );
}

export default App;
