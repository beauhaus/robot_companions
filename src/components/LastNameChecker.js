import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledLastNameChecker = styled.div`
    height: 73.5vh;
    background: #cfcfcf;
    color: #1c1841;
`
const LastNameLabel = styled.label`
    background-color: ${props =>props.isTrue? "green":"red"};
    color: wheat;
    background:#brown;
    transition:all 1s ease;
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
        const verifiedLastName = validator.isLastName(e.target.value);
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
            >Click me 
                <input onChange={this.handleLastName} type="text" />
            </LastNameLabel>
        </StyledLastNameChecker>
        )
    }
}
export default LastNameChecker;