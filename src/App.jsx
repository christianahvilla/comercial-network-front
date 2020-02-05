import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Login from './views/Login';

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
