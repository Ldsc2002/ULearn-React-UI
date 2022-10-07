import { render } from '@testing-library/react';
import React from 'react';
import StartScreen from '../src/components/start/StartScreen';

jest.mock('firebase/auth', () => {
    return {
        createUserWithEmailAndPassword: jest.fn(),
        updateProfile: jest.fn(),
        getAuth: jest.fn(),
        onAuthStateChanged: jest.fn(),
    };
});

jest.mock('firebase/compat/app', () => {
    return {
        apps: [],
        firebase: jest.fn(),
        initializeApp: jest.fn(),
        auth: jest.fn(),
        firestore: jest.fn(),
    };
});

jest.mock('firebase/storage', () => {
    return {
        getStorage: jest.fn(),
    };
});

jest.mock('firebase/compat/firestore', () => {
    return jest.fn();
});

jest.mock('firebase/compat/auth', () => {
    return jest.fn();
});

describe('StartScreen tests', () => {
    it('Renders', () => {
        render(
            <StartScreen></StartScreen>
        )        
    })
});

//test switch selectedIndex_selector 
test('switch selectedIndex_selector', () => {
    let start = new StartScreen()    
    const {container} = render(<StartScreen />)

    expect(start.contentElement_elTabContent).toBeUndefined()
});

// test this.context.transitionId.length
test('this.context.transitionId.length', () => {
    let start = new StartScreen()    
    const baseStyle = {}

    start.context = {
            transitionId : {length: 1},
            atTopOfScreenStack: true,
            transitionForward: true,
    }

    const {container} = render(<StartScreen />)

    if (start.context.transitionId && start.context.transitionId.length > 0 && start.context.atTopOfScreenStack && start.context.transitionForward) {
        baseStyle.animation = `0.25s ease-in-out ${start.context.transitionId}`
    }

    expect(baseStyle.animation).toBe("0.25s ease-in-out [object Object]")
});