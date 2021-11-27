import React from 'react';
import './index.css';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import App from './App';

WebFont.load({
  google: {
    families: ['Bitter', 'Montserrat'],
  },
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
