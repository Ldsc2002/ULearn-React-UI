import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './process.env'

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};*/

const firebaseConfig = {
  apiKey: "AIzaSyDtufOv6ScvHdl-SGog3CQmdEhtjl8oX6Q",
  authDomain: "ulearn-42d0d.firebaseapp.com",
  projectId: "ulearn-42d0d",
  storageBucket: "ulearn-42d0d.appspot.com",
  messagingSenderId: "897319107558",
  appId: "1:897319107558:web:ba8d79e49bbd752e0ef427",
  measurementId: "G-SM9CV5GB1Y"
};

if (!firebase.apps.length) {
  var app =firebase.initializeApp(firebaseConfig);
}else {
  var app =firebase.app(); 
}

//const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
const db = firebase.firestore();

export {auth,db}


