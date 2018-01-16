import React from 'react';
import styled from 'styled-components';
import ValidateUser from './ValidateUser';

const StyledInputPanel = styled.div`
position: absolute;
top: 12vh;
width: 45vw;
height: 80vh;
right: 2.5vw; // use same in desktop for map!*****
// left: 2.5vw;
overflow: hidden;
border: 20px solid #97958c;
border-radius: 2px;
box-shadow: 2px 2px 8px 3px rgba(0,0,0,0.5);
& #inner-shadow {
    box-shadow: inset -2px 2px 10px 2px rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
}
& #ridge-container {
    width: 100%;
    height: 100%;
    z-index: 3;
}

/* DON'T TOUCH!! */
& .ridge {
    filter: blur(1px);
    z-index: 2;
    width: 102%;
    margin-left: -5px;
    height: 8px;
    border: 2px solid grey;
    background: wheat;
    box-shadow: inset 0px -1vh .5vh 0px darkgrey;
}
@media screen and (max-width: 768px) {      // tablet query
}

@media screen and (max-width: 376px) {      // iPhone Query
     width: 100%;
     position: absolute;
}
`

const TextureMaker = () => (
    <div>
        <div id="inner-shadow"></div>
        <div id="ridge-container">
            {[...Array(80).keys()].map((item, idx) =>
                <div key={idx} className="ridge"></div>)}
        </div>
    </div>
)


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
    }
    render() {
        return (
            <StyledInputPanel id="styled-input-panel">
                <TextureMaker id="texture-maker"/>
                <ValidateUser id="validate-user-comp" />
            </StyledInputPanel>
        )
    }
}

export default InputPanel;



/*

@media screen and (max-width: 768px) {      // tablet query
}
// FIXME: that heinous 2px line at right is back!
// (look at grid in slider as culprit.)
@media screen and (max-width: 376px) {      // iPhone Query
 
}
*/