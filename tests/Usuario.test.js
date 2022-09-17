import { render } from '@testing-library/react';
import React from 'react';
import Usuario from '../src/components/user/Usuario';

jest.mock('../src/components/firebase/firebase', () => {
    return {
        auth: jest.fn(),
    };
});


// This test is to check if the Usuario component renders correctly
test('renders Usuario', () => {
    render(<Usuario />);
});