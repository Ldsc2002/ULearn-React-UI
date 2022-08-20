import { db, storage } from '../firebase/firebase'

function fetch() {
    const libros = []

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
                // TODO check college with global value
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
    })
}

export { fetch, noteFirebase, dropBook, openFile }