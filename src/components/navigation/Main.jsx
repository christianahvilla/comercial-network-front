import React from 'react';
import Shop from '../../views/Shop';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>    
    <Route exact path="/auth/shop" component={Shop} />
  </Switch>
);

export default Main;