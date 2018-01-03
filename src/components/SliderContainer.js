import React from 'react';
import SliderVid from './SliderVid';
import styled from 'styled-components';

const StyledSliderContainer = styled.div`
    height: 57.5vh;
    background: white;
    z-index: 5;
    display: grid;
    position: relative;
    & > button {
        position: absolute;
        font-size: 1.2em;
        top: 35%;
        transform: scaleY(1.8);
        background: transparent;
        border: transparent;             
     &:hover {
        transform: scale(1.4);
        transition: transform .2s;
        -webkit-text-stroke: 1px red; 
        -webkit-text-fill-color:   lightgreen; 
        text-fill-color:  lightgreen; 
        text-stroke: 1px red; 
    }
}
`
const BackBtn = styled.button`
left: 7vw;
`

const FwdBtn = styled.button`
right: 7vw;
`
class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.incrementVid = this.incrementVid.bind(this);
        this.decrementVid = this.decrementVid.bind(this);
        this.state = {
            count: 0
        };
    }
    incrementVid() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrementVid() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        const sliderVids = ["vid1", "vid2", "vid3", "vid4", "vid5", "vid6", "vid7", "vid8", "vid9", "vid10", "vid11", "vid12", "vid13", "vid14", "vid15"];
        return (
            <StyledSliderContainer>
                <BackBtn onClick={this.incrementVid} className="slider-btn" id="fwd-arrow">&lt;</BackBtn>
                <span className="test-indicies">Range: </span>
                <SliderVid sliderVids={sliderVids} />
                <FwdBtn onClick={this.decrementVid} className="slider-btn" id="rwd-arrow">&gt;</FwdBtn>
            </StyledSliderContainer>

        )
    }
}

export default SliderContainer;