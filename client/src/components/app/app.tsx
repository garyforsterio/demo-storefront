import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Items from '/routes';
import Categories from '/routes/categories/id';
import Item from '/routes/items/id';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Categories} path="/categories/:id" />
        <Route component={Item} path="/items/:id" />
        <Route component={Items} path="/" />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
