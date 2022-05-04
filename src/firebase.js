import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtufOv6ScvHdl-SGog3CQmdEhtjl8oX6Q",
  authDomain: "ulearn-42d0d.firebaseapp.com",
  projectId: "ulearn-42d0d",
  storageBucket: "ulearn-42d0d.appspot.com",
  messagingSenderId: "897319107558",
  appId: "1:897319107558:web:ba8d79e49bbd752e0ef427",
  measurementId: "G-SM9CV5GB1Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
