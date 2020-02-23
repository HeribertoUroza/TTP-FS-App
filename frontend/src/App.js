import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// ----PAGES
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    <>
     <HashRouter>
       <Switch>
         <Route path='/' exact component={ LandingPage } />
       </Switch>
     </HashRouter>
    </>
  );
}

export default App;
