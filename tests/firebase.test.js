import { auth, db, storage } from '../src/components/firebase/firebase';

jest.mock('firebase/compat/app', () => {
    return {
        apps: [],
        firebase: jest.fn(),
        initializeApp: jest.fn(),
        auth: jest.fn(),
        firestore: jest.fn( () => {
            return {
                collection: jest.fn( () => {
                    return {
                        doc: jest.fn( () => {
                            return {
                                collection: jest.fn( () => {
                                    return {
                                        set: jest.fn(),
                                        get: jest.fn(),
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }),
    };
});

jest.mock('firebase/storage', () => {
    return {
        getStorage: jest.fn(),
    };
});

jest.mock('firebase/compat/firestore', () => {
    return jest.fn();
});

jest.mock('firebase/compat/auth', () => {
    return jest.fn();
});

describe('App tests', () => {
    it('Navigates to crearCuenta', () => {
        db.collection('notitas').doc('uvg').collection('uvg').get()
    })
});