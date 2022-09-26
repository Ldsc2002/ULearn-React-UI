import {render, screen} from '@testing-library/react'
import { EditorState } from 'draft-js';
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

//create Note
test('createNote', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const note = stickies.createNote("titulo", "contenido", "hoy", 1);
    expect(note).not.toBeNull();
});


//renderNote
test('renderNote', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);

    const note= {
        color: "#E84A64",
        contentEditable: false,
        degree:"-1deg", 
        grid: {i:1, x:0, y:Infinity, w:2, h:2},
        id: "1",
        timeStamp:"Aug 6, 2022 11:49 AM", 
        title: "Sticky 1",
    }

    const renderedNote = stickies.renderNote(note);
    expect(renderedNote).not.toBeNull();
});


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


