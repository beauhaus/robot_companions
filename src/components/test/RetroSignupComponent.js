
import React from 'react';
import styled from 'styled-components';

import MapFrame from './MapFrame'
import InputPanel from './InputPanel'
import { Link } from 'react-router-dom';


const StyledTest = styled.div`
position: relative;
background: linear-gradient(35deg, black 0%, #15151d 100%);
  width: 100vw;
`
const HomeLink = () => (
    <div>
        <Link to="/">Home</Link>
    </div>
)

class RetroSignupComponent extends React.Component {
    constructor(props) {
        super(props)
        // console.log("props", props.love)
        // console.log(`this.test ${this.test}`)
    }
    render() {
        return (
            <StyledTest>
            <HomeLink />
                <InputPanel/>
                <MapFrame/>
            </StyledTest>
        )
    }
}

export default RetroSignupComponent;