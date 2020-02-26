import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase/config';

// ----PAGES
import LandingPage from './containers/LandingPage/LandingPage';
import PortfolioPage from './containers/PortfolioPage/PortfolioPage';
import TransactionPage from './containers/TransactionPage/TransactionPage';

// ----CONTEXT
import AuthContext from './context/AuthContext';

// ----CSS
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged(( user ) => {
      if( user ){
        this.setState({
          user: user
        })
      } else {
        this.setState({ 
          user: null
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <>
       <HashRouter>
         <AuthContext.Provider value={this.state.user}>
         <Switch>
           <Route path='/' exact component={ LandingPage } />
           <Route path='/portfolio' exact component={ PortfolioPage } />
           <Route path='/transaction' exact component= { TransactionPage } />
         </Switch>
        </AuthContext.Provider>
       </HashRouter>
      </>
    )
  };
}

export default App;
