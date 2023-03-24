import { describe, test, expect } from 'vitest';
import { ContentHolder } from 'common/components/ContentHolder/ContentHolder';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<ContentHolder />', () => {
  test('Should render ContentHolder', () => {
    render(
      <ContentHolder>
        <span data-testid="content">Content</span>
      </ContentHolder>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
