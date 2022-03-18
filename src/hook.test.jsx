import { renderHook } from '@testing-library/react-hooks';
import { useMockRequest } from './component';

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