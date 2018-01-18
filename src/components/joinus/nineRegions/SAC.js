import React from 'react';
import styled from 'styled-components';

class SAC extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            home: '' 
        }
    }
    handleClick(e) {

        this.setState({
            home: e.target.id
        })

    }

    /*FIXME: consider deleting homestate entirely */
    render() {
        return (
            <svg className="sacSvg">
            <linearGradient id="top-edge" x1="565" x2="449" y1="451" y2="451" gradientUnits="userSpaceOnUse">        <stop offset="0" stopColor="#22121b" />
                <stop offset="1" stopColor="#642e4d" />
            </linearGradient>
            <linearGradient id="top-left"  x1="151.0005" x2="35" y1="452" y2="452" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#308E8E"/>

            <stop offset=".8386" stopColor="#0e2424"/>
            <stop offset="1" />
          </linearGradient>
            <g className="home-result" opacity=".5">
                <path fill="url(#top-left)" d="M35 407h116v90H35z" />
                <text id="NC" fillOpacity="0.7" x="60" y="920"
                    onClick={this.handleClick}>NC</text>
                <path fill="#99583D" d="M173 407h115v90H173z" />
                <text id="SC" x="200" y="920" onClick={this.handleClick}>SC</text>

                <path fill="#29306B" d="M312 406h115v90H312z" />
                <text id="GA" x="330" y="920" onClick={this.handleClick}>GA</text>

                <path fill="url(#top-edge)" d="M449 406h116v90H449z" />
                <text id="FL" fillOpacity="0.5"
                    x="465" y="920" onClick={this.handleClick}>FL</text>
            </g>
            {this.state.home && <text id="chosen" x="200" y="65" >{`You've chosen ${this.state.home}`}</text>}
        </svg>
            
        )
    }
}

export default SAC;