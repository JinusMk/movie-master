import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { Icon, icons } from 'common/UI/Icon'

describe('<Icon />', () => {
  it('should render Icon from list of icons', async () => {
    render(<Icon source={icons.play} alt="play" />)

    expect(screen.getByAltText('play')).toBeInTheDocument()
  })

  it('should render Icon with external url', async () => {
    render(
      <Icon
        source="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="car"
      />
    )

    expect(screen.getByAltText('car')).toBeInTheDocument()
  })
})
