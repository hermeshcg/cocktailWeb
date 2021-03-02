import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import DetailedDrink from './Pages/DetailedDrink';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drink/:id" exact component={DetailedDrink} />
      </Switch>
    </BrowserRouter>
  );
}

// igonre

export default Routes;
