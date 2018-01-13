import React from 'react';
import styled from 'styled-components';

const StyledInputPanel = styled.div`
position: absolute;
top: 10vh;
width: 48vw;
height: 80vh;
right: 2vw;
overflow-X: hidden;
border: 20px solid #97958c;
box-shadow: inset -10px 5px 10px 14px black;
& .ridge {
    filter: blur(2px);
    opacity: 0.8;
    width: 105%;
    margin-left: -5px;
    height: 20px;
    border: 5px solid #b4b2a6;
    border-top-color: rgba(0,0,0,0.5);
    background: #b4b2a6;
    box-shadow: inset 0px -5px 5px 0px rgba(0,0,0,0.7);
}
`
const ValidateLight =styled.div`
    position: absolute;
     width: 8vw;
     height: 4vh;
     border: 4px solid #858370;
     background: #2e302e;  //default color
     box-shadow: -3px 3px 5px 3px rgba(0,0,0,.3);
     border-radius: 2px;
     z-index: 10;
     right: 2vw;
     &#firstNameLight {
        top: 8vh;
        &::after {
            font-family: sans-serif;
            font-size: .6rem;
            color: rgba(36, 41, 36, 0.8);
            color: black;
            content: "First Name";
            position: absolute;
            top: 0.5vh;
            left: 0.5vh;
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
            position: absolute;
            top: 0.5vh;
            left: 0.5vh;
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
            position: absolute;
            top: 0.5vh;
            left: 0.5vh;
        }
    }
    &#zipLight {
         top: 44vh;
         &::after {
             font-family: sans-serif;
             font-size: .6rem;
             color: rgba(36, 41, 36, 0.8);
             color: black;
             content: "Zip Code";
             position: absolute;
             top: 0.5vh;
             left: 0.5vh;
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
            <ValidateLight id="firstNameLight"/>
            <ValidateLight id="lastNameLight"/>
            <ValidateLight id="emailLight"/>
            <ValidateLight id="zipLight"/>

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
            </StyledInputPanel>
        )
    }
}

export default InputPanel;