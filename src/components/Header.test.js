/* eslint-disable react/react-in-jsx-scope */
import { render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test Page', route);

  return rtlRender(ui, { wrapper: Router });
};

describe('Header Component', () => {
  test('It renders About link', () => {
    render(<Header />);
    expect(screen.getByText(/About/g)).toBeInTheDocument();
  });

  test('It renders Search link', () => {
    render(<Header />);
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  test('It renders "How it works" link', () => {
    render(<Header />);
    expect(screen.getByText(/How it works/)).toBeInTheDocument();
  });

  test('It renders the Logo image', () => {
    render(<Header />);
    expect(screen.findByRole('elements/logo')).toBeTruthy();
    screen.debug();
  });

  describe('Header Nav Links', () => {
    test('It renders logo inside a "a" tag that points to "/"', () => {
      render(<Header />);
      // expect(screen.getByRole('link/').getAttribute('href')).toEqual('/');
      expect(screen.getByRole('link', { name: '' }).getAttribute('href')).toEqual('/');
    });

    test('About link is a hashlink', () => {
      render(<Header />);
      expect(screen.getByRole('link', { name: 'About' })).toBeTruthy();
    });

    test('How it works link is a hash link', () => {
      render(<Header />);
      expect(screen.getByRole('link', { name: 'How it works' })).toBeTruthy();
    });

    test('Search link is not a hashlink', () => {
      render(<Header />);
      expect(screen.getByRole('link', { name: 'Search' }).getAttribute('href')).toEqual('/search?value=javascript');
    });
  });
});
