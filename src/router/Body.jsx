import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Category from '../views/Category';
import Shop from '../views/Shop';
import NotFound from '../views/NotFound';
import User from '../views/User';

const Body = (props) => {
    const { path } = props;
    return (
        <Switch>
            <Route exact path={`${path}/categories`} component={Category} />
            <Route exact path={`${path}/shops`} component={Shop} />
            <Route exact path={`${path}/users`} component={User} />
            <Route exact path={`${path}`} component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Body;
