import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ image, name, id, info, glass }) => {
  const data = useOutletContext();
  // comes from context={{ contextValueExample }} in HomeLayout.jsx
  // console.log(data.contextValueExample);
  return (
    <Wrapper>
      <div className="img-container">
        <img className="img" src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
