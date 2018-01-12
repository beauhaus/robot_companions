import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import Signup from './onboarding/Signup';
// import 'normalize.css/normalize.css'
import Test from './test/testComp'
// import { Switch } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';


/**
 * Client-side route. (Any 'wrong' URL leads here)
 */

 const NotFound = () => (
    <div>
        404 ~ <Link to="/">Go back</Link>
    </div>
)

/**
 * Very bascic functionality of react-router-dom Static Routing & client-side Routing. 
 * "exact" prevents rendering of all components that
 * begin with with "/".
 */


const Routes = (
    <BrowserRouter>
        <div>
        <Switch>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;