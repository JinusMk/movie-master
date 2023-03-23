import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { ContentHolder } from 'common/UI/ContentHolder/ContentHolder'

describe('<ContentHolder />', () => {
  it('Should render ContentHolder', async () => {
    render(
      <ContentHolder>
        <span data-testid="content">Content</span>
      </ContentHolder>
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
