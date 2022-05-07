import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'dotenv/config'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

let app = ""

if (!firebase.apps.length) {
  app =firebase.initializeApp(firebaseConfig);
} else {
  app =firebase.app(); 
}

//const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
const db = firebase.firestore();

export {auth,db}


