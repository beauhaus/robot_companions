import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledFirstNameChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
    & input::placeholder {
        color: #c4bfad;
        font-family: "Quicksand", sans-serif;
    }
`
const FirstNameLabel = styled.label`
    background-color: ${props =>(props.isTrue? "green":"#7a2929")};
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
            <FirstNameLabel isTrue={this.state.firstNameBool} 
            >First Name 
                <input onChange={this.handleFirstName} type="text" placeholder="First Name" />
            </FirstNameLabel>
        </StyledFirstNameChecker>
        )
    }
}
export default FirstNameChecker;