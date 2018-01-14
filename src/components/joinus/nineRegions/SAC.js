import React from 'react';
import styled from 'styled-components';

const StyledSAC = styled.div`
  width: 100vw;
    // display: ${props => props.nec === 'NEC'? "block":"none"};
    //   border: ${props => props.nec === 'NEC'? "20px":"1px"} solid green;

  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`

class SAC extends React.Component {
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

    /*FIXME: consider deleting homestate entirely */
    render() {
        return (
            <StyledSAC id="SAC_Component">
                <button id="NC" homestate="NC" onClick={this.handleClick}>NC</button>
                <button id="SC" homestate="SC" onClick={this.handleClick}>SC</button>
                <button id="GA" homestate="GA" onClick={this.handleClick}>GA</button>
                <button id="FL" homestate="FL" onClick={this.handleClick}>FL</button>
                {this.state.home && <h1>You've chosen {`${this.state.home}`}</h1>}
            </StyledSAC>
        )
    }
}

export default SAC;