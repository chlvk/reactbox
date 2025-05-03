import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
/* For pop-up messages on the side of the screen */
import { ToastContainer, toast } from "react-toastify";
/* For generation of tints and shades of the custom color */
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
