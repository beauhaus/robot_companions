import React from 'react';
import styled from 'styled-components';


// FIXME: Too many queries

const StyledSliderVid = styled.div`
    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-gap: 0.5%;
    overflow: hidden;
    // border: 1px solid fuchsia;

    @media screen and (max-width: 768px) {    // tablet query
    grid-auto-columns:33%;
    grid-gap: 1%;
   & > section {
        & > img#media {
            height: 25vw;
            margin-top: -5vh;
        }
        & > h3 {
            font-size: .9rem;
        }
        & > p {
            bottom: -10vh;
            font-size: .8rem;
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
            font-size: .9rem;
        }
        & > p {
            width: 88vw;
            bottom: -15vh;
            font-size: .8rem;
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