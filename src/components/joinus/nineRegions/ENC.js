
import React from 'react';
import styled from 'styled-components';


// EAST NORTH CENTRAL STATES
class ENC extends React.Component {
    constructor(props) {
        super(props)
        const home = '';
        this.handleClick = this.handleClick.bind(this);
        this.state = { home }
    }
    handleClick(e) {
        // alert("clicked")
        this.setState({
            home: e.target.id
        })
    }
    render() {
        return (
            <svg className="encSvg">

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

                <g className="home-result" opacity=".5">
                    <path fill="url(#top-left)" d="M35 407h116v90H35z" />
                    <text id="MI" fillOpacity="0.7" x="60" y="920"
                        onClick={this.handleClick}>MI</text>
                    <path fill="#99583D" d="M173 407h115v90H173z" />
                    <text id="WI" x="200" y="920" onClick={this.handleClick}>WI</text>

                    <path fill="#29306B" d="M312 406h115v90H312z" />
                    <text id="IN" x="330" y="920" onClick={this.handleClick}>IN</text>

                    <path fill="url(#top-edge)" d="M449 406h116v90H449z" />
                    <text id="OH" fillOpacity="0.5"
                        x="465" y="920" onClick={this.handleClick}>OH</text>

                    <path fill="url(#bottom-left)" d="M35 505h116v90H35z" />
                    <text x="65" fillOpacity="0.7"  y="1120" onClick={this.handleClick}>IL</text>
                </g>
                {this.state.home && <text id="chosen" x="200" y="65" >{`You've chosen ${this.state.home}`}</text>}
            </svg>
        )
    }
}

export default ENC;

/*

<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
                    <g opacity=".5">
                        <path fill="#E85942" d="M35 505h116v90H35z" />
                        <text   fontSize="28.9909" transform="matrix(2.127 0 0 1 75.647 556.6201)">
                            5
    </text>
                        <path fill="#3B548B" d="M173 505h115v90H173z" />
                        <text   fontSize="28.9909" transform="matrix(2.1509 0 0 1 218.3198 556.6211)">
                            6
    </text>
                        <path fill="#ADAD0E" d="M312 505h115v90H312z" />
                        <text   fontSize="28.9909" transform="matrix(2.127 0 0 1 354.041 556.6211)">
                            7
    </text>
                        <path fill="#346858" d="M449 505h116v90H449z" />
                        <text   fontSize="28.9909" transform="matrix(2.127 0 0 1 494.9902 556.6201)">
                            8
    </text>
                        <path fill="#29306B" d="M312 406h115v90H312z" />
                        <text   fontSize="28.9909" transform="matrix(2.127 0 0 1 352.8799 458.0957)">
                            3
    </text>
                        <path fill="#99583D" d="M173 407h115v90H173z" />
                        <text   fontSize="28.9909" transform="matrix(2.1509 0 0 1 218.3198 458.9922)">
                            2
    </text>
                        <path fill="#40BBC1" d="M35 407h116v90H35z" />
                        <text   fontSize="28.9909" transform="matrix(2.127 0 0 1 75.647 458.9922)">
                            1
    </text>
                  
                    </g>
                </svg>


                */

/*

                <button id="MI" onClick={this.handleClick}>MI</button>
                <button id="WI" onClick={this.handleClick}>WI</button>
                <button id="IN" onClick={this.handleClick}>IN</button>
                <button id="OH" onClick={this.handleClick}>OH</button>
                {this.state.home && <h1>You chose {`${this.state.home}`}</h1>}
                */


                /*

<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <linearGradient id="a" x1="86.6509" x2="166.147" y1="552.5156" y2="521.0176" gradientUnits="userSpaceOnUse">
    <stop offset="0"/>
    <stop offset="1" stopColor="#40bbc1"/>
  </linearGradient>
  <path fill="url(#a)" d="M35 505h116v90H35z"/>
  <text font-family="'Arial-BoldMT'" font-size="28.9909" transform="matrix(2.127 0 0 1 75.647 556.6201)">
    5
  </text>
  <linearGradient id="bottom-left" x1="53.0903" x2="132.5864" y1="467.8135" y2="436.3154" gradientUnits="userSpaceOnUse">
    <stop offset="0"/>
    <stop offset=".0692293" stopColor="#081617"/>

    <stop offset="1" stopColor="#40bbc1"/>
  </linearGradient>
  <path fill="url(#b)" d="M35 407h116v90H35z"/>
  <text font-family="'Arial-BoldMT'" font-size="28.9909" transform="matrix(2.127 0 0 1 75.647 458.9922)">
    1
  </text>
</svg>
                */