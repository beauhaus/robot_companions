import React from 'react';
import styled from 'styled-components';

//MOUNTAIN STATES
class MTN extends React.Component {
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
            <svg className="mtnSvg">

            <linearGradient id="a" x1="565" x2="449" y1="550" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0f1f1a" />
                <stop offset="1" stopColor="#346858" />
            </linearGradient>
            <linearGradient id="top-edge" x1="565" x2="449" y1="451" y2="451" gradientUnits="userSpaceOnUse">        <stop offset="0" stopColor="#22121b" />

                <stop offset="1" stopColor="#642e4d" />
            </linearGradient>
            <linearGradient id="top-left"  x1="151.0005" x2="35" y1="452" y2="452" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#308E8E"/>

            <stop offset=".8386" stopColor="#0e2424"/>
            <stop offset="1" />
          </linearGradient>

            <linearGradient id="bottom-left"  x1="35" x2="151" y1="550" y2="550" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5b201a"/>
            <stop offset=".08753425" stopColor="#7b2d23"/>
            <stop offset=".1971" stopColor="#9d3b2d"/>
            <stop offset=".3152" stopColor="#b84634"/>
            <stop offset=".4424" stopColor="#cd4e3a"/>
            <stop offset=".5835" stopColor="#dc543f"/>
            <stop offset=".7492" stopColor="#e55841"/>
            <stop offset="1" stopColor="#e85942"/>
            </linearGradient>
            99583D
            <g className="home-result" opacity=".5">
                <path fill="url(#top-left)" d="M35 407h116v90H35z" />
                <text id="MT" fillOpacity="0.7" x="60" y="920"
                    onClick={this.handleClick}>MT</text>
                <path fill="#99583D" d="M173 407h115v90H173z" />
                <text id="AZ" x="190" y="920" onClick={this.handleClick}>AZ</text>

                <path fill="#29306B" d="M312 406h115v90H312z" />
                <text id="WY" x="330" y="920" onClick={this.handleClick}>WY</text>

                <path fill="url(#top-edge)" d="M449 406h116v90H449z" />
                <text id="CO" fillOpacity="0.5"
                    x="465" y="920" onClick={this.handleClick}>CO</text>

                <path fill="url(#bottom-left)" d="M35 505h116v90H35z" />
                <text id="NM" x="55" fillOpacity="0.7"  y="1120" onClick={this.handleClick}>NM</text>
                <path fill="#3B548B" d="M173 505h115v90H173z" />
                <text id="NV" x="190" y="1120" onClick={this.handleClick}>NV</text>
                <path fill="#ADAD0E" d="M312 505h115v90H312z" />
                <text id="UT" x="330" y="1120" onClick={this.handleClick}>UT</text>

                <path fill="url(#a)" d="M449 505h116v90H449z" />
                <text id="ID" fillOpacity="0.4" x="475"  y="1120" onClick={this.handleClick}>ID</text>
            </g>
            {this.state.home && <text id="chosen" x="200" y="65" >{`You've chosen ${this.state.home}`}</text>}
        </svg>
        )
    }
}

export default MTN;

// <StyledMTN>
// <button id="MT" onClick={this.handleClick}>MT</button>
// <button id="AZ" onClick={this.handleClick}>AZ</button>
// <button id="WY" onClick={this.handleClick}>WY</button>
// <button id="CO" onClick={this.handleClick}>CO</button>
// <button id="NM" onClick={this.handleClick}>NM</button>
// <button id="NV" onClick={this.handleClick}>NV</button>
// <button id="UT" onClick={this.handleClick}>UT</button>
// <button id="ID" onClick={this.handleClick}>ID</button>
//     {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
// </StyledMTN>
/*


            */