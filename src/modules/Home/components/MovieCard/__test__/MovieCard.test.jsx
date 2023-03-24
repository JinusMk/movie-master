import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import MovieCard from '../index';

describe('<MovieCard/>', () => {
  test('should render the movie card with correct title', async () => {
    render(<MovieCard title="The Shawshank Redemption"></MovieCard>);
    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
  });

  test('should render the movie card with correct year', async () => {
    render(<MovieCard year="1994" />);
    expect(screen.getByText('1994')).toBeInTheDocument();
  });

  test('should render the movie card with correct poster', async () => {
    const posterUrl = 'https://example.com/movie-poster.jpg';
    render(<MovieCard poster={posterUrl} />);
    expect(screen.getByAltText('')).toHaveAttribute('src', posterUrl);
  });

  test('should call onCardClick with the correct id when clicked', async () => {
    const id = '1234';
    const mockOnClick = jest.fn();
    render(<MovieCard id={id} onCardClick={mockOnClick} />);
    screen.getByRole('presentation').click();
    expect(mockOnClick).toHaveBeenCalledWith(id);
  });
});
