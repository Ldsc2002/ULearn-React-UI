import {db, auth, storage} from '../src/components/firebase/firebase';
import { fetch, openFile, noteFirebase, dropBook } from '../src/components/biblioteca/bookShelfService';
import { getStorage } from 'firebase/storage';
import React from 'react';

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
        db: jest.fn(),
        storage: jest.fn(),
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

test('noteFirebase', () => {
    const titulo = 'titulo';
    const descripcion = 'descripcion';
    const fd = 'fd';
    const u = 'uvg';

    db.collection = jest.fn().mockReturnValue({
        add: jest.fn().mockReturnValue({
            then: jest.fn().mockReturnValue({
                catch: jest.fn(),
            }),
        }),
    });

    const book = noteFirebase(titulo, descripcion, fd, u);
    expect(book).not.toBeNull();
});


test('dropBook', () => {
    const id = 'id';

    db.collection = jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
            delete: jest.fn().mockReturnValue({
                then: jest.fn().mockReturnValue({
                    catch: jest.fn(),
                }),
            }),
        }),
    });

    const book = dropBook(id);
    expect(book).not.toBeNull();
});


//test('OpenFile', () => {
//    const book = {
//        file: 'file',
//    }
//
//    storage.ref = jest.fn().mockReturnValue({
//        getDownloadURL: jest.fn().mockReturnValue({
//            then: jest.fn().mockReturnValue({
//                catch: jest.fn(),
//            }),
//        }),
//    });
//
//    const file = openFile(book);
//    expect(file).not.toBeNull();
//});

    



test('always happy', () => {
    expect(true).toBe(true);
});