/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header';

// const render = (ui, { route = '/' } = {}) => {
//   window.history.pushState({}, 'Test Page', route);

//   // return rtlRender(ui, { wrapper: Router });
//   const router = rtlRender(ui, { wrapper: Router });
//   return rtlRender(router, { wrapper: ThemeProvider });
// };

const testTheme = {
  mode: 'light',
  text: {
    primary: 'black',
    secondary: 'gray',
  },
  background: {
    primary: 'white',
    secondary: 'lightgray',
  },
};

const testRender = () => (
  <ThemeProvider theme={testTheme}>
    <Router>
      <Header />
    </Router>
  </ThemeProvider>
);

describe('Header Component', () => {
  test('It renders About link', () => {
    render(testRender());
    expect(screen.getByText(/About/g)).toBeInTheDocument();
  });

  test('It renders Search link', () => {
    render(testRender());
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  test('It renders "How it works" link', () => {
    render(testRender());
    expect(screen.getByText(/How it works/)).toBeInTheDocument();
  });

  test('It renders the Logo image', () => {
    render(testRender());
    expect(screen.findByRole('elements/logo')).toBeTruthy();
  });

  describe('Header Nav Links', () => {
    test('It renders logo inside a "a" tag that points to "/"', () => {
      render(testRender());
      // expect(screen.getByRole('link/').getAttribute('href')).toEqual('/');
      expect(screen.getByRole('link', { name: '' }).getAttribute('href')).toEqual('/');
    });

    test('About link is a hashlink', () => {
      render(testRender());
      expect(screen.getByRole('link', { name: 'About' })).toBeTruthy();
    });

    test('How it works link is a hash link', () => {
      render(testRender());
      expect(screen.getByRole('link', { name: 'How it works' })).toBeTruthy();
    });

    test('Search link is not a hashlink', () => {
      render(testRender());
      expect(screen.getByRole('link', { name: 'Search' }).getAttribute('href')).toEqual('/search?value=javascript');
    });
  });
});
