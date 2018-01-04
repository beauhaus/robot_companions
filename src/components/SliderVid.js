import React from 'react';
import styled from 'styled-components';
import preload from './data';

const StyledSliderVid = styled.div`

    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-gap: 1%;
    overflow: hidden;
    // border: 1px solid fuchsia;
`
const PicFrame = styled.section`
    position: relative;
    grid-row: 1;
    height: 40%;
    width: 100%;
    // border: 1px solid yellow;
   & > img {
       width: 100%;
       height: 100%;
    //    border: 1px solid red;
}
`
class SliderVid extends React.Component {
    render(props) {
        return (
            <StyledSliderVid className="slider-inner-container">
            <h1 className="test-indices">cue: {this.props.cue}</h1>
                {preload.map((pic)=> (
                    <PicFrame key={pic.id}>
                     <img src={`./img/${pic.src}`}  alt={`${pic.desc}`}/>
                    </PicFrame>
                ))
            }
            </StyledSliderVid>
        )
    }
}
export default SliderVid;


/*
                     
                     
*/