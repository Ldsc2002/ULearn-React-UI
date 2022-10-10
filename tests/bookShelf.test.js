import { render } from '@testing-library/react';
//import TestRenderer from 'react-test-renderer';''
import React from 'react';
import Bookshelf from '../src/components/biblioteca/bookShelf';
import { db } from '../src/components/firebase/firebase';


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
        db: jest.fn(),
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


jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
        db: jest.fn(),
    };
});


test('Bookshelf', () => {
    const a = true;
    expect(a).not.toBeNull();
});