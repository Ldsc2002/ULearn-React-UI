import React from "react";
import "./book.css";
import { useState } from "react";
import PopUp from "./PopUp";


const WidthProvider = require('react-grid-layout').WidthProvider;
let ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

function BookCard(props) {
    const [buttonPopUp, setButton] = useState(false);
    const content = props.books.map((post) =>    
        
        <div key={post.id} className="book-item">      
            <h2 className="title">{post.title}</h2>
            <p className="desc">{post.content}</p>
            <button classname="button-info" onClick={() => setButton(true)}>Abrir</button> 
            <PopUp trigger={buttonPopUp} setTrigger={setButton}>
                <h1>Holi</h1>
            </PopUp>
        </div>
    );
  
    return (
        <ResponsiveReactGridLayout>
            {content}
        </ResponsiveReactGridLayout>  
    );
}

export default BookCard;
