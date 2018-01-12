import React from 'react';
import styled from 'styled-components';

const StyledSliderVid = styled.div`
    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-gap: 0.5%;
    overflow: hidden;
    // border: 1px solid fuchsia;
    // tablet query
    @media screen and (max-width: 768px) {
    grid-auto-columns:33%;
    grid-gap: 1%;
    }
    //phone query
    @media screen and (max-width: 376px) {
    grid-auto-columns: 100%;
    grid-gap: 1%;
    
    }
`
const PicFrame = styled.section`
    position: relative;
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
    } 
  & > h3 {
    font-size: 0.6em;
    margin-top: 2vh;
    color: navy;
    z-index: 8;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  & > p {
    position: absolute;
    bottom: -12vh;
    font-family: Arial, sans-serif;
    word-wrap: break-word;
    color: #301010;
    line-height: 1.5;
    font-size: 0.6em;
    z-index: 20;
  }
// tablet query
    @media screen and (max-width: 768px) {
      & img#media {
          height: 25vw;
        }
        & p {
            bottom: -8.5vh;
        }
    }
// phone query
@media screen and (max-width: 376px) {
    & > img#media {
    width: 80vw;
    height: 50vw;
    } 
    & > p {
        bottom: -20vh;
    }
}
`

/**
 * This component exploits the powers  "grid-auto-colums" property which, on a tablet & phones will come in handy display only a range of divs.
 * Worth noting is that the entire array is always being rendered. grid-auto-colums just restricts what is painted to the browser.
 * Full disclosure: I've never done this sort of thing --So I have never done this sort of thing & have no idea whether it would be considered "hacky".
 * Though it's nice not to carry the weight of Owl Carousel (http://baseball.doosan.com/) & it doesn't make http requests,
 * I prefer Owl Carousel, tho.
 */
class SliderVid extends React.Component {
    render(props) {
        return (
            <StyledSliderVid id="slider-inner-container">
                    {this.props.gifArray.map((pic)=> (
                    <PicFrame key={pic.id}>
                     <img id="media" src={`./img/${pic.src}`}  alt={`${pic.desc}`}/>
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