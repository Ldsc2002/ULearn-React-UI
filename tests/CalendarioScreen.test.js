import { render } from '@testing-library/react';
import React from 'react';
import Calendario from '../src/components/calendario/CalendarioComp';

//firebase testing
jest.mock('../src/components/firebase/firebase', () => {
  return {
      auth: jest.fn(),
      db: jest.fn(),
  };
});

//test to check if the Pizarron component renders correctly
test('calendario_render_test', () => {

   const props = {
      email: 'stefano@uvg.edu.gt'
  }
  const calendario = new Calendario(props);
  expect(calendario).not.toBeNull();
});
