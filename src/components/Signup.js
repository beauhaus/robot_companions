import React from 'react';
import styled from 'styled-components';

import ValidateUser from './ValidateUser';

const StyledSignup = styled.div`
// phone query
  @media screen and (max-width: 376px) {
`


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
                <h1>Sign em up!</h1>
                <br />
                <ValidateUser/>
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