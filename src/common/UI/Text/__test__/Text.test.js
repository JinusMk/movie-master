/* eslint-disable no-console */
import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'lib/i18n';
import { Text } from 'common/UI/Text/Text';

describe('<Text />', () => {
  it('should render Text', async () => {
    render(<Text>My text</Text>);

    expect(screen.getByText('My text')).toBeInTheDocument();
  });

  it('should render Text with small font-size', async () => {
    render(<Text fontSize={'sm'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('sm', {
      exact: false,
    });
  });

  it('should render Text with large font-size', async () => {
    render(<Text fontSize={'lg'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('lg', {
      exact: false,
    });
  });

  it('should render Text with extra large font-size', async () => {
    render(<Text fontSize={'xl'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl', {
      exact: false,
    });
  });

  it('should render Text with extra large 2 font-size', async () => {
    render(<Text fontSize={'xl-2'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl-2', {
      exact: false,
    });
  });

  it('should render Text with extra large 3 font-size', async () => {
    render(<Text fontSize={'xl-3'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl-3', {
      exact: false,
    });
  });
});
