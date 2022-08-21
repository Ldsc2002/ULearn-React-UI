import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyDtufOv6ScvHdl-SGog3CQmdEhtjl8oX6Q', 
    authDomain: 'ulearn-42d0d.firebaseapp.com',
    databaseURL: 'https://ulearn-42d0d-default-rtdb.firebaseio.com/',
    projectId: 'ulearn-42d0d',
    storageBucket: 'ulearn-42d0d.appspot.com', 
    messagingSenderId: '897319107558',
    appId: '1:1:897319107558:web:ba8d79e49bbd752e0ef427'
}

let app = ''

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

// const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app)
const db = firebase.firestore()
const storage = getStorage()

export { auth, db, storage }
