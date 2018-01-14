import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledEmailChecker = styled.div`
    height: 10vh;
    color: #1c1841;
`
const EmailLabel = styled.label`
background-color: ${props =>(props.isTrue? "green":"orangered")};
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
        // {console.log(`
        //     this.state.emailBool: ${this.state.emailBool}
        // `)}
        return (
        <StyledEmailChecker className="EmailChecker">
            <EmailLabel isTrue={this.state.emailBool} 
            >Email 
                <input onChange={this.handleEmail} type="text" />
            </EmailLabel>
        </StyledEmailChecker>
        )
    }
}
export default EmailChecker;