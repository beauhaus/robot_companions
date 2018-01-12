import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import Signup from './onboarding/Signup';
// import 'normalize.css/normalize.css'
import Test from './test/testComp'
// import { Switch } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';



const NotFound = () => (
    <div>
        404 ~ <a href="/">Go Home</a>
    </div>
)


/**
 * Very bascic functionality of react-router-dom Static Routing & client-side Routing. 
 * "exact" prevents rendering of all components that
 * begin with with "/".
 */

// <Route component={NotFound} />
const Routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} />
            </Switch>
            </BrowserRouter>
        )

export default Routes;