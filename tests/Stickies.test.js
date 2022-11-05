import {render, screen} from '@testing-library/react'
import { EditorState } from 'draft-js';
import React from 'react';
import { db } from '../src/components/firebase/firebase';
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
        notes: [
            {
                color: "#E84A64",
                contentEditable: false,
                degree:"-1deg",
                grid: {i:1, x:0, y:Infinity, w:2, h:2},
                id: "1",
                timeStamp:"Aug 6, 2022 11:49 AM",
                title: "Sticky 1",
        }
        ]
    }

    const stickies = new Stickies(props);
    const componentDidMount = stickies.componentDidMount();
    expect(componentDidMount).not.toBeDefined();
});

//test onLayoutChange
test('onLayoutChange', () => {
    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const onLayoutChange = stickies.onLayoutChange();
    expect(onLayoutChange).not.toBeNull();
});

//test onBreakpointChange
test('onBreakpointChange', () => {
    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const onBreakpointChange = stickies.onBreakpointChange();
    expect(onBreakpointChange).not.toBeNull();
});

// test componentWillReceiveProps
test('componentWillReceiveProps', () => {
    const props = {
        university: "uvg",
        type: true,
        notes: [
            {
                color: "#E84A64",
                contentEditable: false,
                degree:"-1deg",
                grid: {i:1, x:0, y:Infinity, w:2, h:2},
                id: "1",
                timeStamp:"Aug 6, 2022 11:49 AM",
                title: "Sticky 1",
        }
        ]
    }

    const stickies = new Stickies(props);
    const componentWillReceiveProps = stickies.componentWillReceiveProps(props);
    expect(componentWillReceiveProps).not.toBeDefined();
});

// test componentWillReceiveProps
test('componentWillReceiveProps2', () => {
    const props = {
        university: "uvg",
        type: true,
    }

    const stickies = new Stickies(props);
    const componentWillReceiveProps = stickies.componentWillReceiveProps(props);
    expect(componentWillReceiveProps).not.toBeDefined();
});


//test deleteNote with firebase
test('deleteNote', () => {
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

    db.collection = jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnValue({
                doc: jest.fn().mockReturnValue({
                    delete:jest.fn().mockResolvedValueOnce({})
                })
            }),
        }),
    });


    const deleteNote = stickies.deleteNote(note);
    expect(deleteNote).not.toBeNull();
});

//test deleteNote with firebase
test('deleteNote2', () => {
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

    db.collection = jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnValue({
                doc: jest.fn().mockReturnValue({
                    delete:jest.fn().mockResolvedValueOnce({})
                })
            }),
        }),
    });


    const deleteNote = stickies.deleteNote(note);
    expect(deleteNote).not.toBeNull();
});


//test fetch from Stickies
test('fetch', () => {
    const props = {
        university: "uvg",
        type: true,
    }

    db.collection = jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnValue({
                get: jest.fn().mockResolvedValueOnce({
                    then: jest.fn().mockResolvedValueOnce({
                    title: "Sticky 1",
                    date: "Aug 6, 2022 11:49 AM",
                    content: "Sticky 1",
                    
                })
            })

            }),
        }),
    });


    const stickies = new Stickies(props);
    const fetch = stickies.fetch();
    expect(fetch).not.toBeNull();


});

//test noteFirebase(note)
test('noteFirebase', () => {
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

    db.collection = jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnValue({
                doc: jest.fn().mockReturnValue({
                    set:jest.fn().mockResolvedValueOnce({})
                })
            }),
        }),
    }); 
});
