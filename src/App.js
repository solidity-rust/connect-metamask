import React from 'react';
import routes from './route';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((prop, key) =>
            (prop.layout === "") &&
            (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            )
          )}
          <Redirect from='/' to='/' />
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;