import {
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';

const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    if (staticContext)
      staticContext.status = status
    return <Redirect from={from} to={to} />
  }} />
)

export default RedirectWithStatus