
import React from 'react';
import styled from 'styled-components';

import SquareSVG from './SquareSVG'
import { Link } from 'react-router-dom';


const StyledTest = styled.div`
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
                <SquareSVG/>
            </StyledTest>
        )
    }
}

export default TestComp;