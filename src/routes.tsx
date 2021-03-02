import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Launches from './Pages/Launches';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/launches" exact component={Launches} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
