import React from 'react';
import styled from 'styled-components';

import ValidateUser from './ValidateUser';
import NorthEastStates from './regions/NorthEastStates';
import AmericaMap from './regions/AmericaMap';

const StyledSVGContainer = styled.div`
    width: 100%;
    height: 100%;
    // position: relative;
    
    & #neStates {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        // border: 2px solid blue; 
    }
    & #americaMap{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px dashed yellow;
    }
`


class HomestateSVGContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.homestateInput = this.homestateInput.bind(this);
        // this.state = {
        //     userHomeState: ''
        // }
    }
    // homestateInput(homestate) {
    //     homestate = homestate.target.id.toUpperCase();
    //     this.setState({
    //         usStateEntry: this.props.homestate
    //     })
    //     console.log("homestateInputClick!", homestate)
    // }
    render() {
        // <NorthEastStates />
        return (
            <StyledSVGContainer id="svgContainerComponent">
                <NorthEastStates />
                <AmericaMap />
            </StyledSVGContainer>
        )
    }
}



/*
CENTERING EXAMPLE
.ctr-example2 {
  width: 40vw;
  position: absolute;
  left: 50%;
  margin-left: -20vw;
}
*/


export default HomestateSVGContainer;

/*
reference on states divisions: (us census)
Naming Convention of US regions
NE-northeast
MA-midatlantic

SA-southatlantic

ESC-eastsouthcentral

ENC-eastnorthcentral

WNC-westnorthcentral

WSC-westsouthcentral

Mtn-mountain

PAC-pacific (HI, AK inclusive)
*/