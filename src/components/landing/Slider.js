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
/**
 * This div is the third 'Level' of the site. I chose to use .gifs to mimic
 * what is offered at http://baseball.doosan.com/ . I didn't want to get into the weeds with
 * the youtube API for a clone of the site. I did want some functionality, though.
 * It's a "doubly-nested" component, so
 * Slider > SliderContainer > SliderVid
 */

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