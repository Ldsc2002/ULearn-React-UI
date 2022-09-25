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


//
test('createBlankNote', () => {

    const props = {
        university: "uvg",
        type: true,
    }

    const {stickies} = render(<Stickies {...props} />);
    expect(stickies.fetch).toHaveBeenCalledTimes(1);

    
});   
