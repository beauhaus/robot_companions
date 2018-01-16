import React from 'react';
import ReactDOM from 'react-dom'; /*necessary?*/
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import RobotCompanionsApp from './landing/RobotCompanions';
// import Header from './landing/Header';

import RetroSignupComponent from './joinus/RetroSignupComponent'


/**
 * Client-side route. (Any 'wrong' URL leads here)
 */
 const NotFound = () => (
    <div>
        404 ~ <Link to="/">Go back</Link>
    </div>
)

// This CTA has a blend-mode to interact a bit with background
const JoinUsButton = styled.button`
        background: transparent;
        border: .25px solid coral;
        color: coral;
        position: fixed;
        left: 1vw;
        height: 20vh;
        margin-top: -10vh;  
        width: 2vw;
        top: 50%;
        z-index: 50;
        mix-blend-mode: difference;
        &:hover {
            box-shadow: 0px 0px 5px 1px white;
            mix-blend-mode: difference;
            color: white;
            border: 1px solid maroon;
        }
        & > :visited {
            color: #1BA3CC;
        }
        & > #link-text {
            // color: black;
            word-break: break-all;
            font-family: "Quicksand", sans-serif;
            text-decoration: none;
            font-weight: lighter;
            font-size: 1.2rem;
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