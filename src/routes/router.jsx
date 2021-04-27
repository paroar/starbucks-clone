import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HOME } from '../constants/routes';
import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Route exact path={HOME} component={Home} />
  </BrowserRouter>
);

export default Router;
