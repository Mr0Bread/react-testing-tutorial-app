import React from 'react';
import TestComponent, { useMockRequest } from './component';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
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
    it('should change state after given delay', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useMockRequest(100));

        expect(result.current[0])
            .toBeTruthy();

        await waitForNextUpdate();

        expect(result.current[0])
            .toBeFalsy();
    })
});
