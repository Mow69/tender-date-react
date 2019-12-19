import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenName, urls } from './constants';

export const PrivateRoute = ({ component: Component, ...otherProps }) => (
    <Route {...otherProps} render={props => (
        localStorage.getItem(tokenName)
            ? <Component {...props} />
            : <Redirect to={{ pathname: urls.user.login, state: { from: props.location } }} />
    )} />
)