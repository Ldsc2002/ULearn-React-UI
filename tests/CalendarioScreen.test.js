import { render } from '@testing-library/react';
import React from 'react';
import Calendario from '../src/components/calendario/CalendarioComp';
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
test('calendario_render_test', () => {
  db.collection = jest.fn().mockReturnValue({
            get: jest.fn().mockReturnValue({
                then:jest.fn().mockResolvedValueOnce({})
            })
});
  render (<Calendario/>)

});

//test date click handler
test('date_click_handler', () => {
 
  const props = {
    email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);

  date = '4-9-2022';
  const dateClickHandler = calendario.dateClickHandler(date);
  expect(dateClickHandler).not.toBeNull();
});

// //test readInador
test('new_date_inador', () => {
  const props = {
    email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);

  const content = 'test';
  const fecha = '1-9-2022';
  const title = 'test';
  const user = 'stefano@uvg.edu.gt';
  const hoyEs = '1-9-2022';

  const newDateI = calendario.borrarInador(content, fecha, title, user, hoyEs);
  expect(newDateI).not.toBeNull();
});

//test nameClass
test('name_class', () => {
  const props = {
    email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);

  const fecha = '1-9-2022';

  const nameC = calendario.nameClass(fecha);
  expect(nameC).not.toBeNull();
});