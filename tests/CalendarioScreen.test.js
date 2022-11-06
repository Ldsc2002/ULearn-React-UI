import { render } from '@testing-library/react';
import React from 'react';
import CalendarioComp from '../src/components/calendario/CalendarioComp';
import Calendario from '../src/components/calendario/Calendario';
import { db } from '../src/components/firebase/firebase';

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
      storage: jest.fn(),
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

//test to check if the calendario component renders correctly
test('renders_calendario_screen_test', () => {
  render(<Calendario />);
});

//test getprevmonth
test('get_prev_month_test', () => {
  let calendario = new CalendarioComp();
  calendario.getPrevMonth();
  expect(calendario.state.month).toBe(11);
});

//test getnextmonth
test('get_next_month_test', () => {
  let calendario = new CalendarioComp();
  calendario.getNextMonth();
  expect(calendario.state.month).toBe(1);
});