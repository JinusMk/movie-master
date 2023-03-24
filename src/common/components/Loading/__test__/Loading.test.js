import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Loading } from '../index';
import '@testing-library/jest-dom';

describe('<Loading />', () => {
  test('should render Dot Loading', async () => {
    render(<Loading />);

    expect(screen.getAllByTestId('dot')).toHaveLength(3);
  });
});
