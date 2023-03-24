import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorBoundary } from '../index';

describe('<ErrorBoundary />', () => {
  test('should render children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <div>Child component</div>
      </ErrorBoundary>
    );
    expect(getByText('Child component')).toBeInTheDocument();
  });

  test('should render fallback when an error occurs', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(getByText('Error occurred')).toBeInTheDocument();
  });
});
