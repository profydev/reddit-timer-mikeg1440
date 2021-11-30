import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

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

const themeWrapper = () => (
  <MemoryRouter>
    <ThemeProvider theme={testTheme}>
      <Footer/>
    </ThemeProvider>
  </MemoryRouter>
);

test('Footer renders 3 links', () => {
  render(themeWrapper());
  const links = document.querySelectorAll('a');
  expect(links.length).toEqual(3);
});

test('Should have a link to profy.dev employer site', () => {
  render(themeWrapper());
  expect(screen.getByRole('link', { name: 'profy.dev' })).toBeTruthy();
});

test('Should have a link to /terms page', () => {
  render(themeWrapper());
  expect(screen.getByRole('link', { name: 'Terms & Privacy' })).toBeTruthy();
});

test('Should have a link to the home page', () => {
  render(themeWrapper());
  const homeLink = screen.getByRole('link', { name: '' });
  expect(homeLink.getAttribute('href')).toEqual('/');
});
