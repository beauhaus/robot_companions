import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import Signup from './onboarding/Signup';
// import 'normalize.css/normalize.css'
import Test from './test/testComp'




const Routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} />
        </div>
    </BrowserRouter>
)

export default Routes;