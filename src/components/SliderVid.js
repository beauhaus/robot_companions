import React from 'react';
import styled from 'styled-components';

const StyledSliderVid = styled.div`
    margin: auto;
    width: 80vw;
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
`
// this will be using props, so keep as a class...

class SliderVid extends React.Component {
    render() {
        return (
            <StyledSliderVid className="slider-inner-container">
                {this.props.sliderVids.filter((item, idx) => idx <= 3)
                    .map(item =>
                        <section className="vid-container" key={item}>
                            <img src={`./img/slider-${item}.png`} alt={`slider-${item}`} />
                        </section>)}
            </StyledSliderVid>
        )
    }
}
export default SliderVid;