import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter, Router } from 'react-router-dom';
import App from '../src/components/app/App';
import { createMemoryHistory } from 'history';

jest.mock('firebase/auth', () => {
    return {
        createUserWithEmailAndPassword: jest.fn(),
        updateProfile: jest.fn(),
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

describe('App tests', () => {
    it('Carga UI', () => {
        render(
            <HashRouter>
                <App />
            </HashRouter>
        )
    })
});

describe('App tests', () => {
    it('Navigates to login', () => {
        let instance = new App.WrappedComponent();
        const history = createMemoryHistory({
            initialEntries: ['/']
        });

        instance.props = {
            history: history,
        }
        
        instance.goToScreen('Login', history, {});

        render(
            <Router history={history}>
                <instance/>
            </Router>
        )        
    })
});

describe('App tests', () => {
    it('Navigates to crearCuenta', () => {
        let instance = new App.WrappedComponent();
        const history = createMemoryHistory({
            initialEntries: ['/']
        });

        instance.props = {
            history: history,
        }
        
        instance.goToScreen('crearCuenta', history, {});

        render(
            <Router history={history}>
                <instance/>
            </Router>
        )        
    })
});

describe('App tests', () => {
    it('Navigates to start', () => {
        let instance = new App.WrappedComponent();
        const history = createMemoryHistory({
            initialEntries: ['/']
        });

        instance.props = {
            history: history,
        }
        
        instance.goToScreen('start', history, {});

        render(
            <Router history={history}>
                <instance/>
            </Router>
        )        
    })
});

describe('App tests', () => {
    it('Navigation default', () => {
        let instance = new App.WrappedComponent();
        const history = createMemoryHistory({
            initialEntries: ['/']
        });

        instance.props = {
            history: history,
        }
        
        instance.goToScreen('invalid', history, {});

        render(
            <Router history={history}>
                <instance/>
            </Router>
        )        
    })
});

describe('App tests', () => {
    it('Updates data slot', () => {
        let instance = new App.WrappedComponent();
        const history = createMemoryHistory({
            initialEntries: ['/']
        });

        instance.props = {
            history: history,
        }
        
        instance.updateDataSlot('test', 'testing', 0);

        render(
            <Router history={history}>
                <instance/>
            </Router>
        )        
    })
});


