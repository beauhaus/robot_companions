
import React from 'react';
import styled from 'styled-components';

const StyledWSC = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
//WEST SOUTH CENTRAL STATES
class WSC extends React.Component {
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
            <StyledWSC>
            <button id="OK" onClick={this.handleClick}>OK</button>
            <button id="AR" onClick={this.handleClick}>AR</button>
            <button id="LA" onClick={this.handleClick}>LA</button>
            <button id="TX" onClick={this.handleClick}>TX</button>
            {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledWSC>
        )
    }
}

export default WSC;