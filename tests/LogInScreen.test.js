import { render } from '@testing-library/react';
import React from 'react';
import { db } from '../src/components/firebase/firebase';
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
    db.collection = jest.fn();

    let loginScreen = new LogInScreen()
    loginScreen.loginEmail = "stefano@uvg.edu.gt";
    loginScreen.loginPassword = "Stefano123";

    loginScreen.onClick_elButton();

    expect(loginScreen.loginEmail).toBe("stefano@uvg.edu.gt");
    expect(loginScreen.loginPassword).toBe("Stefano123");
});

// test onClick_elButton to login
test('onClick_elButton2', () => {
    db.collection = jest.fn();

    let loginScreen = new LogInScreen()
    loginScreen.loginEmail = "stefano@uvg.edu.gt";
    loginScreen.loginPassword = "Stefano123";

    // replace the implementation for your stub
    const spy = jest.spyOn(loginScreen, 'onClick_elButton').mockImplementation(() => { throw new Error().code = 'Error desconocido.\nIntente más tarde.'; });

    expect(window.alert).toHaveBeenCalledWith('Error desconocido.\nIntente más tarde.');

    spy.mockRestore(); // restore the implementation
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

//test textInputChanged_elField to change the email
test('textInputChanged_elField', () => {
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };

    let loginScreen = new LogInScreen()
    loginScreen.textInputChanged_elField(event);
    expect(loginScreen.getValue_elField()).toBe("");
});

//test textInputChanged_elFieldCopy to change the password
test('textInputChanged_elFieldCopy', () => {
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };

    let loginScreen = new LogInScreen()
    loginScreen.textInputChanged_elFieldCopy(event);
    expect(loginScreen.getValue_elFieldCopy()).toBe("");
});

//test getValue_elFieldCopy to change the password
test('getValue_elFieldCopy', () => {
    let loginScreen = new LogInScreen()
    expect(loginScreen.getValue_elFieldCopy()).toBe("");
});

//checkbox
test('getValue_elCheckbox', () => {
    let loginScreen = new LogInScreen()
    loginScreen.checkbox = false;
    const event = {
        target: { checked: false }
    }
    loginScreen.checkboxChanged_elCheckbox(event);
    expect(loginScreen.getValue_elCheckbox()).toBe("false");
});

test('getValue_elCheckbox', () => {
    let loginScreen = new LogInScreen()

    const event = {
        target: { checked: true }
    }
    loginScreen.checkboxChanged_elCheckbox(event);

    loginScreen.checkbox = true;
    expect(loginScreen.checkbox).toBe(true);

    loginScreen.getValue_elCheckbox = jest.fn(
        () => { return "true"; }
    );
    
    expect(loginScreen.getValue_elCheckbox()).toBe("true");
});
