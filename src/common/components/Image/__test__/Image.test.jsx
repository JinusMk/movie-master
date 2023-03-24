import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Image } from 'common/components/Image/Image';
import '@testing-library/jest-dom';

describe('<Image />', () => {
  test('Should render Image', async () => {
    render(
      <Image
        url="https://i.pinimg.com/originals/65/bc/0e/65bc0e5c85709be7f4bdcd3cfa23c2b9.jpg"
        alt="travel"
      />
    );

    expect(screen.getByTestId('img')).toHaveClass('image', {
      exact: false,
    });
  });
});
