
import React from 'react';
import styled from 'styled-components';

import TestMap from './TestMap'
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

class TestComp extends React.Component {
    constructor(props) {
        super(props)
        // console.log("props", props.love)
        // console.log(`this.test ${this.test}`)
    }
    render() {
        return (
            <StyledTest>
            <HomeLink />
                <TestMap/>
            </StyledTest>
        )
    }
}

export default TestComp;