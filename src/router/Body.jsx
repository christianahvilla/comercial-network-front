import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Category from '../views/Category';
import NotFound from '../views/NotFound';

const Body = (props) => {
    const { path } = props;
    return (
        <Switch>
            <Route exact path={`${path}/categories`} component={Category} />
            <Route exact path={`${path}/shops`} component={NotFound} />
            <Route exact path={`${path}/products`} component={NotFound} />
            <Route exact path={`${path}/users`} component={NotFound} />
            <Route exact path={`${path}/home`} component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Body;
