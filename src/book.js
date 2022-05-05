import React from "react";
import "./book.css";


const WidthProvider = require('react-grid-layout').WidthProvider;
let ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

function BookCard(props) {

    const content = props.books.map((post) =>    
        
        <div key={post.id} className="book-item">      
            <h2 className="title">{post.title}</h2>
            <p className="desc">{post.content}</p>
            <button classname="button-info" /*onClick={}*/>Abrir</button>
        </div>
    );
  
    return (
        <ResponsiveReactGridLayout>
            {content}
        </ResponsiveReactGridLayout>  
    );
}

export default BookCard;
