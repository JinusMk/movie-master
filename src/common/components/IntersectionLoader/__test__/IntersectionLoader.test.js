import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { IntersectionLoader } from '../index';
import '@testing-library/jest-dom';

describe('<IntersectionLoader />', () => {
  test('Should render IntersectionLoader', async () => {
    render(<IntersectionLoader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
