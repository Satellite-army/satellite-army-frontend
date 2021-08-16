import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home}  from './views/home/home';
import { AppView } from './views/app/appview';
import { DashboardContent } from './components/dashboardContent';
import { Wallet } from './components/wallet';
import { Farming } from './components/farming';
import { WalletProvider } from "./contexts/wallet";
import { ConnectionProvider } from "./contexts/connection";
import { AccountsProvider } from "./contexts/accounts";
import { MarketProvider } from "./contexts/market";
import { LendingProvider } from "./contexts/lending";

function App() {
  return (
    <HashRouter basename={"/"}>
      <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <LendingProvider>
                    <Switch>
                      <Route exact path="/" children={ <Home />} />
                      <Route exact path="/app" children={<AppView content={<DashboardContent/>}/>} />
                      <Route exact path="/app/wallet" children={<AppView content={<Wallet/>} />} />
                      <Route exact path="/app/analytics" children={<AppView content={<DashboardContent/>} />} />
                      <Route exact path="/app/farming" children={<AppView content={<Farming/>} />} />
                    </Switch>
                  </LendingProvider>
                  </MarketProvider>
                  </AccountsProvider>
                  </WalletProvider>
                  </ConnectionProvider>
    </HashRouter>
  );
}

export default App;
