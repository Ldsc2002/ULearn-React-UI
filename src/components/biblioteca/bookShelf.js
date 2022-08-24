import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import BookCard from './book'
import PopUp from '../popup/PopUp'
import { storage } from '../firebase/firebase'
import { fetch, noteFirebase, dropBook, openFile} from './bookShelfService'


function Bookshelf(props) {
    var admin = false     // TODO get admin from global value
    var college = 'uvg'  // TODO college from global value
    var books = fetch(college)
    var fileDownload = ''
    const [buttonPopUp, setButton] = useState(false)
    const [popUpContent, setPopUpContent] = useState()
    const onSubmitFile = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reference = ref(storage, file.name)
            uploadBytes(reference, file).then(() => {
                getDownloadURL(reference).then((url) => {
                    fileDownload = url
                    alert('Upload file')
                })
            })
        }
    }


    const finishUpload = () => {
        let titulo = document.getElementById('titulo').value
        let descripcion = document.getElementById('descripcion').value

        noteFirebase(titulo, descripcion, fileDownload, college) // TODO college from global value
        
        books = fetch(college)

        setTimeout(() => {
            setButton(false)
        }, 1000);
    }

    const deleteBook = (book) => {
        dropBook(book.code)
        books = fetch(college)

        setTimeout(() => {
            setButton(false)
        }, 1000);
    }

    const selectedBookHandler = (set, book) => {
        setButton(set)

        setPopUpContent(
            <div>
                <h1 className='name' >{book.title}</h1>
                <p className='details'>{book.content}</p>
                <button type="button" className="popUp-btn" onClick={() =>{openFile(book.file)}}>Abrir</button>
                <button type='button' className='delete_btn' disabled={!admin} onClick={() => deleteBook(book)}>Eliminar</button>
            </div>
        )
    }

    const addHandler = (set) => {
        setButton(set)

        setPopUpContent(
            <div className="addPopUp">
                <input type="text" placeholder="Título" id="titulo"/>
                <input type="text" placeholder="Descripción"  id="descripcion"/>
                <input type="file" name="file" onChange={onSubmitFile} />

                <button id='subir_archivo' type="button" className="popUp-btn" onClick={() => finishUpload()}>Terminar</button>
            </div>
        )
    }

    return (
        <div className='biblioteca'>
            <BookCard books={books} setButton={selectedBookHandler} />
            
            <PopUp id='pop_up' trigger={buttonPopUp} setTrigger={setButton} onClick={() => props.setButton(false)}>
                {popUpContent}
            </PopUp>

            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => addHandler(true)}>+</button>
            </div>
        </div>
    )
}

export default Bookshelf
