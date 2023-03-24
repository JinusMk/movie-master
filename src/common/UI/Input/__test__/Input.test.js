import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Input } from 'common/UI/Input/Input';
import { icons } from 'common/UI/Icon';

describe('<Input />', () => {
  it('should render Input', async () => {
    render(<Input placeholder="My input" />);

    expect(screen.getByPlaceholderText('My input')).toBeInTheDocument();
  });

  it('should render Input type number', async () => {
    render(<Input type="number" placeholder="number input" />);

    const input = screen.getByPlaceholderText('number input');
    fireEvent.change(input, { target: { value: '12345' } });

    expect(input.value).toBe('12345');
  });

  it('should render Input with left icon', async () => {
    render(<Input leftIcon={icons.close} />);

    const leftIcon = screen.getByTestId('icon');

    expect(leftIcon).toHaveAttribute('src', 'close.svg');
  });

  it('should render Input with right icon', async () => {
    render(<Input rightIcon={icons.close} />);

    expect(screen.getByTestId('right-icon').firstChild).toHaveAttribute('src', 'close.svg');
  });

  it('should render Input with right icon action', async () => {
    const handleClick = jest.fn();
    render(<Input rightIcon={icons.close} rightIconAction={handleClick} />);
    fireEvent.click(screen.getByTestId('right-icon').firstChild);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
