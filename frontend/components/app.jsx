import React from 'react';
import Splash from './splash/splash';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../utils/route_util';
import Login from './auth/login';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <AuthRoute exact path="/" component={Splash}/>
        <AuthRoute path="/login" component={Login}/>
      </Switch>
    </div>
  )
}

export default App;

// left off here: splash needs to be an authroute, finish frontend auth