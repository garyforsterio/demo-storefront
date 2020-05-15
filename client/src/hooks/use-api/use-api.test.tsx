import { renderHook } from '@testing-library/react-hooks';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

import useApi from '.';

enableFetchMocks();

const DUMMY_URL = '/items';

const DUMMY_DATA = 'test';

const DUMMY_RESPONSE = {
  data: DUMMY_DATA,
};

const DUMMY_ERROR_MESSAGE = 'fake error message';

describe('useApi', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  afterAll(() => {
    fetchMock.disableMocks();
  });
  describe('response', () => {
    it('should default to undefined', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      expect(result.current.response).toBe(undefined);
      // Ensure completion
      fetchMock.mockResponseOnce('');
      await waitForNextUpdate();
    });

    it('should pass response', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(DUMMY_RESPONSE));
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      await waitForNextUpdate();
      expect(fetchMock).toBeCalledTimes(1);
      expect(result.current.response).toEqual(DUMMY_DATA);
    });
  });

  describe('error', () => {
    it('should default to undefined', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      expect(result.current.error).toBe(undefined);
      // Ensure completion
      fetchMock.mockResponseOnce('');
      await waitForNextUpdate();
    });

    it('should pass error', async () => {
      const fakeError = new Error(DUMMY_ERROR_MESSAGE);
      fetchMock.mockReject(fakeError);
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      await waitForNextUpdate();
      expect(fetchMock).toBeCalledTimes(1);
      expect(result.current.error).toEqual(fakeError);
    });

    it('should not pass error on normal response', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(DUMMY_RESPONSE));
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      await waitForNextUpdate();
      expect(fetchMock).toBeCalledTimes(1);
      expect(result.current.error).toBe(undefined);
    });
  });

  describe('loading', () => {
    it('should default to true', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      expect(result.current.loading).toBe(true);
      // Ensure completion
      fetchMock.mockResponseOnce('');
      await waitForNextUpdate();
    });

    it('should change to false on error response', async () => {
      const fakeError = new Error(DUMMY_ERROR_MESSAGE);
      fetchMock.mockReject(fakeError);
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      await waitForNextUpdate();
      expect(fetchMock).toBeCalledTimes(1);
      expect(result.current.loading).toBe(false);
    });

    it('should change to false on normal response', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(DUMMY_RESPONSE));
      const { result, waitForNextUpdate } = renderHook(() => useApi(DUMMY_URL));
      await waitForNextUpdate();
      expect(fetchMock).toBeCalledTimes(1);
      expect(result.current.loading).toBe(false);
    });
  });
});
