import React from 'react';
import styled from 'styled-components';


/**
 * This exploits the power of CSS fully with grid-auto-flow: columns; -- directing the implicit <Picframe/> s to simply fill to the right.
 * rather than in one column. 
 * "overflow: hidden;" here, is key.
 */

const StyledSliderVid = styled.div`
    margin: 0 auto;
    width: 87vw;
    height: 100%;
    display: grid;
    grid-auto-columns: 24.75%;
    grid-auto-flow: column;
    grid-gap: 1%;
    overflow: hidden;
@media screen and (max-width: 768px) {    // tablet query
    grid-auto-columns:33%;    
   & > section {
       grid-template-rows: 16vh 3vh 2vh auto;             //img & h4 share a row
       grid-gap: .5vh;
        & > img.media {
                height: 80%;
                grid-rows:1/2;
            }
            & > h4 {
                grid-rows: 2/3;
                font-size: calc(var(--base) * .85);
            }
        }
    }

    @media screen and (max-width: 376px) {    //phone query
        grid-auto-columns: 100%;
        & > section {
            grid-template-rows: 26vh 2vh 2vh auto;             //img & h4 share a row
            grid-gap: 2vh;
            & > img.media {
                height: 100%;            
            }
        & > p {
            font-size: calc(var(--base)*.8);
            }
        }
    }
`
const PicFrame = styled.section`
    height: 100%;
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: 30vh 1vh auto;
    grid-gap: 0.5vh;
   & > img {
       grid-row: 1;
       width: 100%;
       height: 85%;
    } 
  & > h4 {
    grid-row: 2;
    margin-top: -2vw;
    color: navy;
    z-index: 8;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  & > p {
    grid-row: 3;
    font-family: Arial, sans-serif;
    word-wrap: break-word;
    color: #301010;
    font-size: calc(var(--base) * .6);
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
                    <PicFrame className="media-frame" key={pic.id}>
                     <img className="media" src={`./img/${pic.src}`}  alt={`${pic.desc}`}/>
                     <h4>{`${pic.title}`}</h4>
                     <p>{`${pic.desc}`}</p>
                    </PicFrame>
                ))
            }
            </StyledSliderVid>
        )
    }
}
export default SliderVid;