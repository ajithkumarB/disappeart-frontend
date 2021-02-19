import React from 'react'
import Routes from './route.js'
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App(props) {
  function getRoutes(routes) {
    return routes.map((prop, key) => {
      return (
        <Route
          exact path={prop.path}
          render={props => (
            <prop.component
              {...props}
            />
          )}
          key={key}
        />
      );
    });
  }

  function PageNotFound() {
    return (
      <div style={{
        padding: "70px",
        textAlign: "center",
        backgroundColor: "violet"
      }} >
        <h1>404</h1>
        <h2>Page Not found</h2>
        <p>We cannot find the page you are looking for</p>
      </div>
    );
  };
  /**/
  return (
    <div className="wrapper">
      <div id="main-panel" className="main-panel">

        <BrowserRouter>
          <Switch>
            {getRoutes(Routes)}
            <Route component={PageNotFound()} />
          </Switch>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App