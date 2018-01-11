
import React from 'react';
import styled from 'styled-components';

import SquareSVG from './SquareSVG'


const StyledTest = styled.div`
  width: 100vw;
`

class TestComp extends React.Component {
    constructor(props) {
        super(props)
        // console.log("props", props.love)
        // console.log(`this.test ${this.test}`)
    }
    render() {
        return (
            <StyledTest>
                <SquareSVG/>
            </StyledTest>
        )
    }
}

export default TestComp;