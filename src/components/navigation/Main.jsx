import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from '../../views/Shop';

const Main = () => (
    <Switch>
        <Route exact path="/auth/shop" component={Shop} />
    </Switch>
);

export default Main;
