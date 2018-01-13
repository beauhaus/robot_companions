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
        return (
            <StyledInputPanel>            
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