import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const theme = {
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

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<Placeholder msg="Home" />} />
          <Route path="/search" element={<Placeholder msg="Search" />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

function Placeholder({ msg }) {
  return (
    <>
      <h1>{msg}</h1>
    </>
  );
}

Placeholder.propTypes = {
  msg: PropTypes.string.isRequired,
};
