import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  body: {
    fontFamily: 'Bitter',
  },
});

function App() {
  return (
    <Router>
      <GlobalStyle />
      Toolbar Placeholder
      <Routes>
        <Route path="/" element={<Placeholder msg="Home" />} />
        <Route path="/search" element={<Placeholder msg="Search" />} />
      </Routes>
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
