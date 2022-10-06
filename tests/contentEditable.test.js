import {render, screen} from '@testing-library/react'
import { EditorState } from 'draft-js';
import React from 'react';
import { db } from '../src/components/firebase/firebase';
import ContentEditable from '../src/components/pizarron/ContentEditable';

//firebase testing
jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
        db: jest.fn(),
    };
});

//test to check if the ContentEditable component renders correctly
test('renders ContentEditable', () => {
    render(<ContentEditable />);
});

//test shouldComponentUpdate
test('shouldComponentUpdate', () => {
    const props = {
        html: "hola",
        disabled: false,
        onChange: jest.fn(),
    }

    
    const contentEditable = new ContentEditable(props);
    contentEditable.editable = {
        innerHTML: "hola",
    }

    const shouldUpdate = contentEditable.shouldComponentUpdate(props);
    expect(shouldUpdate).toBe(false);
});

//test componentDidUpdate
test('componentDidUpdate', () => {
    const props = {
        html: "hola",
        disabled: false,
        onChange: jest.fn(),
    }

    
    const contentEditable = new ContentEditable(props);
    contentEditable.editable = {
        innerHTML: "hola",
    }

    contentEditable.componentDidUpdate(props);
    expect(contentEditable.editable.innerHTML).toBe("hola");
});

//test componentDidUpdate
test('componentDidUpdate', () => {
    const props = {
        html: "hola",
        disabled: false,
        onChange: jest.fn(),
    }

    
    const contentEditable = new ContentEditable(props);
    contentEditable.editable = {
        innerHTML: "adios",
    }

    contentEditable.componentDidUpdate(props);
    expect(contentEditable.editable.innerHTML).toBe("hola");
});


//test emitChange to call props.onChange
test('emitChange', () => {
    const props = {
        html: "hola",
        disabled: false,
        onChange: jest.fn(),
    }

    
    const contentEditable = new ContentEditable(props);
    contentEditable.editable = {
        innerHTML: "hola",
    }

    contentEditable.emitChange();
    expect(props.onChange).toHaveBeenCalled();
});

