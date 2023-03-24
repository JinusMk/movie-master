import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '..';
import '@testing-library/jest-dom';

describe('<ErrorBoundary />', () => {
  test('Should render ErrorBoundary', async () => {
    render(
      <ErrorBoundary>
        <div test-id="test"></div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
