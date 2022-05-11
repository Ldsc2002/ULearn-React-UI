import React from "react";
import BookCard from "./book";
import { useState } from "react";
import PopUp from "../popup/PopUp";

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false);
    const books = [
        {id: 1, title: 'Libro 1', content: 'Hello World'},
        {id: 2, title: 'Libro 2', content: 'Test'}
    ];

    return (
        <div>
            <BookCard books={books} setButton={setButton}/>

            <PopUp trigger={buttonPopUp} setTrigger={setButton} onClick={() => props.setButton(false)}>
                <h1>This is a test</h1>
            </PopUp>
        </div>
    );
}

export default Bookshelf;