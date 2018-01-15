import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RobotCompanionsApp from './landing/RobotCompanions';
import styled from 'styled-components';
import Header from './landing/Header';
// import Signup from './onboarding/Signup';
// import 'normalize.css/normalize.css'
import RetroSignupComponent from './joinus/RetroSignupComponent'
// import { Switch } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';


/**
 * Client-side route. (Any 'wrong' URL leads here)
 */
 const NotFound = () => (
    <div>
        404 ~ <Link to="/">Go back</Link>
    </div>
)

// This has mix-blend-mode to interact a bit with background
const JoinUsButton = styled.button`
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



const RetroSignup = () => (
    <JoinUsButton>
        <Link id="link-text" to="/joinus">JOIN</Link>
    </JoinUsButton>
)

/**
 * Very bascic functionality of react-router-dom Static Routing & client-side Routing. 
 */

const Routes = (
    <BrowserRouter>
        <div>
        <RetroSignup/>
        <Switch>
            <Route path="/" component={RobotCompanionsApp} exact={true} />
            <Route path="/joinus" component={RetroSignupComponent} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;