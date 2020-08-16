import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import universal from 'react-universal-component';

const UniversalComponent = universal((props) => import(`./containers/${props.page}`));

const Routes = () => (
    <div>
        <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return <Redirect to="/home" />
                }}
              />
            <Route exact path="/home">
                <UniversalComponent page="home" />
            </Route>
        </Switch>
    </div>
);

export default Routes;
