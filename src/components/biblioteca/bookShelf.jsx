import React, { useState, useContext, useEffect } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import BookCard from './book'
import PopUp from '../popup/PopUp'
import { storage } from '../firebase/firebase'
import {
    fetch, noteFirebase, dropBook, openFile,
} from './bookShelfService'
import ScreenContext from '../app/ScreenContext'

let fileDownload = ''
let admin = false
let college = ''

function Bookshelf(props) {
    const { userInfo } = useContext(ScreenContext)
    college = userInfo.university
    admin = userInfo.type

    const [buttonPopUp, setButton] = useState(false)
    const [popUpContent, setPopUpContent] = useState()
    const [books, setBooks] = useState([])

    const fetchBooksHandler = () => {
        fetch(college).then((res) => {
            setBooks(res)
        })
    }

    useEffect(() => {
        fetchBooksHandler()
    }, [])

    const clearURL = () => {
        fileDownload = ''
    }

    const onSubmitFile = (e) => {
        const file = e.target.files[0]
        /* istanbul ignore if */
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
        const titulo = document.getElementById('titulo').value
        const descripcion = document.getElementById('descripcion').value
        /* istanbul ignore else */
        if (titulo === '' || descripcion === '' || titulo.match(/^ *$/) !== null || descripcion.match(/^ *$/) !== null) {
            alert('Faltan campos por llenar')
        } else if (fileDownload === '') {
            alert('No puede subir archivos vacíos a la biblioteca')
        } else {
            noteFirebase(titulo, descripcion, fileDownload, college)
            fetchBooksHandler()
            setTimeout(() => {
                setButton(false)
            }, 500)
            clearURL()
        }
    }

    const deleteBook = (book) => {
        dropBook(book.code)
        fetchBooksHandler()

        setTimeout(() => {
            setButton(false)
        }, 500)
    }

    const selectedBookHandler = (set, book) => {
        setButton(set)

        setPopUpContent(
            <div>
                <h1 className="name">{book.title}</h1>
                <p className="details">{book.content}</p>
                <button type="button" className="popUp-btn" onClick={() => { openFile(book.file) }}>Abrir</button>
                <button type="button" className="delete_btn" disabled={!admin} onClick={() => deleteBook(book)}>Eliminar</button>
            </div>,
        )
    }

    const addHandler = (set) => {
        setButton(set)

        setPopUpContent(
            <div className="addPopUp">
                <input type="text" placeholder="Título" id="titulo" />
                <input type="text" placeholder="Descripción" id="descripcion" />
                <input type="file" name="file" onChange={onSubmitFile} />

                <button id="subir_archivo" type="button" className="popUp-btn" onClick={() => finishUpload()}>Subir</button>
            </div>,
        )
    }

    return (
        <div className="biblioteca">
            <BookCard books={books} setButton={selectedBookHandler} />

            <PopUp id="pop_up" trigger={buttonPopUp} setTrigger={setButton} onClick={() => { clearURL(); props.setButton(false) }}>
                {popUpContent}
            </PopUp>

            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => addHandler(true)}>+</button>
            </div>
        </div>
    )
}

export default Bookshelf
