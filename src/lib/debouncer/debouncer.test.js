import { describe, test, expect } from 'vitest';
import { debouncer } from '.';
import '@testing-library/jest-dom';

describe('debouncer', () => {
  test('should call function after delay', async () => {
    const mockFn = jest.fn();
    const delayedFunction = debouncer(mockFn, 500);

    delayedFunction();
    expect(mockFn).not.toHaveBeenCalled();

    // wait for 600ms (100ms longer than debounce delay)
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(mockFn).toHaveBeenCalled();
  });
});
