import React from 'react';
import styled from 'styled-components';

import validator from 'validator';

const StyledUSStatesChecker = styled.div`
    height: 10vh;
    color: #1c1841;
    & input::placeholder {
        color: #c4bfad;
        font-family: "Quicksand", sans-serif;
    }
`
const USStatesCheckerLabel = styled.label`
        background-color: ${props =>(props.isTrue? "green":"#7a2929")};
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
            "VT", "VA", "WV", "WI", "WY","ALABAMA",
            "ALASKA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT",
            "DELAWARE","FLORIDA","GEORGIA","HAWAII","IDAHO","ILLINOIS","INDIANA",
            "IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARYLAND","MASSACHUSETS",
            "MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA",
            "NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK",
            "NORTH CAROLINA","NORTH DAKOTA","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA",
            "RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH",
            "VERMONT","VIRGINIA","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING"
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
                <input onChange={this.handleUSStatesChecker} type="text" placeholder="State of residence"/>
            </USStatesCheckerLabel>
        </StyledUSStatesChecker>
        )
    }
}
export default USStatesChecker;
