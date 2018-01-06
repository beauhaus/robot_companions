import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledEmailChecker = styled.div`
    height: 10vh;
    background: #cfcfcf;
    color: #1c1841;
`
const EmailLabel = styled.label`
    background-color: ${props =>props.isTrue? "green":"red"};
    color: wheat;
    background:#brown;
    transition:all 1s ease;
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
    {console.log(`
        this.state.emailBool: ${this.state.emailBool}
    `)}
            <EmailLabel isTrue={this.state.emailBool} 
            >Email 
                <input onChange={this.handleEmail} type="text" />
            </EmailLabel>
        </StyledEmailChecker>
        )
    }
}
export default EmailChecker;