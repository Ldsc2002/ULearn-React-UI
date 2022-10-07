import { render } from '@testing-library/react';
import React from 'react';
import PopUp from '../src/components/popup/PopUp';

describe('Pop up tests', () => {
    it('Carga UI', () => {
        render(<PopUp />)
    })
});

//test props.trigger is true
test('props.trigger is true', () => {
    const props = {
        trigger: true
    }

    let popup = new PopUp(props)

    expect(popup).toBeDefined()
});