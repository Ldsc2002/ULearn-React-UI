import { render } from '@testing-library/react';
import React from 'react';
import StartScreen from '../src/components/start/StartScreen';

jest.mock('firebase/auth', () => {
    return {
        createUserWithEmailAndPassword: jest.fn(),
        updateProfile: jest.fn(),
        getAuth: jest.fn(),
        onAuthStateChanged: jest.fn(),
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

describe('StartScreen tests', () => {
    it('Renders', () => {
        render(
            <StartScreen></StartScreen>
        )        
    })
});