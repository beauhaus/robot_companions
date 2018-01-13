import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import styled from 'styled-components';

import Signup from './onboarding/Signup';
// import 'normalize.css/normalize.css'
import RetroSignupComponent from './test/RetroSignupComponent'
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
    
        background: transparent;
        border: .25px solid coral;
        text-decoration: none;
        color: #1BA3CC;

        position: fixed;
        top: 45vw;
        // top: 10vw;           // good for tablet
        left: 1vw;
        width: 2vw;
        height: 10vw;

        top: 50%;
        margin-top: -5vw;

        z-index: 50;
        mix-blend-mode: difference;
        &:hover {
            box-shadow: 0px 0px 5px 2px white;
            mix-blend-mode: difference;
            // mix-blend-mode: luminosity;

            color: white;
            border: 1px solid maroon;
        }
        & > :visited {
            color: #1BA3CC;
        }
        & > #link-text {
            color: inherit;
            word-break: break-all;
            text-decoration: none;
            font-weight: lighter;
            font-size: 2vw;
            letter-spacing: 0.1rem;
            &:hover {
                color: white;
            }
        }
`

const StyledRetroBtn = styled.button`
    
        background: transparent;
        border: .25px solid coral;
        text-decoration: none;
        color: #1BA3CC;

        position: fixed;
        top: 45vw;
        // top: 10vw;           // good for tablet
        right: 1vw;
        width: 2vw;
        height: 10vw;

        top: 50%;
        margin-top: -5vw;

        z-index: 50;
        mix-blend-mode: difference;
        &:hover {
            box-shadow: 0px 0px 5px 2px white;
            mix-blend-mode: difference;
            // mix-blend-mode: luminosity;

            color: white;
            border: 1px solid maroon;
        }
        & > :visited {
            color: #1BA3CC;
        }
        & > #link-text {
            color: inherit;
            word-break: break-all;
            text-decoration: none;
            font-weight: lighter;
            font-size: 2vw;
            letter-spacing: 0.1rem;
            &:hover {
                color: white;
            }
        }
`

const JoinUs = () => (
    <StyledJoinBtn>
        <Link id="link-text" to="/Signup">JOIN</Link>
    </StyledJoinBtn>
)

const RetroSignup = () => (
    <StyledTestBtn>
        <Link id="link-text" to="/test">RetroSignup</Link>
    </StyledTestBtn>
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
        <RetroSignupComponent/>
        <Switch>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={RetroSignupComponent} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;