import { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import { auth } from './firebase'

const [registerEmail, setRegisterEmail] = useState('')
const [registerPassword, setRegisterPassword] = useState('')
const [loginEmail, setLoginEmail] = useState('')
const [loginPassword, setLoginPassword] = useState('')
const [user, setUser] = useState({})

onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
})

const register = async () => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
        )
    } catch (error) {
        alert(error)
    }
}

const login = async () => {
    try {
        await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword,
        )
    } catch (error) {
        alert(error)
    }
}

const logout = async () => {
    await signOut(auth)
}
