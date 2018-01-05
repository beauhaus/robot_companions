import React from 'react';
import styled from 'styled-components';
import GroupsLogos from './GroupsLogos';
import logos from './logo.JSON'

const StyledGroups = styled.div`
height: 53vh;
background: grey;
color: maroon;
text-align: center;
position: relative;
margin: 0;
& > h1 {
    color: black;
    position: absolute;
    top: 12vh;
    width: 60vw;
    left: 50%;
    margin-left: -30vw;
    font-size: 2rem;
    font-weight: lighter;
}
`

const GroupsContainer = styled.div`
// background: grey;
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
// display: none;
width: 2vw;
position: absolute;
right: -2vw;
`

const LogoBack = styled.button`
// display: none;
width: 2vw;
position: absolute;
left: -2vw;
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
                <h1>RC Groups</h1>
                <GroupsContainer>
                    <LogoBack onClick={this.incrementLogo} id="fwd-arrow">&lt;</LogoBack>
                    <GroupsLogos range={this.nuarr} cue={this.state.range} />
                    <LogoFwd onClick={this.decrementLogo} id="rwd-arrow">&gt;</LogoFwd>
                </GroupsContainer>
            </StyledGroups>
        )
    }
}
export default Groups;
