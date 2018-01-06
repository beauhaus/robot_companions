import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledFirstNameChecker = styled.div`
    height: 10vh;
    background: #cfcfcf;
    color: #1c1841;
`
const FirstNameLabel = styled.label`
    background-color: ${props =>props.isTrue? "green":"red"};
    color: wheat;
    background:#brown;
    transition:all 1s ease;
}
`
class FirstNameChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.state = {
            FirstNameBool: ''
        }
    }

    handleFirstName(e) {
        const verifiedFirstName = validator.isAlpha(e.target.value.trim());
        this.setState({
            firstNameBool: verifiedFirstName
        });
    }
    render() {
        return (
        <StyledFirstNameChecker className="FirstNameChecker">
    {console.log(`
        this.state.firstNameBool: ${this.state.firstNameBool}
    `)}
            <FirstNameLabel isTrue={this.state.firstNameBool} 
            >First Name 
                <input onChange={this.handleFirstName} type="text" />
            </FirstNameLabel>
        </StyledFirstNameChecker>
        )
    }
}
export default FirstNameChecker;