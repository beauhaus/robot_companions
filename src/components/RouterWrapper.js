import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import styled from 'styled-components';

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
const StyledJoinBtn = styled.button`
    
        
        color: white;
        border: 1px solid coral;
        text-decoration: none;

        color: #1BA3CC;
        position: fixed;
        // margin-bottom: 2vh;
        top: 20vh;
        z-index: 100;
        // mix-blend-mode: hue; x
        // mix-blend-mode: multiply;  x
        // mix-blend-mode: saturation;
        // mix-blend-mode: screen;
        // mix-blend-mode: overlay;
        // mix-blend-mode: darken;
        // mix-blend-mode: lighten;
        // mix-blend-mode: color-dodge;
        // mix-blend-mode: color-burn;
        mix-blend-mode: hard-light;
        // mix-blend-mode: soft-light;
        mix-blend-mode: difference;
        // mix-blend-mode: exclusion;
        // mix-blend-mode: color;
        // mix-blend-mode: luminosity;
    
        // left: 50vw;
        // width: 10vw;
        // height: 5vh;
        // margin-left: -5vw;
        // border: 0.5px solid #1BA3CC;
        // &:hover {
        //     box-shadow: 0px 0px 5px 2px white;
        //     color: white;
        //     border: 1px solid maroon;
        // }
        & > :visited {
            color: #1BA3CC;
        }
        & > #link-text {
            text-decoration: none;
            font-weight: lighter;
            font-size: 1.3rem;
            &:hover {
                color: white;
            }
        }
`

const JoinUs = () => (
    <StyledJoinBtn>
        <Link id="link-text" to="/Signup">JOIN US</Link>
    </StyledJoinBtn>
)

/**
 * Very bascic functionality of react-router-dom Static Routing & client-side Routing. 
 * "exact" prevents rendering of all components that
 * begin with with "/".
 */


const Routes = (
    <BrowserRouter>
        <div>
        <JoinUs/>
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