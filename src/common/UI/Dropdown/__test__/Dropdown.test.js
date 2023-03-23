import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { Dropdown } from 'common/UI/Dropdown/Dropdown'
import { DropdownToggle } from 'common/UI/Dropdown/DropdownToggle'
import { DropdownContent } from 'common/UI/Dropdown/DropdownContent'
import { DropdownItem } from 'common/UI/Dropdown/DropdownItem'

describe('<Dropdown />', () => {
  it('should render Dropdown', async () => {
    render(
      <Dropdown>
        <DropdownToggle>Click</DropdownToggle>
        <DropdownContent>
          <DropdownItem>item</DropdownItem>
        </DropdownContent>
      </Dropdown>
    )

    expect(screen.queryByText('item')).toBeNull()
    fireEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('item')).toBeInTheDocument()
  })
})
