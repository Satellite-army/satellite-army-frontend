// react and css imports
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
// views import
import { Home}  from './views/home/home'; // landing page
import { AppView } from './views/app/appview'; // wrapper for components
// components imports
import { DashboardContent } from './components/dashboardContent';
import { Wallet } from './components/wallet';
import { Farming } from './components/farming';
// contexts imports
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
                  <Route exact path="/app/dashboard" children={<AppView content={<DashboardContent/>}/>} />
                  <Route exact path="/app/wallet" children={<AppView content={<Wallet/>} />} />
                  {/* <Route exact path="/app/analytics" children={<AppView content={<DashboardContent/>} />} /> */}
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
