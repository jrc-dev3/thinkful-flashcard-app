import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* TODO: Implement the screen starting here */}
      </div>
    </>
  );
}

export default Layout;
