import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((item, index) => (
        <SingleColor color={item} key={nanoid()} index={index} />
      ))}
    </section>
  );
};

export default ColorList;
