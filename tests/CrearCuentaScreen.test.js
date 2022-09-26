import { render } from '@testing-library/react';
import React from 'react';
import CrearCuentaScreen from '../src/components/signup/CrearCuentaScreen';

jest.mock('firebase/auth', () => {
  return {
    createUserWithEmailAndPassword: jest.fn(),
    updateProfile: jest.fn(),
  };
});

jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
        db: jest.fn(),
    };
});


// This test is to check if the CrearCuentaScreen component renders correctly
test('renders CrearCuentaScreen', () => {
    render(<CrearCuentaScreen />);
});

// test onClick_elButton to login
test('onClick_elButtonCopy', () => {
    window.alert = jest.fn();

    let crearCuenta = new CrearCuentaScreen()
    crearCuenta.registerEmail = "stefano@uvg.edu.gt";
    crearCuenta.registerPassword = "Stefano123";

    crearCuenta.onClick_elButtonCopy();

    expect(crearCuenta.registerEmail).toBe("stefano@uvg.edu.gt");
    expect(crearCuenta.registerPassword).toBe("Stefano123");
});
