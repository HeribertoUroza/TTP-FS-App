import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// ----PAGES
import LandingPage from './containers/LandingPage/LandingPage';
import PortfolioPage from './containers/PortfolioPage/PortfolioPage';

function App() {
  return (
    <>
     <HashRouter>
       <Switch>
         <Route path='/' exact component={ LandingPage } />
         <Route path='/portfolio' exact component={ PortfolioPage } />
       </Switch>
     </HashRouter>
    </>
  );
}

export default App;
