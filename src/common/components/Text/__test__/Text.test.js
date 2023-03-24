/* eslint-disable no-console */
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import 'lib/i18n';
import { Text } from 'common/components/Text/Text';
import '@testing-library/jest-dom';

describe('<Text />', () => {
  test('should render Text', () => {
    render(<Text>My text</Text>);

    expect(screen.getByText('My text')).toBeInTheDocument();
  });

  test('should render Text with small font-size', async () => {
    render(<Text fontSize={'sm'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('sm', {
      exact: false,
    });
  });

  test('should render Text with large font-size', async () => {
    render(<Text fontSize={'lg'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('lg', {
      exact: false,
    });
  });

  test('should render Text with extra large font-size', async () => {
    render(<Text fontSize={'xl'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl', {
      exact: false,
    });
  });

  test('should render Text with extra large 2 font-size', async () => {
    render(<Text fontSize={'xl-2'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl-2', {
      exact: false,
    });
  });

  test('should render Text with extra large 3 font-size', async () => {
    render(<Text fontSize={'xl-3'}>My text</Text>);

    expect(screen.getByText('My text')).toHaveClass('xl-3', {
      exact: false,
    });
  });
});
