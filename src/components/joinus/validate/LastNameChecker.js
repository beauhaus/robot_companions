import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledLastNameChecker = styled.div`
    height: 10vh;
    color: #1c1841;
    & input::placeholder {
        color: #c4bfad;
        font-family: "Quicksand", sans-serif;
    }
`
const LastNameLabel = styled.label`
    background-color: ${props => (props.isTrue ? "green" : "#7a2929")};
`
class LastNameChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleLastName = this.handleLastName.bind(this);
        this.state = {
            lastNameBool: ''
        }
    }

    /**
     * HandleLastName disallows entry of trailing empty spaces.
     * It allows for apostrophes & dashes in last names.
     * If user were to enter name then delete it, (setState already having been 
     * changed to "true"), state would remain true. This first if block
     * addresses this issue verifying whether the string is true.
     */

    handleLastName(e) {
        let userEntry = e.target.value;
        if (!userEntry) {
            this.setState({
                lastNameBool: userEntry
            });
        } else {
            const verifiedLastName = /(^[a-zA-Z-']*$)/.test(userEntry);
            console.log("t.s.ln: ", this.state)

            this.setState((prevState) =>({
                lastNameBool: verifiedLastName
            }));
        }
    }

    render() {
        return (
            <StyledLastNameChecker className="LastNameChecker">
                <LastNameLabel isTrue={this.state.lastNameBool}
                >Last Name
                <input onChange={this.handleLastName}  type="text" placeholder="Last Name" />
                
                </LastNameLabel>
            </StyledLastNameChecker>
        )
    }
}
export default LastNameChecker;