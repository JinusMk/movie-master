import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Input } from 'common/components/Input/Input';
import { icons } from 'common/components/Icon';
import '@testing-library/jest-dom';

describe('<Input />', () => {
  test('should render Input', async () => {
    render(<Input placeholder="My input" />);

    expect(screen.getByPlaceholderText('My input')).toBeInTheDocument();
  });

  test('should render Input type number', async () => {
    render(<Input type="number" placeholder="number input" />);

    const input = screen.getByPlaceholderText('number input');
    fireEvent.change(input, { target: { value: '12345' } });

    expect(input.value).toBe('12345');
  });

  test('should render Input with left icon', async () => {
    render(<Input leftIcon={icons.close} />);

    const leftIcon = screen.getByTestId('icon');

    expect(leftIcon).toHaveAttribute('src', 'close.svg');
  });

  test('should render Input with right icon', async () => {
    render(<Input rightIcon={icons.close} />);

    expect(screen.getByTestId('right-icon').firstChild).toHaveAttribute('src', 'close.svg');
  });

  test('should render Input with right icon action', async () => {
    const handleClick = jest.fn();
    render(<Input rightIcon={icons.close} rightIconAction={handleClick} />);
    fireEvent.click(screen.getByTestId('right-icon').firstChild);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
