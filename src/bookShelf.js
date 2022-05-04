import React from "react";
import BookCard from "./book";

function Bookshelf() {
    const books = [
        {id: 1, title: 'Libro 1', content: 'Hello World'},
        {id: 2, title: 'Libro 2', content: 'Test'}
    ];
    

    return (
        <div>
            <BookCard books={books} />
        </div>
    );
}

export default Bookshelf;