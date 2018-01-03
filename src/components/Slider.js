import React from 'react';
import SliderContainer from './SliderContainer';
import styled from 'styled-components';

const StyledSlider = styled.div`
    height: 57.5vh;
    background: white;
    z-index: 5;
    display: grid;
    position: relative;`

class Slider extends React.Component {
    render() {
        return (
            <StyledSlider className="slider">
                <SliderContainer />
            </StyledSlider>
        )
    }
}

export default Slider;