import {render, screen} from '@testing-library/react'
import React from 'react';
import Stickies from '../src/components/pizarron/Stickies';

//firebase testing
jest.mock('../src/components/firebase/firebase', () => {
      return {
          auth: jest.fn(),
          db: jest.fn(),
      };
});

// This test is to check if the Usuario component renders correctly
test('renders Stickies', () => {
    render(<Stickies />);
});


//create Blank Sticky
test('createBlankNote', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const note = stickies.createBlankNote();
    expect(note).not.toBeNull();


    
});   

// // delete Sticky
// test('deleteNote', () => {

//     const props = {
//         university: "uvg",
//         type: true,
//     }

//     const stickies = new Stickies(props);
//     const note = stickies.createBlankNote();
//     stickies.deleteNote();
// });


//is superuser
test('isSuperUser', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const superuser = stickies.isSuperUser();
    expect(superuser).toBe(false);
});

//test render
test('render', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const render = stickies.render();
    expect(render).not.toBeNull();
});


//test componentDidMount
test('componentDidMount', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const componentDidMount = stickies.componentDidMount();
    expect(componentDidMount).not.toBeNull();
});

