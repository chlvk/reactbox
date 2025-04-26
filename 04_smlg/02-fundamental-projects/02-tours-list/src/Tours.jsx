import Tour from "./Tour";

function Tours({ tours, onRemoveTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((item) => (
          <Tour key={item.id} {...item} onRemoveTour={onRemoveTour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
