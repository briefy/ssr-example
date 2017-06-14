import React from 'react';
import { StaticRouter } from 'react-router';
const { renderToString } = require('react-dom/server');

const App = require('../src/withFeRouter/app').default;



export default function (url) {
  const context = {};



  const markup = renderToString(
    <StaticRouter
      basename="/withFeRouter"
      location={url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  return {
    context,
    markup,
  }
}
