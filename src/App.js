import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {
  return (
    <Router>
      <Menu/>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              )
            })
          }
        </Switch>
    </Router>
  );
}

export default App; 