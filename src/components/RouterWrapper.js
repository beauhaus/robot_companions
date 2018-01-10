import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route } from 'react-router-dom';
import RobotCompanionsApp from './RobotCompanions';
import Signup from './Signup';
// import 'normalize.css/normalize.css'


const Routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/signup" component={Signup} />
        </div>
    </BrowserRouter>
)

export default Routes;