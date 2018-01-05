import React from 'react';
import styled from 'styled-components';
import preload from './data';

const StyledSliderVid = styled.div`
    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-gap: 0.5%;
    overflow: hidden;
    // border: 1px solid fuchsia;
`
const PicFrame = styled.section`
    position: relative;
    // position: absolute;
    top: 10vh;
    grid-row: 1;
    height: 40%;
    width: 100%;
    text-align: center;
    // border: 1px solid yellow;
   & > img {
       width: 100%;
       height: 100%;
    //    border: 1px solid red;
} & > h3 {
    font-size: 0.6em;
    margin-top: 2vh;
    color: navy;
    z-index: 20;
}
& > p {
    position: absolute;
    bottom: -12vh;
    font-family: sans-serif;
    word-wrap: break-word;
    color: #301010;
    line-height: 1.5;
    font-size: 0.6em;
    z-index: 20;
}
`
class SliderVid extends React.Component {
    render(props) {
        return (
            <StyledSliderVid className="slider-inner-container">
                    {preload.map((pic)=> (
                    <PicFrame key={pic.id}>
                     <img src={`./img/${pic.src}`}  alt={`${pic.desc}`}/>
                     <h3>{`${pic.title}`}</h3>
                     <p>{`${pic.desc}`}</p>
                    </PicFrame>
                ))
            }
            </StyledSliderVid>
        )
    }
}
export default SliderVid;