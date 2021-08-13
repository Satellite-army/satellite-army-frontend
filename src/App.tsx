import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './views/home/home';
import { AppView } from './views/app/appview';
import { DashboardContent } from './components/dashboardContent';
import { Wallet } from './components/wallet';
import { Farming } from './components/farming';
function App() {
  return (
    <HashRouter basename={"/"}>
        <Switch>
          <Route exact path="/" children={ <Home />} />
          <Route exact path="/app" children={<AppView content={<DashboardContent/>}/>} />
          <Route exact path="/app/wallet" children={<AppView content={<Wallet/>} />} />
          <Route exact path="/app/analytics" children={<AppView content={<DashboardContent/>} />} />
          <Route exact path="/app/farming" children={<AppView content={<Farming/>} />} />
        </Switch>
    </HashRouter>
  );
}

export default App;
