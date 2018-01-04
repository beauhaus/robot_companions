import React from 'react';
import styled from 'styled-components';
import preload from './data';

const StyledSliderVid = styled.div`
    margin: auto;
    width: 80vw;
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    border: 1px solid fuchsia;
`
const PicFrame = styled.section`
    position: relative;
    width: 30%;
    border: 1px solid yellow;
    grid-column: auto;
    grid-row: 1;
    height: 100%;
`
class SliderVid extends React.Component {
    render(props) {
        return (
            <StyledSliderVid className="slider-inner-container">
                <h1 className="test-indices">cue: {this.props.cue}</h1>
                {preload.map((pic)=> (
                    <PicFrame 
                     key={pic.id}
                     src={`./img/${pic.src}`} 
                     alt={`${pic.desc}`}/>
                ))
            }
            </StyledSliderVid>
        )
    }
}
export default SliderVid;