import React from 'react';
import SliderContainer from './SliderContainer';
import styled from 'styled-components';

const StyledSlider = styled.div`
    width: 100vw;
    height: 57.5vh;
    z-index: 5;
    display: grid;
    position: relative;
`

class Slider extends React.Component {
    render() {
        return (
            <StyledSlider className="slider">
                <SliderContainer id="sliderContainer"/>
            </StyledSlider>
        )
    }
}

export default Slider;