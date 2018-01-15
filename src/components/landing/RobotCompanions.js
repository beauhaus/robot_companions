import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import Slider from './Slider';
import Partnership from './Partnership';
import Groups from './Groups';
import Profile from './Profile';
import Footer from './Footer';

const StyledApp = styled.div`
  width: 100vw;
`
/**
 * RobotCompanions wraps around the entire collection of components
 * for the landing page.
 * This component, itself, is further wrapped by RouterWrapper.js one level up
 * the folder tree (along side <Signup/>)
 */
class RobotCompanions extends React.Component {
    render() {
        return (
            <StyledApp>
                <Header/>
                <Hero />
                <Slider />
                <Partnership />
                <Groups />
                <Profile />
                <Footer />
            </StyledApp>
        )
    }
}
export default RobotCompanions;