import React from "react";
import BookCard from "./book";
import { useState } from "react";
import PopUp from "../popup/PopUp";

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false);
    const [showAdd, setShowAdd] = useState(false)
    const books = [
        {id: 1, title: 'Libro 1', content: 'Hello World'},
        {id: 2, title: 'Libro 2', content: 'Test'}
    ];

    return (
        <div>
            <BookCard books={books} setButton={setButton}/>

            <PopUp trigger={buttonPopUp} setTrigger={setButton} onClick={() => props.setButton(false)} >
                <div>
                    <h1>This is a title</h1>
                    <p>This is a description</p>
                    <button className="popUp-btn">Descargar</button>
                    
                </div>
            </PopUp>

            <div className='botonAgregarDiv'>
                <button className='botonAgregar' onClick={() => setShowAdd(true)}>+</button>
            </div>

            <PopUp trigger={showAdd} setTrigger={setShowAdd} onClick={() => props.setShowAdd(false)} >
                <div className="addPopUp">
                    <input type="text" placeholder="Título"></input>
                    <input type="text" placeholder="Descripción"></input>
                    <input type="file"></input> 
                    <button className="popUp-btn">Subir archivo</button>
                </div>
            </PopUp>
        </div>
    );
}

export default Bookshelf;