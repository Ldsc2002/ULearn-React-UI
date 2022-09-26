//import { render } from '@testing-library/react-native';
import React from 'react';
import Biblioteca from '../src/components/biblioteca/Biblioteca';

jest.mock('firebase/auth', () => {
    return {
        createUsrWithEmailAndPassword: jest.fn(),
        updateProfile: jest.fn(),
        signInWithEmailAndPassword: jest.fn(),
    };
});

jest.mock('firebase/compat/app', () => {
    return {
        apps: [],
        firebase: jest.fn(),
        initializeApp: jest.fn(),
        auth: jest.fn(),
        firestore: jest.fn(),
    };
});

jest.mock('firebase/compat/firestore', () => {
    return jest.fn();
});

jest.mock('firebase/compat/auth', () => {
    return jest.fn();
});

jest.mock('firebase/storage', () => {
    return{
        getStorage: jest.fn(),
    };
});


test ('renders Biblioteca', () => {
    const b = new Biblioteca();
    expect(b).not.toBe(null);
});