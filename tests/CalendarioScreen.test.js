import { render } from '@testing-library/react';
import React from 'react';
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

  const props = {
      email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);
  expect(calendario).not.toBeNull();
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

// //test deleteNote with firebase
test('deleteNote', () => {
  const props = {
    email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);
  const event= {
    id: '1', 
    contenido:'test', 
    fecha:'1-9-2022',
    titulo:'Test', 
    user:'stefano@uvg.edu.gt',
  }

  db.collection = jest.fn().mockReturnValue({
      doc: jest.fn().mockReturnValue({
          collection: jest.fn().mockReturnValue({
              doc: jest.fn().mockReturnValue({
                  delete:jest.fn().mockResolvedValueOnce({})
              })
          }),
      }),
  });


  const deleteNote = calendario.borrarInador()
  expect(deleteNote).not.toBeNull();
});