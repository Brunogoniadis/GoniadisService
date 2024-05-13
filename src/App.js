import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
