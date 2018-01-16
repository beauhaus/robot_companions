import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledEmailChecker = styled.div`
    height: 10vh;
    color: #1c1841;
    & input::placeholder {
        color: #c4bfad;
        font-family: "Quicksand", sans-serif;
    }
`
const EmailLabel = styled.label`
background-color: ${props =>(props.isTrue? "green":"#7a2929")};
@media screen and (max-width: 376px) {      // iPhone query
    top:  25vh;
    left: 0vw;
    width: 95vw;
}
}
`
class EmailChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.state = {
            emailBool: ''
        }
    }

    handleEmail(e) {
        const verifiedEmail = validator.isEmail(e.target.value.trim());
        this.setState({
            emailBool: verifiedEmail
        });
    }
    render() {

        return (
        <StyledEmailChecker className="EmailChecker">
            <EmailLabel isTrue={this.state.emailBool} 
            >Email 
                <input onChange={this.handleEmail} type="text" placeholder="Enter Email"/>
            </EmailLabel>
        </StyledEmailChecker>
        )
    }
}
export default EmailChecker;