import Status from './StatusRote';
import React from 'react';

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)


export default NotFound;