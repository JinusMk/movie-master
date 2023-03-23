import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { IntersectionLoader } from '../index'

describe('<IntersectionLoader />', () => {
  it('Should render IntersectionLoader', async () => {
    render(<IntersectionLoader />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})
