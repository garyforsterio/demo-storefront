import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Items from '/routes/items';
import Item from '/routes/items/id';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Item} path="/items/:id" />
        <Route component={Items} path="/items" />
        <Route path="*">
          <Redirect to="/items" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
