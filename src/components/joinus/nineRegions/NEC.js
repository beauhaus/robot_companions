import React from 'react';
import styled from 'styled-components';

const StyledNEC = styled.div`
  width: 100vw;
    // display: ${props => props.nec === 'NEC'? "block":"none"};
    //   border: ${props => props.nec === 'NEC'? "20px":"1px"} solid green;

  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`

class NEC extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            home: '' 
        }
    }
    handleClick(e) {

        this.setState({
            home: e.target.id
        })

    }
    render() {
        return (
            <StyledNEC id="NEC_Component">
                <button id="ME" homestate="ME" onClick={this.handleClick}>ME</button>
                <button id="NH" homestate="NH" onClick={this.handleClick}>NH</button>
                <button id="MA" homestate="MA" onClick={this.handleClick}>MA</button>
                <button id="VT" homestate="VT" onClick={this.handleClick}>VT</button>
                <button id="CT" homestate="CT" onClick={this.handleClick}>CT</button>
                {this.state.home && <h1>You've chosen {`${this.state.home}`}</h1>}
            </StyledNEC>
        )
    }
}

export default NEC;