import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import StarRating from "./StarRating";
import "./stars.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={3} defaultRating={2} />
    <StarRating
      maxRating={5}
      color="red"
      messages={["Отстой", "Ну такое", "Норм", "Тема", "База базированная"]}
      defaultRating={3}
    />
    <StarRating size={24} className="box-stars" />
    <hr />
    <Test />
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={5} onSetRating={setMovieRating} color="violet" />
      <p>
        Рейтинг фильма: <strong>{movieRating}</strong>
      </p>
    </div>
  );
}
