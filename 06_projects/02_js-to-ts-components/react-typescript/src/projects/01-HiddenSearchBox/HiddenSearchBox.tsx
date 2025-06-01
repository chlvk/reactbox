import { useRef, useState } from "react";

const HiddenSearchBox = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    setActive(!active);
    ref.current?.focus();
  };
  return (
    <div className="flex justify-center">
      <input
        ref={ref}
        className={`transition-all ${
          active ? "w-36 py-1 px-3 border border-black border-r-0" : "w-0"
        }`}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <button
        className="flex items-center justify-center w-10 h-10 border border-black cursor-pointer"
        type="button"
        onClick={handleClick}
      >
        🔎
      </button>
    </div>
  );
};

export default HiddenSearchBox;
