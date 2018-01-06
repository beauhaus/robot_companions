import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledFirstNameChecker = styled.div`
    height: 73.5vh;
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
        const verifiedFirstName = validator.isFirstName(e.target.value);
        this.setState({
            FirstNameBool: verifiedFirstName
        });
    }
    render() {
        return (
        <StyledFirstNameChecker className="FirstNameChecker">
    {console.log(`
        this.state.FirstNameBool: ${this.state.FirstNameBool}
    `)}
            <FirstNameLabel isTrue={this.state.FirstNameBool} 
            >Click me 
                <input onChange={this.handleFirstName} type="text" />
            </FirstNameLabel>
        </StyledFirstNameChecker>
        )
    }
}
export default FirstNameChecker;