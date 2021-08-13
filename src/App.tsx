import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './views/home/home';
import { AppView } from './views/app/appview';
function App() {
  return (
    <HashRouter basename={"/"}>
        <Switch>
          <Route exact path="/" children={ <Home />} />
          <Route exact path="/app" children={<AppView />} />
        </Switch>
    </HashRouter>
  );
}

export default App;
