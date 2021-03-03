import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Launches from './Pages/Launches';
import Launch from './Pages/Launch';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/launches" exact component={Launches} />
        <Route path="/launch/:id" exact component={Launch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
