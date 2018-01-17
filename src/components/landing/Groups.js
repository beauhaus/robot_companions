import React from 'react';
import styled from 'styled-components';
import GroupsLogos from './GroupsLogos';
import logos from './logo.JSON'

const StyledGroups = styled.div`
height: 53vh;
width: 100vw;
background: grey;
text-align: center;
position: relative;
margin: 0;
& > h1 {
    color: black;
    position: absolute;
    top: 5vh;
    width: 60vw;
    left: 50%;
    margin-left: -30vw;
    font-size: calc(var(--base)* 1.8);
    font-weight: lighter;
    & > span {
        color: #831212;
        font-size: inherit;
    }
}
& #fwd-arrow, #rwd-arrow {
    display: none;
    z-index: 5; /* This is for concealing images beneath ( in carousel on phones)*/
    position: absolute;
}

  @media screen and (max-width: 768px) {    // tablet query
      height: 38vw;
      & > h1 {
          top: 2vh;
          font-size: calc(var(--base)* 2.2);
      }
      & > #groups-container {
          top: 10vh;
          margin: 0;
          left: 0;
          padding: 0;
          width: 100vw;
      }
}

@media screen and (max-width: 376px) {      // phone query
    height: 58vh;
    & > h1 {
        font-size: calc( var(--base)* 1.8);
    }
    & > #groups-container {
        top: 15vh;
        margin: 0;
        left: 0;
        width: 100vw;
        & > #fwd-arrow, #rwd-arrow {
        background: grey;
        display: block;
        font-size: calc( var(--base)* 2.2);
        font-weight: bold;
        width: 2vw;
        border-width: 0;
        color: wheat;
        width: 90px;
        height: 35vh;
        }
  }
}
`

const GroupsContainer = styled.div`
    position: relative;
    width: 80vw;
    height: 18vh;
    left: 50%;
    top: 25vh;
    margin-left: -40vw;
    color: #a1a1a1;
    padding: 0.5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`
const LogoFwd = styled.button`
    right: 0;
`

const LogoBack = styled.button`
    left: 0;
`

class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.incrementLogo = this.incrementLogo.bind(this);
        this.decrementLogo = this.decrementLogo.bind(this);
        this.state = {
            count: 0,
            range: ''
        };
    }
    incrementLogo() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
        const fwd = (arr) => {
            let popped = arr.pop();
            arr.unshift(popped);
            return this.state.range;
        }
        fwd(logos)
    }
    decrementLogo() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        })
        const bkwd = (arr) => {
            let shifted = arr.shift();
            this.state.range = arr.push(shifted);
            return this.state.range;
        }
        bkwd(logos)
    }
    render() {
        return (
            <StyledGroups className="groups">
                <h1>RC <span>Groups</span></h1>
                <GroupsContainer id="groups-container">
                    <LogoBack onClick={this.incrementLogo} id="fwd-arrow">&lt;</LogoBack>
                    <GroupsLogos range={this.nuarr} cue={this.state.range} />
                    <LogoFwd onClick={this.decrementLogo} id="rwd-arrow">&gt;</LogoFwd>
                </GroupsContainer>
            </StyledGroups>
        )
    }
}
export default Groups;