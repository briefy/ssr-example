import React from 'react';
const { renderToString } = require('react-dom/server');

const App = require('../src/staticPageExample/app').default;
const html = renderToString(<App />);
console.log(html)
export default html;