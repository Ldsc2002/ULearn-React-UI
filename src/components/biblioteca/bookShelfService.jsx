import { ref, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase/firebase'

function fetch(u) {
    const libros = []

    return new Promise((resolve) => {
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
                    const book = {
                        id, title, content, file, code,
                    }

                    if (college === u) {
                        libros.push(book)
                    }
                })

                resolve(libros)
            })
    })
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
        universidad: college,
    })
}

function dropBook(i) {
    const id = i.toString()
    db.collection('archivos').doc(id).delete()
}

function openFile(item) {
    console.log(item)
    //console.log(storage)
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
        })
}

export {
    fetch, noteFirebase, dropBook, openFile,
}
