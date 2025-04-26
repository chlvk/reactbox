import { useState } from "react";

function Tour({ id, name, info, image, price, onRemoveTour }) {
  const [readMore, setReadMore] = useState(false);
  const excerpt = info.substring(0, 100) + "...";
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : excerpt}{" "}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          className="delete-btn btn btn-block"
          onClick={() => onRemoveTour(id)}
        >
          Remove tour
        </button>
      </div>
    </article>
  );
}

export default Tour;
