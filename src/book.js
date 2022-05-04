import React from "react";
import redBook from "./images/redbook.png";

const WidthProvider = require('react-grid-layout').WidthProvider;
let ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

function BookCard(props) {
    const style_book = {
        backgroundImage: 'url('+redBook+')'
    }

    const content = props.books.map((post) =>    
        <div key={post.id}  style={style_book}>      
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
  
    return (
        <ResponsiveReactGridLayout cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
            {content}
        </ResponsiveReactGridLayout>  
    );
}

export default BookCard;
