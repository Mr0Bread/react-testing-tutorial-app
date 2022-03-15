import React from 'react';
import TestComponent from './component';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import * as TestComponentModule from './component';
import '@testing-library/jest-dom';

describe('TestComponent', () => {
    it('should match snapshot', () => {
        expect(
            create(<TestComponent />)
                .toJSON()
        )
            .toMatchSnapshot();
    });

    it('should render properly', async () => {
        render(
            <TestComponent>
                <div>Node</div>
            </TestComponent>
        );

        expect(screen.getByText('Loading'))
            .toBeInTheDocument();

        expect(await screen.findByText('Node'))
            .toBeInTheDocument();
    });
});

describe('useMockRequest', () => {
    it('should change state after given delay', () => {
        const useMockRequestSpy = jest.spyOn(TestComponentModule, 'useMockRequest');

        render(
            <TestComponent>
                <div>Node</div>
            </TestComponent>
        );

        expect(useMockRequestSpy).toBeCalled();
    })
});
