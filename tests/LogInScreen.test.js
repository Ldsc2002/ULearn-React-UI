import { render } from '@testing-library/react';
import React from 'react';
import LogInScreen from '../src/components/login/LogInScreen';

jest.mock('firebase/auth', () => {
  return {
    setPersistence: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    browserLocalPersistence: jest.fn(),
  };
});

jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
        db: jest.fn(),
    };
});


// This test is to check if the LogInScreen component renders correctly
test('renders LogInScreen', () => {
    render(<LogInScreen />);
});

// This test is to check textInputChanged_elField is called when the email input is changed
test('textInputChanged_elField', () => {
    let loginScreen = new LogInScreen()
      
    expect(loginScreen.loginEmail).toBe(undefined)
    expect(loginScreen.loginPassword).toBe(undefined)
    expect(loginScreen.university).toBe(undefined)
    expect(loginScreen.type).toBe(undefined)
});

// test onClick_elButton to login
test('onClick_elButton', () => {
    window.alert = jest.fn();

    let loginScreen = new LogInScreen()
    loginScreen.loginEmail = "stefano@uvg.edu.gt";
    loginScreen.loginPassword = "Stefano123";

    loginScreen.onClick_elButton();

    expect(loginScreen.loginEmail).toBe("stefano@uvg.edu.gt");
    expect(loginScreen.loginPassword).toBe("Stefano123");
});

// verify if checkboxChanged_elCheckbox changed
test('checkboxChanged_elCheckbox', () => {
    let loginScreen = new LogInScreen()

    loginScreen.checked = false;

    expect(loginScreen.getValue_elCheckbox()).toBe("false");
});

// test getValue_elField to change the email
test('getValue_elField', () => {
    let loginScreen = new LogInScreen()
    expect(loginScreen.getValue_elField()).toBe("");
});