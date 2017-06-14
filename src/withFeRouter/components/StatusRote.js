import {
  Route
} from 'react-router-dom';
import React from 'react';

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

export default Status;