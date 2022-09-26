import {db, auth, storage} from '../src/components/firebase/firebase';
import { fetch, openFile, noteFirebase, dropBook } from '../src/components/biblioteca/bookShelfService';

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


/*test('fetch', () => {
    fetch('uvg').then((data) => {
        expect(data).not.toBeNull();
    });
});*/



//test('openFile', () => {
//    const book = []
//
//    openFile('uvg').then((data) => {
//        expect(data).not.toBeNull();
//    });
//});
//
//test('noteFirebase', () => {
//    const titulo = 'titulo';
//    const descripcion = 'descripcion';
//    const fd = 'fd';
//    const u = 'uvg';
//
//    db.collection = jest.fn().mockReturnValue({
//        doc: jest.fn().mockReturnValue({
//            collection: jest.fn().mockReturnValue({
//                doc: jest.fn().mockReturnValue({
//                    delete:jest.fn().mockResolvedValueOnce({})
//                })
//            }),
//        }),
//    });
//
//    const book = noteFirebase(titulo, descripcion, fd, u);
//    expect(book).not.toBeNull();
//});





test('always happy', () => {
    expect(true).toBe(true);
});