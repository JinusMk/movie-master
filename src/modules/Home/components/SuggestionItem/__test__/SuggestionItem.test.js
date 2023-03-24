import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SuggestionItem from '../index';

describe('<SuggestionItem />', () => {
  test('should render the SuggestionItem component', () => {
    render(
      <MemoryRouter>
        <SuggestionItem title="Inception" year="2010" poster="/inception.jpg" id="1234" />
      </MemoryRouter>
    );
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('2010')).toBeInTheDocument();
  });

  test('should have a link to movie details page', () => {
    render(
      <MemoryRouter>
        <SuggestionItem title="Inception" year="2010" poster="/inception.jpg" id="1234" />
      </MemoryRouter>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/1234');
  });
});
