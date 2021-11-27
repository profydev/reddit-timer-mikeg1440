/* eslint-disable react/react-in-jsx-scope */
import { render as rtlRender, screen, getByRole } from '@testing-library/react';
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

  test('It renders logo inside a "a" tag that points to "/"', () => {
    render(<Header />);
    // expect(screen.getByRole('link/').getAttribute('href')).toEqual('/');
    expect(screen.getByRole('link', { name: '' }).getAttribute('href')).toEqual('/');
  });
});
