import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ValidateUser from './ValidateUser';
import HomestateSVGContainer from './HomestateSVGContainer';

const StyledSignup = styled.div`
background: slategrey;
position: absolute; /*positioning here doesn't effect vert divs*/

width: 100vw;
height: 100vw;
// border: 5px solid skyblue;
& > #svgContainerComponent { /* dimensions of this control entire collection of svgs */
    // border: 5px solid fuchsia;
    position: relative;
    // top: 20vh;
    left: 50vw;
    // width: 50vw;
    // height: 40vw;
    width: 50%;
    height: 50%;
    
    margin-left: -25vw;
}
`

const HomeLink = () => (
    <div>
        <Link to="/">Home</Link>
    </div>
)
const TestLink = () => (
    <button>
        <Link id="test-link" to="/Test">TEST LINK</Link>
    </button>
)

class Signup extends React.Component {
    constructor(props) {
        super(props);
        // this.handleUSStatesChecker = this.handleUSStatesChecker.bind(this);
        this.state = {
            usStatesBool: ''
        }
    }
    render() {
        return (
            <StyledSignup>
                <HomeLink />
                <TestLink/>
                <HomestateSVGContainer />
                <ValidateUser />
            </StyledSignup>
        )
    }
}



/*
CENTERING EXAMPLE
.ctr-example2 {
  width: 40vw;
  position: absolute;
  left: 50%;
  margin-left: -20vw;
}
*/


export default Signup;