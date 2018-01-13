
import React from 'react';
import styled from 'styled-components';

const StyledENC = styled.div`
  width: 100vw;
  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`
// EAST NORTH CENTRAL STATES
class ENC extends React.Component {
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
            <StyledENC>
                <button id="IL" onClick={this.handleClick}>IL</button>
                <button id="MI" onClick={this.handleClick}>MI</button>
                <button id="WI" onClick={this.handleClick}>WI</button>
                <button id="IN" onClick={this.handleClick}>IN</button>
                <button id="OH" onClick={this.handleClick}>OH</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
            </StyledENC>
        )
    }
}

export default ENC;