import React, { Component } from 'react';
import BookCard from "./book";
import { useState } from "react";
import PopUp from "../popup/PopUp";
import { db } from '../firebase/firebase';

let books = fetch()

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false);
    const [showAdd, setShowAdd] = useState(false)

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

function fetch (){
    let libros = []

    db.collection('archivos')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const title = doc.get("titulo")
          const content =doc.get("descripcion")
          const file = doc.get("documento")
          const id = doc.id

          const book= {id:id, title:title, content:content, file:file};

          libros.push(book)
        });
    });
    return libros
}

export default Bookshelf;