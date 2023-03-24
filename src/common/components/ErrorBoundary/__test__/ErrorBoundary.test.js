import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorBoundary } from '../index';

describe('<ErrorBoundary />', () => {
  it('should render children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <div>Child component</div>
      </ErrorBoundary>
    );
    expect(getByText('Child component')).toBeInTheDocument();
  });

  it('should render fallback when an error occurs', () => {
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
