import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledEmailChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const EmailLabel = styled.label`
background-color: ${props =>(props.isTrue? "green":"orangered")};
width: 10vw;
height: 4.5vh;
position: absolute;
right: 0;
border: 4px solid #858370;
box-shadow: -3px 3px 5px 3px rgba(0,0,0,.3);
border-radius: 2px;
text-align: center;
font-family: sans-serif;
font-size: .6rem;
color: black;
line-height: 2;
transition: all 1s ease;
& input {
    position: absolute;
    right: 12vw;
    height: 4vh;
    font-size: 1rem;
    background: grey;
    border: 2px solid tan;
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