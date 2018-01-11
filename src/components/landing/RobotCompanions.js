import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Slider from './Slider';
import Partnership from './Partnership';
import Groups from './Groups';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header'

const StyledApp = styled.div`
  width: 100vw;
`

class RobotCompanions extends React.Component {
    render() {
        return (
            <StyledApp>
                <Header />
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