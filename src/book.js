import React from "react";
import "./book.scss";
import redBook from "./images/redbook.png";

function BookCard(info) {
  const { data } = props;
  return (
    <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src="./images/redbook.png" alt="Libro" />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
    </div>
  );
}

export default BookCard;
