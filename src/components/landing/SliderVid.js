import React from 'react';
import styled from 'styled-components';


// FIXME: A thorny issue persists with <p>s * according to volume of text, a gap is visible at some descriptions
// Solved with a "top: " value rather than a "bottom: " value.

const StyledSliderVid = styled.div`
    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-gap: 0.5%;
    overflow: hidden;

    @media screen and (max-width: 768px) {    // tablet query
    grid-auto-columns:33%;
    grid-gap: 1%;
   & > section {
        & > img#media {
            height: 25vw;
            margin-top: -5vh;
        }
        & > h3 {
            font-size: calc(var(--base) * .85);
        }
        & > p {
            top: 22vh;
            font-size: calc(var(--base) * .8);
            margin-top: 0;
            text-align: center;
        }
      }
    }

    @media screen and (max-width: 376px) {    //phone query
        grid-auto-columns: 100%;
        grid-gap: 1%;
        // display:none;
        & > section {
            & > img#media {
                width: 70vw;
                height: 50vw;            
            }
        & > h3 {
            font-size: calc(var(--base) * 1.2);
        }
        & > p {
            width: 88vw;
            top: 34vh;
            font-size: calc(var(--base) * 1);
            }
        }
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
    top: 30vh;
    font-family: Arial, sans-serif;
    word-wrap: break-word;
    color: #301010;
    line-height: 1.5;
    font-size: calc(var(--base) * .5);
    z-index: 20;
  }
`

/**
 * This component exploits the powers  "grid-auto-colums" property which, on a tablet & phones will come in handy display only a range of divs.
 * Worth noting is that the entire array is always being rendered. grid-auto-colums just restricts what is painted to the browser.
 * Though it's nice not to carry the weight of Owl Carousel (http://baseball.doosan.com/) & it doesn't make the http request.
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