import React, { Component } from 'react';
import styled from 'styled-components';

import InputPanel from './InputPanel';
import RegionMap from './RegionMap';

/**
 * Map frame is for easthetics. It offers an alternative to the drop-down menu.
 * Layers producing the entire screen are as follows(from bottom to top):
 * Grey-green monitor with gradient SVG-> Lines of interlacing evenly dispersed SVG->
 * Div overlay with inset box-shadow HTML -> americaMap & buttons SVG placed on top.
 * 
 * I dialed back the opacity for the top layer to produce an effect of interaction
 * with the layers beneath.
 * 
 * This would, of course, be an accessibility nightmare for users with poor vision.
 */

const StyledMapFrame = styled.div`
position: absolute;
top: 2vh;
width: 50vw;

box-shadow: 5px, 5px 20px 14px black;

& #tv-panel {              //section
    position: relative;
    width: 50vw;
    height: 100vh;
    & > #screen-container-div {
        // border: 2px solid fuchsia;
            position: absolute;
            width: 35vw;
            top: 20vh;
            border-radius: 40px;
            margin-left: -15vw;
            left: 50%;
            box-shadow: 5px, 5px 20px 14px black;
            & #americaMapFrame {
                & #interlace {
                    stroke-width: 1px;
                    opacity: .2;
                }
            }
        }
            & #inner-glow-overlay{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                box-shadow: inset -10px 10px 50px 10px rgba(0,0,0,0.9);
                border: 8px solid black;
                width: 100%;
                height: 100%;
                border-radius: 23px;
                & > #americaMap {
                    opacity: 0.6;
                    & > #americaRegions {

                        & > .home {
                            opacity: 0.2;
                            &:hover {
                                opacity: 1;
                                stroke: #00ff00;
                            }
                        }
                    }
                }
            }
        }
    }
svg> path#glitch-line {
  position: absolute;
  bottom: 0;
  transform: translateY(400px);
  stroke-width: 4px;
  stroke: #00a100;
  animation: glitch 10s 3s infinite;
}


@keyframes glitch {
    0% { transform: translateY(500px);
         opacity: 0;
         stroke-width: 0;
     }
     50% {
         opacity: .05;
         stroke-width: 140px;
      }
    100% { 
        transform: translateY(-2000px);
        opacity: 0;
    }
}
`

const GlitchLine = () => (
    <svg width="600" height="600" viewBox="0 0 600 600">
        <path  id="glitch-line" d="M0 260.5h600"  />
    </svg>
)

class MapFrame extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <StyledMapFrame>

                <section id="tv-panel">
                    <div id="screen-container-div">

                        <svg id="americaMapFrame"
                            viewBox="0 0 600 600"
                            preserveAspectRatio="xMinYMin meet"
                        >

                            <linearGradient id="screen-gradient" x1="125.9854" x2="562.9851" y1="387.4971" y2="166.497" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#333" />
                                <stop offset="1" stopColor="#395b5c" />
                            </linearGradient>

                            <path fill="url(#screen-gradient)" d="M599 40c0-22.1-17.9-40-40-40H39C16.9 0-1 17.9-1 40v520c0 22.1 17.9 40 40 40h520c22.1 0 40-17.9 40-40V40z" />
                            <g id="interlace" strokeMiterlimit="10">
                                <path className="interlacer" strokeLinejoin="bevel" d="M41-.5h519.2V0c7.3 0 14.6 1.9 20.7 5.3l.4.2H16.6l-.3.5C23.8 1.9 32.9-.3 41.8-.3" />
                                <path className="interlacer" d="M0 27.5h597.2c-.5-.6-.5-1.7-.8-2.5-.8-1.8-.6-2.5-2.6-2.5H4c-.2 0-.6-.1-.9 0-1.2.4-2.4 3.8-2.3 5.2M600 37.5H-2h.5c0-1.4.1-4.5 1.4-5 .2-.1.5 0 .7 0h596.2c1.6 0 1.3.3 1.7 1.7.4 1.2 1.1 2.3 1.4 3.5M5.9 16.5c.4-1.4 2.9-3.6 2.8-4.9l-.7-.1h573.4c2.1 0 4.6-.4 6.6 0 1.9.3 4.1 2.7 4.3 4.6l-.2.4H5" />
                                <path className="interlacer" strokeLinejoin="bevel" d="M557 601.5H38.7v-.7c-7.3 0-14.5-1.8-20.7-5.2l-.4-.1h563.8l.2-.6c-7.5 4.1-16.6 6.4-25.5 6.4" />
                                <path className="interlacer" d="M598 573.5H1.7c.5 0 .5 1.7.8 2.5.8 1.8.6 2.5 2.6 2.5h583c2.1 0 4.1-.2 6.2-.2.2 0 .6 0 .9-.1 1.2-.4 2.3-3.7 2.3-5.1M-2 562.5h602.1-.5c0 1-.1 4.4-1.4 4.8-.2.1-.5.1-.7.1-.7 0-1.4.1-2.1.1H2.1c-1.6 0-1.3-.5-1.7-1.9-.4-1.2-1.6-2.2-1.8-3.5m590.9 26.4c-191.8.5-384.6.5-576.5.5-2 0-4-1-5-2s-1-3-1-3c194.9-1 390.7 0 585.6-.5m-.6-.2c-.6 1.6-2.8 3.4-2.5 5m-591-36.8h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601zm0-10h601v5h-601z" />
                            </g>
                            <GlitchLine/>

                        </svg>

                        <div id="inner-glow-overlay">
                            <RegionMap id="region-map" />
                        </div>

                    </div>
                </section>
            </StyledMapFrame>
        )
    }

}

export default MapFrame;