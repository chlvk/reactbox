import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((item) => {
        const id = uuidv4();
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
