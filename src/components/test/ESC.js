
import React from 'react';
import styled from 'styled-components';

const StyledESC = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
// EAST SOUTH CENTRAL STATES
class ESC extends React.Component {
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
            <StyledESC>
                <button id="KY" onClick={this.handleClick}>KY</button>
                <button id="TN" onClick={this.handleClick}>TN</button>
                <button id="MS" onClick={this.handleClick}>MS</button>
                <button id="AL" onClick={this.handleClick}>AL</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledESC>
        )
    }
}

export default ESC;