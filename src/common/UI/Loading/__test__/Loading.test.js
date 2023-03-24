import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from '../index';

describe('<Loading />', () => {
  it('should render Dot Loading', async () => {
    render(<Loading />);

    expect(screen.getAllByTestId('dot')).toHaveLength(3);
  });
});
