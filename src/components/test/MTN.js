
import React from 'react';
import styled from 'styled-components';

const StyledMTN = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
//MOUNTAIN STATES
class MTN extends React.Component {
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
            <StyledMTN>
            <button id="MT" onClick={this.handleClick}>MT</button>
            <button id="AZ" onClick={this.handleClick}>AZ</button>
            <button id="WY" onClick={this.handleClick}>WY</button>
            <button id="CO" onClick={this.handleClick}>CO</button>
            <button id="NM" onClick={this.handleClick}>NM</button>
            <button id="NV" onClick={this.handleClick}>NV</button>
            <button id="UT" onClick={this.handleClick}>UT</button>
            <button id="ID" onClick={this.handleClick}>ID</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledMTN>
        )
    }
}

export default MTN;