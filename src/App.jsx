import React from 'react';
import Navigation from './components/navigation/Navigation';
import Login from './views/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Navigation} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
