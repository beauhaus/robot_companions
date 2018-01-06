import React from 'react';
import styled from 'styled-components';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        // this.handleUSStatesChecker = this.handleUSStatesChecker.bind(this);
        this.state = {
            usStatesBool: ''
        }
    }
    render() {
        return (
            <div>
            <h1>Sign em up!</h1>
            </div>
        )
    }
}

export default Signup;