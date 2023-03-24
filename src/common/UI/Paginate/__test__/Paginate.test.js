import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Paginate } from '../index';

describe('<Paginate />', () => {
  it('Should render Paginate', async () => {
    render(<Paginate pageCount={20} />);

    expect(screen.getByText('20')).toBeInTheDocument();
  });
});
