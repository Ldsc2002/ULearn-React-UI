import { render } from '@testing-library/react';
import React from 'react';
import PopUp from '../src/components/popup/PopUp';

describe('Pop up tests', () => {
    it('Carga UI', () => {
        render(<PopUp />)
    })
});