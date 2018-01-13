import React from 'react';
import styled from 'styled-components';

const StyledMID = styled.div`
  width: 100%;
  color: pink;
  
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
// MIDATLANTIC STATES
class MID extends React.Component {
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
            <StyledMID>
                <button id="NY" onClick={this.handleClick}>NY</button>
                <button id="NJ" onClick={this.handleClick}>NJ</button>
                <button id="DE" onClick={this.handleClick}>DE</button>
                <button id="PA" onClick={this.handleClick}>PA</button>
                <button id="MD" onClick={this.handleClick}>MD</button>
                <button id="VA" onClick={this.handleClick}>VA</button>
                {this.state.home && <h1 id="home-result-alert">You chose {`${this.state.home}`}</h1>}
            </StyledMID>
        )
    }
}

export default MID;