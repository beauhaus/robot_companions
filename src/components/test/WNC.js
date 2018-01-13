
import React from 'react';
import styled from 'styled-components';

const StyledWNC = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
//WEST NORTH CENTRAL STATES
class WNC extends React.Component {
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
            <StyledWNC>
            <button id="ND" onClick={this.handleClick}>ND</button>
            <button id="SD" onClick={this.handleClick}>SD</button>
            <button id="KS" onClick={this.handleClick}>KS</button>
            <button id="NE" onClick={this.handleClick}>NE</button>
            <button id="MO" onClick={this.handleClick}>MO</button>
            <button id="IA" onClick={this.handleClick}>IA</button>
            <button id="MN" onClick={this.handleClick}>MN</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledWNC>
        )
    }
}

export default WNC;