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
        db: jest.fn(
          () => {throw ({'error':{'code': 'auth/user-not-found'}})}
        ),
    };
});

jest.mock('react', ()=>({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))
import { useState } from 'react';


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
    crearCuenta.registerName = "Stefano";
    crearCuenta.registerMajor = "Computer Science";
    crearCuenta.registerCollege = "UVG";

    crearCuenta.onClick_elButtonCopy();

    expect(crearCuenta.registerEmail).toBe("stefano@uvg.edu.gt");
    expect(crearCuenta.registerPassword).toBe("Stefano123");
    expect(crearCuenta.registerName).toBe("Stefano");
    expect(crearCuenta.registerMajor).toBe("Computer Science");
    expect(crearCuenta.registerCollege).toBe("UVG");
});

// test onClick_elButtonCopy to login
test('onClick_elButtonCopy',  async () => {

  let crearCuenta = new CrearCuentaScreen()
  crearCuenta.registerEmail = "stefano@uvg.edu.gt";
  crearCuenta.registerPassword = "Stefano123";
  crearCuenta.registerName = "Stefano";
  crearCuenta.registerMajor = "Computer Science";
  crearCuenta.registerCollege = "UVG";

  crearCuenta.errorType = 'auth/user-not-found';
  expect(window.alert).toHaveBeenCalledWith("Error desconocido.\nIntente más tarde.");
});

describe("Test", ()=>{
  beforeEach(()=>{
    useState.mockImplementation(jest.requireActual('react').useState);
    //other preperations
  })
  //test textErrorTypeChanged_elField
  test('textErrorTypeChanged_elField', () => {

    let crearCuenta = new CrearCuentaScreen()
    crearCuenta.textErrorTypeChanged_elField("auth/user-not-found");
    expect(crearCuenta.errorType).toBe(undefined);

  });
})

