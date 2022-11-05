import {render, screen} from '@testing-library/react'
import { EditorState } from 'draft-js';
import React from 'react';
import { db } from '../src/components/firebase/firebase';
import Pizarron from '../src/components/pizarron/Pizarron';

//firebase testing
jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
        db: jest.fn(),
    };
});

//test to check if the Pizarron component renders correctly
test('renders Pizarron', () => {

    const props = {
        notes: [],
        showTape: true, 
        showTitle: true,
        output: "hola",
        colors: ['#FFFFFF'],
    }
    const pizarron = new Pizarron(props);
    expect(pizarron).not.toBeNull();
});

//onChange(notes) test
test('onChange(notes) test', () => {
    const props = {
        notes: [],
        showTape: true, 
        showTitle: true,
        output: "hola",
        colors: ['#FFFFFF'],
    }
    const pizarron = new Pizarron(props);
    pizarron.onChange([]);
    expect(pizarron.state.notes).toEqual([]);
});


//test render
test('render test', () => {
    const props = {
        notes: [],
        showTape: true, 
        showTitle: true,
        output: "hola",
        colors: ['#FFFFFF'],
    }
    const userInfo = {
        universidad: "uvg",
    }

    const pizarron = new Pizarron(props);
    pizarron.context = {userInfo};
    pizarron.render();
    expect(pizarron.state.notes).toEqual([]);
});


