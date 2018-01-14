import React from 'react';
import styled from 'styled-components';

import validator from 'validator';

const StyledUSStatesChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const USStatesCheckerLabel = styled.label`
        background-color: ${props =>(props.isTrue? "green":"#7a2929")};
        background-image: rgba(0,0,0,0.5);
`
class USStatesChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleUSStatesChecker = this.handleUSStatesChecker.bind(this);
        this.state = {
            usStatesBool: ''
        }
    }

    handleUSStatesChecker(e) {
        const fiftyStates = [
            "AL", "AK", "AZ", "AR", "CA",
            "CO", "CT", "DE", "FL", "GA", 
            "HI", "ID", "IL", "IN", "IA", 
            "KS", "KY", "LA", "ME", "MD", 
            "MA", "MI", "MN", "MS", "MO", 
            "MT", "NE", "NV", "NH", "NJ", 
            "NM", "NY", "NC", "ND", "ND", 
            "OH", "OK", "OR", "PA", "RI", 
            "SC", "SD", "TN", "TX", "UT", 
            "VT", "VA", "WV", "WI", "WY"
        ];

        var verifiedUSStatesChecker =  validator.isIn(e.target.value.toUpperCase(), fiftyStates);
        this.setState({
            usStatesBool: verifiedUSStatesChecker
        });
    }
    render() {
        return (
        <StyledUSStatesChecker className="USStatesChecker">
    {console.log(`
        this.state.usStatesBool: ${this.state.usStatesBool}
    `)}
            <USStatesCheckerLabel isTrue={this.state.usStatesBool} 
            >US State 
                <input onChange={this.handleUSStatesChecker} type="text" />
            </USStatesCheckerLabel>
        </StyledUSStatesChecker>
        )
    }
}
export default USStatesChecker;