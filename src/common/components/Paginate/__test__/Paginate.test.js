import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Paginate } from '../index';
import '@testing-library/jest-dom';

describe('<Paginate />', () => {
  test('Should render Paginate', async () => {
    render(<Paginate pageCount={20} />);

    expect(screen.getByText('20')).toBeInTheDocument();
  });
});
