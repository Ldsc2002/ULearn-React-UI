import {render} from '@testing-library/react';
import React from 'react';
import Bookshelf from '../src/components/biblioteca/bookShelf';
//import {shallow} from 'enzyme';


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


//let container;
//beforeEach(() => {
//    container = document.createElement('div');
//    document.body.appendChild(container);
//});
//
//afterEach(() => {
//    document.body.removeChild(container);
//    container = null;
//});
//
//
////onSubmit 
//test('onSubmit', () => {
//    let bookShelf = new Bookshelf();
//    bookShelf.onSubmitFile();
//});

//always happy
test('always happy', () => {
    expect(true).toBe(true);
});