import {Bookshelf} from '../src/components/biblioteca/bookShelf';


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

/*test('Bookshelf', () => {
    const bookshelf = ;
    expect(bookshelf).not.toBeNull();
});*/

describe ('Bookshelf', () => {
    it ('should be defined', () => {
        expect(Bookshelf).toBeDefined();
    });
});