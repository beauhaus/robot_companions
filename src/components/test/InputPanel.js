import React from 'react';
import styled from 'styled-components';

import NEC from './NEC' 
import MID from './MID'
import SAC from './SAC'
import ENC from './ENC'
import ESC from './ESC'
import WNC from './WNC'
import WSC from './WSC'
import MTN from './MTN'
import PAC from './PAC'


const StyledInputPanel = styled.div`
position: absolute;
top: 10vh;
width: 98vw;
height: 80vh;
right: 1vw;
overflow-X: hidden;
border: 20px solid #97958c;
box-shadow: inset -10px 5px 10px 14px black;
& #home-btn-display {
    background: #545d63;
    position: relative;
    box-shadow: inset 0px 4px 15px 5px rgba(0,0,0,0.5);
    width: 94vw;
    height 10vw;
    bottom: 0;
    opacity: 1;
    display: grid;
    grid-template-columns: 50vw auto;
    grid-template-rows: 1fr;


    & > button {
       
        
        z-index: 20;
        border: 5px solid purple;
    }
}
& #ridge-container {
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
}
& .ridge {
    filter: blur(2px);
    opacity: 0.8;
    width: 105%;
    margin-left: -5px;
    height: 15px;
    border: 2.5px solid #b4b2a6;
    border-top-color: rgba(0,0,0,0.5);
    background: #b4b2a6;
    box-shadow: inset 0px -5px 5px 0px rgba(0,0,0,0.7);
}
`
const ValidateLight = styled.div`
    position: absolute;
     width: 8vw;
     height: 4vh;
     border: 4px solid #858370;
     background: #2e302e;  //default color
     box-shadow: -3px 3px 5px 3px rgba(0,0,0,.3);
     border-radius: 2px;
     z-index: 10;
     right: 2vw;
     text-align: center;
     line-height: .8;
     &#firstNameLight {
        top: 8vh;
        &::after {
            font-family: sans-serif;
            font-size: .6rem;
            color: rgba(36, 41, 36, 0.8);
            color: black;
            content: "First Name";
        }
    }
    &#lastNameLight {
        top: 20vh;
        &::after {
            font-family: sans-serif;
            font-size: .6rem;
            color: rgba(36, 41, 36, 0.8);
            color: black;
            content: "Last Name";
        }
    }
    &#emailLight {
        top: 32vh;
        &::after {
            font-family: sans-serif;
            font-size: .6rem;
            color: rgba(36, 41, 36, 0.8);
            color: black;
            content: "Email";
        }
    }
    &#zipLight {
         top: 44vh;

         &::after {
             font-family: sans-serif;
             font-size: .6rem;
             color: rgba(36, 41, 36, 0.8);
             /* color: black; */
             content: "Zip Code";
         }
     }
`


class InputPanel extends React.Component {
    constructor(props) {
        super(props)
        const home = '';
        this.handleClick = this.handleClick.bind(this);
        this.state = { home }
    }
    handleClick(e) {
        this.setState({
            home: e.target.id
        })
        // console.log(this.state.home)
    }
    render() {

        // <ValidateLight id="homeLight"/>
        return (
            <StyledInputPanel>
                <ValidateLight id="firstNameLight" />
                <ValidateLight id="lastNameLight" />
                <ValidateLight id="emailLight" />
                <ValidateLight id="zipLight" />

              


                <div id="ridge-container">
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>
                <div className="ridge"></div>                
                <div className="ridge"></div>
                <div className="ridge"></div>                
 
                </div>
                <div id="home-btn-display">
                    {this.props.homeregion === "NEC" && <NEC />}
                    {this.props.homeregion === "MID" && <MID />}
                    {this.props.homeregion === "SAC" && <SAC />}
                    {this.props.homeregion === "ENC" && <ENC />}
                    {this.props.homeregion === "ESC" && <ESC />}
                    {this.props.homeregion === "WNC" && <WNC />}
                    {this.props.homeregion === "WSC" && <WSC />}
                    {this.props.homeregion === "MTN" && <MTN />}
                    {this.props.homeregion === "PAC" && <PAC />}
                </div>
            </StyledInputPanel>
        )
    }
}

export default InputPanel;