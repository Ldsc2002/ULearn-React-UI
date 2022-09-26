import TabBarButton from "../src/components/navigation/TabBarButton";
import { render } from '@testing-library/react';
import React from 'react';

describe('TabBarButton tests', () => {
    it('Renders', () => {
        render(
            <TabBarButton></TabBarButton>
        )        
    })
});

describe('TabBarButton tests', () => {
    it('Renders selected', () => {
        render(
            <TabBarButton visualStateIndex='1'></TabBarButton>
        )        
    })
});

describe('TabBarButton tests', () => {
    it('Renders not selected', () => {
        render(
            <TabBarButton visualStateIndex='0'></TabBarButton>
        )        
    })
});