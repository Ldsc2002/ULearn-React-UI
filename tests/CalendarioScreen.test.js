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

// //test borraInador
// test('borraInador', () => {
//   const props = {
//     university: "uvg",
//     type: true,
//   }
//   const calendario = new Calendario(props);
//   const borrado = calendario.borraInador("id");
//   console.log("++++++++++++++++",borrado);
//   expect(borrado).not.toBeNull();
// });

//test guidGenerator
test('guidGenerator', () => {
  const props = {
    university: "uvg",
    type: true,
  }
  const calendario = new Calendario(props);
  const guid = calendario.guidGenerator();
  expect(guid).not.toBeNull();
});

// test('borrarinador', () => {
//   const id = 'id';
//   db.collection = jest.fn().mockReturnValue({
//     doc: jest.fn().mockReturnValue({
//       delete: jest.fn().mockReturnValue({
//         then: jest.fn().mockReturnValue({
//           catch: jest.fn(),
//         }),
//       }),
//     }),
//   });
//   const calendario = new Calendario();
//   const book = calendario.borrarinador(id);
//   expect(book).not.toBeNull();
// }