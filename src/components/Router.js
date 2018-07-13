import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import StorePicker from './StorePicker';
import NotFound from './NotFound';
import App from './App.js';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
