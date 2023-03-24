import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Dropdown } from 'common/components/Dropdown/Dropdown';
import { DropdownToggle } from 'common/components/Dropdown/DropdownToggle';
import { DropdownContent } from 'common/components/Dropdown/DropdownContent';
import { DropdownItem } from 'common/components/Dropdown/DropdownItem';
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
