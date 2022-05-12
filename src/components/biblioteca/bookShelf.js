import React, { Component } from 'react';
import BookCard from "./book";
import { useState } from "react";
import PopUp from "../popup/PopUp";
import { db } from '../firebase/firebase';
import { ref } from '@firebase/storage'

let books = fetch()

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const [titulo, setTitulo] = useState("");
    const [file, setFile] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const uploadInador = (archivo) = >{
        if( !archivo ){
            return
        } else{

        }
    };
    
    const tipo = (e) => {

        if(e.target.name === 'titulo'){
            setTitulo(e.target.value)
        } else if(e.target.name === 'file'){
            setFile(e.target.value)
        } else if(e.target.name === 'descripcion'){
            setDescripcion(e.target.value)
        }
    }

    return (
        <div>
            <BookCard books={books} setButton={setButton}/>

            <PopUp trigger={buttonPopUp} setTrigger={setButton} onClick={() => props.setButton(false)} >
                <div>
                    <h1>title</h1>
                    <p>This is a description</p>
                    <button className="popUp-btn" >Descargar</button>
                    
                </div>
            </PopUp>

            <div className='botonAgregarDiv'>
                <button className='botonAgregar' onClick={() => setShowAdd(true)}>+</button>
            </div>

            <PopUp trigger={showAdd} setTrigger={setShowAdd} onClick={() => props.setShowAdd(false)} >
                <div className="addPopUp">
                    <input type="text" placeholder="Título" name= "titulo" onChange={tipo}></input>
                    <input type="text" placeholder="Descripción" name= "descripcion" onChange={tipo}></input>
                    <input type="file" name ="file" onChange={tipo}></input> 

                    <button className="popUp-btn"  onClick={()=> noteFirebase(titulo,descripcion,file)}>Subir archivo</button>
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

function noteFirebase(t,d,f){
    const title = t
    const text = d
    const archivo = f

    db.collection('archivos').add({
        titulo:title,
        content: text,
        file:archivo,

    })

  }

export default Bookshelf;