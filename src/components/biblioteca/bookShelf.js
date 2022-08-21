import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import BookCard from './book'
import PopUp from '../popup/PopUp'
import { db, storage } from '../firebase/firebase'

function fetch() {
    const libros = []
    const librosApproved = []

    db.collection('archivos')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const title = doc.get('titulo')
                const content = doc.get('content')
                const file = doc.get('file')
                const college = doc.get('universidad')
                const code = doc.id
                const { id } = doc
                console.log(college)
                const book = {
                    id, title, content, file, code,
                }
                //Este condicional hace que el arreglo interno solo contenga los libros aprobados por la universidad en turno
                //Sólo se necesita el acceso a una variable global para que se pueda determinar de manera automática 
                //la universidad y, por tanto, la serie de libros a los que se tiene acceso.
                if (college === /*'usac'*/ 'uvg') {
                    libros.push(book)
                }
            })
        })
    
    return libros
}

function noteFirebase(t, d, f, u) {
    const title = t
    const text = d
    const archivo = f
    const college = u

    db.collection('archivos').add({
        titulo: title,
        content: text,
        file: archivo,
        universidad: college
    })
}

var books = fetch()

function dropBook(i){
    const id = i.toString()
    db.collection('archivos').doc(id).delete()
    //console.log("Encontré a ", id)
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


//No funcional hasta nuevo aviso
/*function closePopUp(){
    const popup = document.getElementById('pop_up_btn_close')
    popup.click()
}*/

function Bookshelf(props) {
    const [buttonPopUp, setButton] = useState(false)
    const [showAdd, setShowAdd] = useState(false)

    const [titulo, setTitulo] = useState('')
    const [fileDownload, setFileDownload] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [file, setFile] = useState('')

    const [book, setBook] = useState({})


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

    const selectedBookHandler = (set, data) => {
        setBook(data)
        setButton(set)
    }
    //En la línea 155 se debe introducir el valor de la ya mencionadfa variable globaque indique la universidad del usuario en cuestión.
    return (
        <div className='biblioteca'>
            <BookCard books={books} setButton={selectedBookHandler} />
            

            <PopUp id='pop_up' trigger={buttonPopUp} setTrigger={setButton} onClick={() => props.setButton(false)}>
                <div>
                    <h1 className='name' >{book.title}</h1>
                    <p className='details'>{book.content}</p>
                    <button type="button" className="popUp-btn" onClick={() =>{openFile(book.file)}}>Abrir</button>
                    <button type='button' className='delete_btn' onClick={() =>{ dropBook(book.code); books = fetch()}}>Eliminar</button>
                </div>
            </PopUp>

            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => setShowAdd(true)}>+</button>
            </div>

            <PopUp trigger={showAdd} setTrigger={setShowAdd} onClick={() => props.setShowAdd(false)}>
                <div className="addPopUp">
                    <input type="text" placeholder="Título" name="titulo" onChange={tipo} />
                    <input type="text" placeholder="Descripción"  name="descripcion" onChange={tipo} />
                    <input type="file" name="file"  onChange={onSubmitFile} />
                    <button id='cargar_archivos' type="button" className="popUp-btn" onClick={uploadFileB}>UPLOAD</button>
                    
                    <button id='subir_archivo' type="button" className="popUp-btn" onClick={() => {noteFirebase(titulo, descripcion, fileDownload, 'uvg'); books = fetch();}}>Terminar</button>
                </div>
            </PopUp>
        </div>
    )
}

export default Bookshelf
