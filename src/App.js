import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
