import React from 'react';
import styled from 'styled-components';

import SliderVid from './SliderVid';
import gifArray from './data';

const StyledSliderContainer = styled.div`
    height: 100%;
    background: #8e8e8e;
    z-index: 5;
    display: grid;
    position: relative;
    & > button {
        position: absolute;
        font-size: 1.2em;
        font-weight: bold;
        top: 35%;
        transform: scaleY(1.8);
        background: transparent;
        border: transparent;
        z-index: 10;     
     &:hover {
        transform: scale(1.4);
        transition: transform .2s;
        -webkit-text-stroke: 1px #420505; 
        -webkit-text-fill-color: #1BA3CC; 
        text-fill-color:  #1BA3CC; 
        text-stroke: 1px #420505; 
    }

    @media screen and (max-width: 768px) {   //tablet query
        top: 25%;
        height: 35vh;
        &#fwd {
            right: 2vw;
        }
        &#bkwd {
            left: 2vw;
        }   
    }
`
const BackBtn = styled.button`
left: 4vw;
`

const FwdBtn = styled.button`
right: 4vw;
`

/**
 * The methods below, bound to the buttons clip the last item off the array and place it at zeroth
 * & visa-versa. Each then places this modified Array onto state which is passed as props to the SliderVid Component
 * so that it knows what order of slides to display.
 */
class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.incrementVid = this.incrementVid.bind(this);
        this.decrementVid = this.decrementVid.bind(this);
        this.state = { gifArray };
    }

    incrementVid() {
        let gifList = this.state.gifArray;
        let popped = gifList.pop();
        gifList.unshift(popped);
        this.setState(prevState => ({gifArray: prevState.gifArray}))
    }

    decrementVid() {
        let gifList = this.state.gifArray;
        let shifted = gifList.shift();
        gifList.push(shifted);
        this.setState(prevState => ({gifArray: prevState.gifArray}))
    }

    render() {
        return (
            <StyledSliderContainer>
                <BackBtn id="bkwd" onClick={this.incrementVid} >&lt;</BackBtn>
                <SliderVid id="slider-vid" gifArray={this.state.gifArray}/>
                <FwdBtn id="fwd" onClick={this.decrementVid} >&gt;</FwdBtn>
            </StyledSliderContainer>

        )
    }
}

export default SliderContainer;