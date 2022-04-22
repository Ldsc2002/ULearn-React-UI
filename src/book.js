import React from "react";
//import "./book.scss";
import redBook from "./images/redbook.png";

function BookCard(info) {
  const style_book = {
    backgroundImage: 'url('+redBook+')'
  }
  return (
    <div className="card-item">
        <div className="card-inner">
          <div className="card-top" style={style_book}>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>Libro</h4>
            <p>20XX</p>
          </div>
        </div>
    </div>
  );
}

export default BookCard;
