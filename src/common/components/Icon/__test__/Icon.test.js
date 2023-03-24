import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Icon, icons } from 'common/components/Icon';
import '@testing-library/jest-dom';

describe('<Icon />', () => {
  test('should render Icon from list of icons', async () => {
    render(<Icon source={icons.close} alt="close" />);

    expect(screen.getByAltText('close')).toBeInTheDocument();
  });

  test('should render Icon with external url', async () => {
    render(
      <Icon
        source="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="car"
      />
    );

    expect(screen.getByAltText('car')).toBeInTheDocument();
  });
});
