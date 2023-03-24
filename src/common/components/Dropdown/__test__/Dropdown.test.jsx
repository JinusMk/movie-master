import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Dropdown } from '../index';
import { DropdownContent } from '../DropdownContent';
import { DropdownItem } from '../DropdownItem';
import { DropdownToggle } from '../DropdownToggle';
import '@testing-library/jest-dom';

describe('<Dropdown />', () => {
  test('should render Dropdown', async () => {
    render(
      <Dropdown>
        <DropdownToggle>Click</DropdownToggle>
        <DropdownContent>
          <DropdownItem>item</DropdownItem>
        </DropdownContent>
      </Dropdown>
    );

    expect(screen.queryByText('item')).toBeNull();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('item')).toBeInTheDocument();
  });
});
