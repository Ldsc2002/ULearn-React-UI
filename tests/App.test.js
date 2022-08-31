import { render } from '@testing-library/react';
import React from 'react';
import PopUp from '../src/components/popup/PopUp';

describe('App tests', () => {
    it('Carga UI', () => {
        render(<PopUp />)
    })
});
