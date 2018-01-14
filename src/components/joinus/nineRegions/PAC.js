
import React from 'react';
import styled from 'styled-components';

const StyledPAC = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
//PACIFIC STATES
class PAC extends React.Component {
    constructor(props) {
        super(props)
        const home = '';
        this.handleClick = this.handleClick.bind(this);
        this.state = { home }
    }
    handleClick(e) {
        this.setState({
            home: e.target.id
        })
        // console.log(this.state.home)
    }
    render() {
        return (
            <StyledPAC>
            <button id="OR" onClick={this.handleClick}>OR</button>
            <button id="WA" onClick={this.handleClick}>WA</button>
            <button id="CA" onClick={this.handleClick}>CA</button>
            <button id="AK" onClick={this.handleClick}>AK</button>
            <button id="HI" onClick={this.handleClick}>HI</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledPAC>
        )
    }
}

export default PAC;