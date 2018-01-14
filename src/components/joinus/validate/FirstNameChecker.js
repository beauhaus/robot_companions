import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledFirstNameChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const FirstNameLabel = styled.label`
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
        height: 4vh;
        position: absolute;
        right: 12vw;
        background: grey;
        border: 2px solid tan;
        font-size: 1rem;
    }
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