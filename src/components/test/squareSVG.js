import React, { Component } from 'react';
import styled from 'styled-components';
import NEC from './NEC'
import MID from './MID'


const StyledSquareSVG = styled.div`
  width: 100vw;
  & svg {
      fill: brown;
      border: 1px solid red;
  }

`

class SquareSVG extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            region: ''
        }
        console.log(`SQ: t.s.region: ${this.state.region}`)
    }

    handleClick(e) {
        console.log("SQSVG: You clicked on: ", e.target.id);

        this.setState({
            region: e.target.id,
        })


        // console.log(this.state.test)
    }
    render() {
        return (
            // { this.state.region && <NEC/>}
            <StyledSquareSVG>
                <button onClick={this.handleClick}>Submit State</button>
                <h1>{this.state.region && "Please choose your home state."}</h1>


                
                <svg width="600" height="400">
                    <path id="background" stroke="#006837" strokeWidth="4" d="M1 1h596v396H1z" />
                    <path id="NEC" nec={this.state.region} onClick={this.handleClick}

                        // fill={this.state.region ? "green" : "orange"}
                        stroke="#006837" d="M467 3h131v127H467z" />
                        

                    <path id="MID"  onClick={this.handleClick}

                        // fill={this.state.region ? "green" : "orange"}
                        stroke="#006837" d="M466.5 130.5h130v149h-130z" />

                        <path id="SAC" onClick={this.handleClick}

                        // fill={this.state.region ? "green" : "orange"}
                        stroke="#006837" d="M467 280h130v117H467z" />
                        {console.log("t.s.region: ", this.state.region)}
                        {console.log("t.p.nec: ", this.props.nec)}
                        </svg>
                        
                        {this.state.region ==="NEC" && <NEC />}
                        {this.state.region ==="MID" && <MID />}

                        </StyledSquareSVG>
        )
    }

}
export default SquareSVG;
