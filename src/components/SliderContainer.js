import React from 'react';
import SliderVid from './SliderVid';
import styled from 'styled-components';
import preload from './data';

const StyledSliderContainer = styled.div`
    height: 57.5vh;
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
    //Tablet Query
    @media screen and (min-width: 768px) {
        top: 25%;
        &#fwd {
            right: 2vw;
        }
        &#bkwd {
            left: 2vw;
        }
        
        
        
    }
// iPhone Query
@media screen and (max-width: 376px) {

}
`
const BackBtn = styled.button`
left: 4vw;
`

const FwdBtn = styled.button`
right: 4vw;
`
class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.incrementVid = this.incrementVid.bind(this);
        this.decrementVid = this.decrementVid.bind(this);
        this.state = {
            count: 0,
            range: ''
        };
    }

    incrementVid() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
        const fwd = (arr) => {
            let popped = arr.pop();
            arr.unshift(popped);
            return this.state.range;
        }
        fwd(preload)
    }

    decrementVid() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        })
        const bkwd = (arr) => {
            let shifted = arr.shift();
            this.state.range = arr.push(shifted);
            return this.state.range;
        }
        bkwd(preload)
    }

    render() {
        return (
            <StyledSliderContainer>
                <BackBtn id="bkwd" onClick={this.incrementVid} >&lt;</BackBtn>
                <SliderVid id="slider-vid" range={this.nuarr} cue={this.state.range} />
                <FwdBtn id="fwd" onClick={this.decrementVid} >&gt;</FwdBtn>
            </StyledSliderContainer>

        )
    }
}

export default SliderContainer;