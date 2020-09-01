import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES from "../../constants/route";
const RootRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        ))}
      </Switch>
    </Router>
  );
};
export default RootRouter;
