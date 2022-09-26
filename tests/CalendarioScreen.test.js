import { render } from '@testing-library/react';
import React from 'react';
import Calendario from '../src/components/calendario/CalendarioComp';

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


// This test is to check if the Calendario component renders correctly
test('renders LogInScreen', () => {
    const props = {email: 'stefano@uvg.edu.gt'};
    render(<Calendario {...props} />);
});

// test onClick_elButton to login
test('dateClickHandler', () => {
    window.alert = jest.fn();

    Calendario.dateClickHandler('4-9-2022');

    expect(loginScreen.event.titulo).toBe("hoy");
    expect(loginScreen.event.fecha).toBe("4-9-2022");
    expect(loginScreen.event.contenido).toBe("comer");
});
