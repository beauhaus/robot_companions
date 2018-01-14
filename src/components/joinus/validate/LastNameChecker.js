import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledLastNameChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const LastNameLabel = styled.label`
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
        font-size: 1rem;
        right: 12vw;
        background: grey;
        border: 2px solid tan;
    }
}
`
class LastNameChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleLastName = this.handleLastName.bind(this);
        this.state = {
            LastNameBool: ''
        }
    }

    handleLastName(e) {
        const verifiedLastName = /(^[a-zA-Z-']*$)/.test(e.target.value.trim());
        this.setState({
            LastNameBool: verifiedLastName
        });
    }
    render() {
        return (
        <StyledLastNameChecker className="LastNameChecker">
    {console.log(`
        this.state.LastNameBool: ${this.state.LastNameBool}
    `)}
            <LastNameLabel isTrue={this.state.LastNameBool} 
            >Last Name 
                <input onChange={this.handleLastName} type="text" />
            </LastNameLabel>
        </StyledLastNameChecker>
        )
    }
}
export default LastNameChecker;