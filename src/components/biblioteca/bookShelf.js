import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import BookCard from './book'
import PopUp from '../popup/PopUp'
import { db, storage } from '../firebase/firebase'

function fetch() {
    const books = []

    db.collection('archivos')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const title = doc.get('titulo')
                const content = doc.get('content')
                const file = doc.get('file')
                const code = doc.id
                const { id } = doc
                const book = {
                    id, title, content, file, code,
                }

                books.push(book)
            })
        })
    return books
}

function noteFirebase(t, d, f) {
    const title = t
    const text = d
    const archivo = f

    db.collection('archivos').add({
        titulo: title,
        content: text,
        file: archivo,

    })
}

var books = fetch()

function dropBook(i){
    const id = i.toString()
    db.collection('archivos').doc(id).delete()
}

function openFile(item){
    const link = ref(storage, item)
    
    getDownloadURL(link).then((url) => {
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.target = '_blank'
        anchor.download = 'Funciona'

        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
      })
      .catch((error) => {
        console.log(error)
    })
}

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false)

    const [titulo, setTitulo] = useState('')
    const [fileDownload, setFileDownload] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [file, setFile] = useState('')

    const [popUpContent, setPopUpContent] = useState('')


    const uploadFileB = () => {
        if (file) {
            const reference = ref(storage, file.name)
            uploadBytes(reference, file).then(() => {
                getDownloadURL(reference).then((url) => {
                    setFileDownload(url)
                })
                alert('Upload file')
            })
        }
    }

    const onSubmitFile = (e) => {
        const newFile = e.target.files[0]

        if (newFile) {
            setFile(newFile)
        }
    }

    const tipo = (e) => {
        if (e.target.name === 'titulo') {
            setTitulo(e.target.value)
        } else if (e.target.name === 'descripcion') {
            setDescripcion(e.target.value)
        }
    }

    const selectedBookHandler = (set, book) => {
        setButton(set)

        setPopUpContent(
            <div>
                <h1 className='name' >{book.title}</h1>
                <p className='details'>{book.content}</p>
                <button type="button" className="popUp-btn" onClick={() =>{openFile(book.file)}}>Abrir</button>
                <button type='button' className='delete_btn' onClick={() =>{ dropBook(book.code); books = fetch()}}>Eliminar</button>
            </div>
        )
    }

    const addHandler = (set) => {
        setButton(set)

        setPopUpContent(
            <div className="addPopUp">
                <input type="text" placeholder="Título" name="titulo" onChange={tipo} />
                <input type="text" placeholder="Descripción"  name="descripcion" onChange={tipo} />
                <input type="file" name="file"  onChange={onSubmitFile} />
                <button id='cargar_archivos' type="button" className="popUp-btn" onClick={uploadFileB}>UPLOAD</button>

                <button id='subir_archivo' type="button" className="popUp-btn" onClick={() => {noteFirebase(titulo, descripcion, fileDownload); books = fetch();}}>Terminar</button>
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
