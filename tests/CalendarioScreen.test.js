import { render } from '@testing-library/react';
import { useState, React } from 'react'
import Calendario from '../src/components/calendario/CalendarioComp';
import { db } from '../src/components/firebase/firebase';

//firebase testing
jest.mock('../src/components/firebase/firebase', () => {
  return {
      auth: jest.fn(),
      db: jest.fn(),
  };
});

//test to check if the calendario component renders correctly
test('calendario_render_test', () => {
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