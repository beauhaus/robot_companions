import React from 'react';
import styled from 'styled-components';

const StyledAmericaMap = styled.div`
    opacity: 1;
    height: 100%;
    width: 100%;
    width: 50vw;
    & > #americaMap {
        height: 100%;
        width: 100%;
        stroke: green;
        & > path:hover , g:hover {
            fill: red;
            stroke-width: 4px;
            stroke: green;
        }
        & > path#background-frame:hover {
            fill: burlywood;
            stroke-width: 0;
        }
    }
`


class AmericaMap extends React.Component {
    constructor(props) {
        super(props);
        this.regionInput = this.regionInput.bind(this);
        this.state = {
            userHomeState: ''
        }
    }
    regionInput(region) {
        region = region.target.id.toUpperCase();
        this.setState({
            usStateEntry: this.props.region
        })
        console.log("homeregionInputClick!", region)
    }
    render() {
        return (
            <StyledAmericaMap id="styledAmericaMap">
                
                <svg id="americaMap"
                viewBox="0 0 600 400"
                // preserveAspectRatio="none"
                // preserveAspectRatio="xMidYMid meet"
                preserveAspectRatio="xMinYMin meet"
            >
                    <path id="background-frame" fill="burlywood" d="M0 0h600v400H0z" />
                    <g id="PAC">
                        <path id="AK" d="M37.8 309.3c.2-.3.4-.5.6-.8.6-1.1 1.3-2.2 1.8-3.3.4-.8 1-1 1.8-.8 1.4.4 2.7 0 4-.4.7-.2 1.4-.6 2.1-.9.6-.3 1.2-.3 1.6.3 1.3 1.4 3 1.9 4.7 2.4 2.6.7 5.2 1.2 7.9 1.9l5.7 1.5c.9.2 1.4.8 1.7 1.6.7 2.1 1.1 4.3 1.2 6.6.1 2 .4 3.9.6 5.9 0 .2.1.4.1.6.1 2.3.2 4.7.2 7 .1 2.8.2 5.5.2 8.3.1 1.7.1 3.4.2 5.1.1 1.8.1 3.6.2 5.3 0 .3.1.6.1.9.1.6.5.8 1.1.8h.6c1.7 0 3.1.4 4.4 1.6.3.3.7.5 1 .7.8.5 1.3 1.2 1.8 2.5-.5-.3-.8-.4-1.2-.7-1.1-.8-2.3-1.3-3.6-1.8-.6-.2-1.2-.6-1.9-.8-.7-.2-1.5-.5-2.3-.5-1.7-.1-3.5-.2-5.2-.2-1.1 0-1.9-.4-2.5-1.3-.4-.7-.9-1.3-1.4-1.9-.8-1.1-1.9-1.3-3.1-1.3H60c-1.8.3-2 .5-1.8 2.4.1.5.1 1 .2 1.7-.5.1-.9.2-1.3.2-.9 0-1.6.4-2.2 1-.8.7-1.6 1.3-2.5 2-.4.3-.5.3-1.2 0-.1-.6.2-.9.6-1.1 1-.5 1.2-1.2 1.2-2.2 0-1.3.2-2.6.3-4-.4-.2-.8-.5-1.3-.7-.3.3-.7.5-.9.9-.9 1.4-2 2.6-3.2 3.6-1.4 1.2-1.9 2.9-3 4.3.5.4.9.7 1.5 1.1-.8.7-1.4 1.3-2.1 1.9-.4.4-.9.7-1.3 1.1-1.3 1.4-2.8 2.5-4.4 3.4-1.2.7-2.7 1.1-4 1.7-1.3.6-2.6 1.3-3.8 2-.3.2-.7.4-1 .1-.3-.3-.4-.9-.1-1.3.2-.3.5-.5.8-.6 1.3-.8 2.6-1.4 3.8-2.3 1.4-.9 2.5-2.1 3-3.7.3-1 .6-2.1.9-3.2-.5-.2-1-.4-1.4-.7v-1.5c-.4.1-.8.1-1.2.2-.6.2-1.1.1-1.5-.4-.6-.6-.9-.7-1.7-.4-.5.2-1 .4-1.4.6-.5.3-.8.7-1.2 1.1-1-.8-1.2-1.3-.6-2.5.5-.9.5-1.8.1-2.7-.2-.5-.3-1.1-.4-1.6-.1-.4-.3-.8-.5-1.3-.8.3-1.4.6-2.2.9-.7-1.4-1.6-2.5-1.5-4.1.1-1.3 0-2.5-.7-3.6-.1-.3-.2-.6-.3-1 .5-.1 1-.3 1.5-.4 1.3-.3 1.3-.4 1.1-1.7-.1-1 .5-2 1.5-2 2 .1 4.1.2 6.2.7 0 0 .1 0 .2-.1 1.6-1.3 1.6-.6 1.6-3.1v-1.9c0-.3 0-.7-.1-1-.3-1-.7-1.3-1.8-1.2-.6.1-1.1.1-1.7.2-.2-.7-.4-1.3-.6-1.9-.7.4-1.3.8-2.1 1.2-.2-.5-.3-.8-.6-1.4-.6-.1-1.2-.2-1.9-.4-1.1-.2-1.3-.7-.7-1.7.3-.4.5-.7.8-1.1-.2-.5-.4-1.1-.6-1.6 1.3-.4 2.3-1 3.6-.9.3 0 .6-.2.9-.3.2-.1.4-.1.7-.2-.3 1.2-.6 2.3-1 3.4.5.1.8.2 1 .1 1.5-.3 3-.6 4.4-1 .2-.1.5-.2.7-.4.6-.8 1.1-1.6 1.6-2.5.1-.1 0-.2 0-.5-.3-.1-.7-.2-1-.2-.8-.1-1.3-.5-1.7-1.2-.8-1.3-1.7-2.6-2.6-3.9-.6-.8-.7-1.7-.6-2.6 0-.5.2-.9.7-1l2.1-.9c.3-.1.7-.1 1.1 0 .5-.4.9-.3 1.4-.1z" />    
                        <path id="HI" d="M124.7 332h.5c1.3.6 2.8.5 4 1.5.8.7 1.5 1.5.7 2.4-.8 1-1.5 2.4-3.4 2-1.9-.3-3.2-1.2-4.3-2.7-.5-.7 0-1.6.6-2.1s1.3-.7 1.9-1.1zm29.8 17h-.5c-1.6-.4-2.8-1.8-4.6-1.4h-.2c-.5-.2-.4-1.7-1.3-1-.8.6.3 1.4.2 2.1-1.4.5-2.4-.4-2.3-2.1 0-.8-.1-1.4-1-1.6-.7-.2-1.6-.2-1.6-1.3.1-1 .8-1.4 1.7-1.6.2-.1.4-.2.7-.2.9-1.6 2.2-1.2 3.5-.7.5 1.1 1.1 2.2 1.6 3.2.6 1.4 1.4 1.8 2.7.8.1-.1.6-.2.6-.1.1.2.3.6.2.7-.9.9-.4 1.5.4 2.2.3.3.3.7-.1 1zm14.8 2.4c.9 0 1.9-.1 2.8-.1.3 0 .9 0 .9.5 0 .6-.5.5-.8.7-1.6 1.2-3 .1-4.5-.1-1.7-.5-3.3.6-4.9.5-.5 0-1.7-.1-1.4-.6.5-.7.8-1.7 2.1-1.8 2-.2 3.9.2 5.8.9zm-2.4 4c1.4.7 2.8 1.4 4.1 2.1.1.1.1.7.1.8-1.1.4-2.2.9-3.3 1.1-.3.1-.6-.4-.5-.8.4-.9-.1-1.2-.8-1.5-.4-.2-1-.4-.8-.9.2-.4.8-.6 1.2-.8zm11.4 2.1h-.7c-1.2 0-2.6.3-3-1.4-.3-1.4.3-2.2 1.8-2.3.7-.1 1 .3 1.1.8.4 1.8 1.6 2.1 3.1 1.6 2-.6 4-.8 5.3 1.4.3.4.7.6 1.2.6.8 0 1.8.1 2.1.9.4.9-.6 1.3-1 1.8-2.2.7-4.4 1.4-6.5 2.2-1.9-.7-3.6-1.5-2.3-4 .3-.6-.1-1.1-.7-1.3-.1-.2-.3-.3-.4-.3zm11.1 14.2c0-.1 0-.1-.1-.1-.7-.9-.7-1.8.1-2.7.7-.4 1.4-.9 2-.1 1.7 2.4 5.1 2.1 6.8 4.5.3.4 1.5.2 2.3.3 1.7.2 3.2 1 4.2 2.4l.3.3c.9.6-.4 2.2 1.1 2.5.8-.1 1.1.4 1.1 1.1-.1 1.3.5 2.1 1.7 2.6 1.2.4 1.8 1.2 1.6 2.5-.2 1.3-1.2 1.2-2.1 1.2-.9.1-1.9.1-2.8.2l-1.5.3c-.7.1-1.4.3-1.7 1-.6 1.7-1.9 2-3.4 1.7-1.6-.2-3.4-1.4-4.2 1.1v.7c0 .1.1.3.1.4.2 1 1.5 2.2.1 2.9-1.4.7-2.7-.1-3.5-1.5-.5-.9-1.4-1.5-2.5-1.8.2-1.8.7-3.4 1.4-5.1.4-.8.5-1.6-.1-2.3-.6-1-1.7-1.2-2.6-1.6-1.5-.8-2.3-1.9-1.9-3.6 1.1-1.8 2.6-3.4 4.5-4.3.2-.1.6-.4.6-.6-.1-.9-.8-1.5-1.5-2zm-15.6-10.4c-.6 1.7-1.2-.7-1.8.1-.3-.2-.5-.3-1.2-.7 1.3-.6 2.2-1.3 3 .6z" />
                        <path id="WestCoast" d="M102.8 19.8c2.3 1.8 1.3 5.8 1.3 7.8-6.9 17-10.9 35.1-7.9 53.1 0 1 0 2-1 3-2 2-4 3-5 5-3 10 1 20-6 29.1-2 4 1 8-2 12-2 2-5 1-6.9 1-5.6-2.1-10.6-4.2-15.8-5.7-.7-.2-1.5-.4-2.2-.6-.7-.2-1.5-.3-2.3-.5-.8-.1-1.5-.3-2.3-.4 0 .3 5.8 1.4 0 0 0 .3 0 .6.1.8l.7-.6c-.3-.1-.5-.2-.8-.2-.1.8-.2 1.5-.3 2.3s-.3 1.5-.4 2.2-.4 1.5-.6 2.2c-.2.7-.4 1.5-.7 2.2-.7 2.2-1.5 4.4-2.3 6.5-.1.3-.2.7-.4 1-.1 2.8-.1 5.8-1.8 9.1 0 .4-.1.7-.2 1.1-.1.4-.2.7-.3 1.1-.1.3-.1.7-.2 1-.6 2-1.8 3.9-2 6v1.2c-.1 18 12 35.3 24.8 47.4 3 3 4 8 6 11 2 2 4 4 5 7l3 3c1 1 1 3 2 4l3 3c4 8 7.9 15 8.9 24.1-5 2-6.9 8-6 13-2-.9-.9-5.2 0 0-2 3-2 7-1.8 10.3-1.1-.8-2.2-1.5-3.3-2.4 1.2.6 2.3 1.4 3.3 2.4-7.1-6.3-17.1-4.3-26-6.3-5-2-6.9-7-6.9-12 0 0-1-1-2-1-1-1-1-3-2-4-2-1-4-2-5-4-4-5-6-11-10.9-14-6-3-11.9-6-14.9-12s-3-14-6-20c-6-17-6-35.1-10.9-53.1-2-7 0-15-1-22-1-2-3-3-2-5s2-3 3-5c4-13 3-27.1 10.9-40.1 6.9-12 11.9-25.1 15.9-39.1 3-11 0-23.1 2.1-33.7 3.7 4.8 18 7.6 11.8 16.1.1 0 .1-.1.2-.1-1 1.8-1.4 4.3-.2 6.1.2-.2.3-.5.5-.7-.2.2-.3.5-.5.7 3.9-.4 3.9-4.5 4.9-7.5 3-5 1-13 6-17 15.9 1 28.8 7 44.7 10 1.1 1 2.7 1.2 2.7 1.2z" />
                    </g>
                    <path id="SAC" d="M547.8 217.2c-.4-2.1-.2-2.4.1-2 .1-1.3.3-2.5 1-3.2 6-6 4-15-2-20-9.9 3-19.9 4-28.8 10-13 0-25.1 7-37.9 7.9-2 1.3-3 2.4-4.7 5.1-1.1 1.6-2.3 3-3.5 4.4-.2.2-.4.5-.6.7-2.8 1.9-4.8 3.9-7.4 5.1-.3.2-.5.3-.8.5-.3.2-.5.4-.7.6l-.9.6c-3.5 2.6-6.1 6.2-8.6 10.3-.3.3-.5.6-.8.9-.5.6-1 1.3-1.4 1.9-4 0-7.9 1-11.9 2 0 0-1 1-1 2 2 11 6.9 20 11.9 30.1 1 2 2 5 2 7-1 6 2 12 2 18 0 1-1 2-2 2-5 0-9.9-1-14.9 0-6.9 1-15.9 4-13.9 13 1 2 3 3 4 4 10.9 1 22.8-1 32.8 6h3c3-3 5-6 8.9-8h3c7.9 5 16.9 9 17.9 19v11s1 1 2 1c3 4 2.7 10 6.6 13.5l6.3 5.5c6.5 5.6 9.9 16 18.9 15 2-1 3-3 5-4 1-1 2-3 2-5 1-14-5-28.1-13.9-40.1-11.9-18-25.8-40.1-11.9-60.1 7.9-9 14.9-16 17.9-28.1 0-1 1-2 2-2 6-1 7.9-7 9.9-12 3-4 6.9-6 11.9-9 1-1 1-2 1-3s-1.5-.7-2.5-.6z" />
                    <path id="MID" d="M539.5 168c-1.5 6.3 2.3 13.4 6.8 19.2.2.3.5.6.7.9.1.2.3.5.4.7l.3.6c-.8.6 4.2 3.6-1.1 3.4-.3.1-.5.2-.8.3s-.6.1-1 .2h-.8c-2.6.2-5.4.9-7.9 1.5-2.4.6-4.8 1-7.2 1.9-2.7 1-4.9 2.3-7.5 3.6-1.5.8-2.6.6-4.2.7-2.2.1-4.3.8-6.4 1.4-5.7 1.8-11.8 2.9-17.4 4.9-2 .7-4 1.2-6.2 1.2-1.2 0-1.9-.3-3.1 0-1 .3-1.8.5-2.9.7-1 .1-2.1.1-3 .3-1 .2-2 .6-3 .8-1.9.3-3.8.7-5.7 1.1-1.9.4-3.7.6-5.6.8-1.5.2-4.1.2-5.4 1 0-.8 1-1.7 1.5-2.2 1.3-1.2 3.1-1.6 4.3-3 .8-.9 1.2-2.2 1.9-3.2.6-.9 1.4-1.7 2.1-2.5 1.5-1.5 2.8-2.3 4-4.1 1.2-1.8 0-3-1.2-4.5-2.3-2.8-7.5-4.3-5.1-9.2 1.7-3.4 2.3-7.3 3.5-11 .6.5 1.3.7 2.1.6 0-.8 0-1.5.2-2.3.4-2.1 1.3-3.4 2.7-4.9.7-.8 1.2-1.8 2.1-2.3.8-.5 1.6-.4 2.4-1.1 1.4-1.2.6-4.3.8-6.2.2-2.1 1.6-3.5 1.3-5.8-.8-5-1.4-9.8-2.3-14.6-.4-2-1.1-3.8-1.8-5.7-.3-.9-.2-1.9-.2-2.8 0-.9-.5-1.8-.5-2.6-.1-1.7 3.5-4.2 4.8-5.5 3.8-3.9 7.5-7.9 11.1-12 .9-1 .1-3.6.1-5.5.1-1.9-.3-4.9.6-5.4 3.1-1.6 6.6-3.2 10-3.1 8.9.2 14-5.5 11.6-13.9-.2-.6-.3-1.6 0-2 5.6-7.4 5.9-19 17.2-21.8.2-.1.4-.1.7-.2 2.6-1.8 5.6.2 7.5 2.5.2.3.3.6.4 1 .3.7.5 1.4.6 2.1.1.3.1.6.2.9.1.6.2 1.3.3 2 .1.3.3.6.4 1 1.5 3.5 2.6 7.3 3.4 11 .3.6.6 1.3.8 1.9.3.6.5 1.3.8 1.9 2 5 3 9 4.1 14.5.1.6.3 1.1.4 1.7.6 2.9 1.2 5.9 1.7 9.3.2.5.4 1.1.6 1.6 1 2.7 1.4 5.3.7 8.6l.8-.6c-2.4 1-2.4 3-2.8 4.9.1.6.2 1.2.4 1.8.8 2.5 2.4 5 2.9 7.1 1.4 6.2-1.6 12.3-3.5 18l-1.5 1c-1.3.2-2.7.3-4 .5h-.5c3.7 6.8 10.6 17.8.7 22.8 0 0-1-.7-1.2-.8-6.1-3.3-6.1-3.1-6.1-3.1z" />
                    <path id="NEC" d="M599 34c-3.7 4.6-7.4 9.3-11.8 13-8.8 7.3-15.2 27.5-10.2 37.4 1.5 2.9 4 9.1 10.2 5.3.1-.1.3-.2.5-.2-.1 1-.5 2.1-1.2 3.2-2 1.6-4 3.1-6 4.6l-2.1.3c-.4.1-.7.1-1.1.2-.2 0-.4.1-.6.3l-4.5 4.5c-.7.5-1.5.9-2.2 1.4-5.2 3.2-10.7 6.6-15.1 11.1-1.2-15-6.2-29.6-10.9-43.8-1.4-4.2-2.9-8.5-4.2-12.8 0-.1-.1-.3-.2-.4l-2.6-2.6c4.6-1.3 9-3.8 13.6-5.2 8.9-2.7 15.3-15 13.5-24.3-1.2-6.4.5-13.4 1.2-20.1.1-.7 1.9-1.4 3-1.9 1-.4 2.6 0 3.3-.7 6.2-6.1 8.8-1.2 10.6 3.8 3.3 9.1 7.1 17.6 16.4 22.2.8.5 1.1 3.8.4 4.7z" />
                    <path id="ESC" d="M429 319.7c-1.3-.3-2.3-1.3-3.3-1.3-1-1-2-.9-2-1.9-6-12 9.9-13.9 17.9-14.9h11.9c1-6-2-11.1-3-16.1 0-2 2-4.1 1-6.1-2-5-5-10-6.9-15.1-2-7-5-13-6.9-20.1 3-5 7.9-2 12.9-3 1 0 2-1 2-2 1-5 4-9 7.9-12 4-3 7.9-5 11.9-8 3-3 4-8 8.4-9.5l.4.2c-7.9 1-15.9 1.6-23.7 3.4.3-.4.5-.7.8-1-.3.3-.5.7-.8 1 3.6-3.6 9.4-6.6 11.9-11.4.2-.3.3-.6.4-1 4.6-2.7 1.6-7.8-2.4-9.9-.2-.2-.4-.5-.6-.7-.1-.1-.3-.3-.5-.4-.2-.1-.3-.3-.4-.4-.4-2.3-.4-5.3-.4-7.3v2c-1-3-4-3-5.8-3.4-.3-.1-.6-.1-1-.2-1.1-.1-2.2-.2-2.9 0-3.8.7-6 2.8-10.3 1.6-.2-.5-.4-1-.6-1.4-.1-.2-.3-.4-.4-.6-2.9-1.1-4.9-5.1-7.4.4-.2.2-.3.5-.5.7-.7.9-1.5 1.8-2.7 2.4l-.7.7c-.2.2-.4.5-.7.7-.2.2-.4.5-.6.8-.2 4.3-3.2 6.3-4.8 8.9-.1.3-.3.5-.5.7-.2.3-.5.6-.8.8-.2.1-.3.2-.5.4-3.5 1.4-5.5 4.4-9 5.1-.3.1-.7.1-1 .2-3.6.6-7-.4-10.2 2.1-1.9 1.6-.9 2.4-1.9 4.2-.9 1.5-2.4 2.3-4 3.1 1.7.9 2.4 3.4.3 4.6-1.8 1-4.8-1-6.7-.9.3 2.1 1 6.2-.1 8.1-1 1.7-3.5 3-4.6 4.8-1.1 2.1-2 4.7-2.4 7-.6 3.2-1.2 4.9-2.3 7.8-.9 2.3-1.4 5-2.1 7.5-.1.3-.2.6-.2.9-.1.3-.1.6-.2 1l-.3.9c-1.6 2.1-2.6 5.1-2.6 8.4l-.3.9c-1.1 3.4-.6 7.8-1.1 11.2-.4 2.8-1.4 5.3-1.4 8.2 0 2.1.1 4.4 2 5.5.3 4.4.6 9.6-.9 13.5-.7 1.8-1.9 3.3-2.5 5-.6 1.8-.3 4-.9 5.8 3.7.3 8.1.4 11.7-.3 2.2-.4 8.1-3.2 10.3-1.6 1.3.9 2.9 7.4 2.8 9.1-.1 1.2-1.6 2.7-1.3 4.3.2 1.2 1.4 2.7 2 3.8 2 .3 3.6-.3 5-1.6l-2.2 1.6c5.4-5 13.1-5.4 18.9-10.4h.5c.2 0 .3-1.3.5-2l7.9 5.2z" />
                    <path id="ENC" d="M476.3 127.9c3 12 5 23.1 3 35.1-5 2-7.9 6-7.9 11-1.4-.8 0-3.8 0 0-1.4-.8-3.3.2-1.7 1.6.9.8.9-1.6-.1-2.2-1.1 3.8-1.9 7.8-3.7 11.5l-.2-.7c-1.2-2.1-3.2-4.1-5.2-4.1-5 1-8.9 2-13.9 2-1-4-5-3-8.2-4.9.3 2.4 2.4.5 0 0 .2.9.2 1.9-.8 2.9-5 4-6 11-10.9 15-3 3-6 5-8.9 7-3 1-6.9-1-10.9 1-2 1-2 4-3 6-1 1-3 1-3.7 2.3 1.8 1 1.3-.7 0 0 1.5.8 2.1 2.7 1.1 4-.2.2-.5.5-.8.6-3.4-.9-7.4.1-10.8-1-.3-.2-.5-.4-.8-.7-1-.9-1.8-2.1-2.1-3.1-.6-2.1.2-3.1-1.2-4.9-1-1.4-2.7-2-4.2-2.5-4.7-1.8-5.2-2.3-3.7-7.3.4-1.1 2.1-4.3.5-5.5-1-.7-3.7 1.3-5.3 1-.2-3.3.3-5.5-2.6-7.5-2-1.4-3.7-2-5.5-4-5.3-5.9-.8-9.3.7-15.3s-1-9.3 3.7-14c4.1-4.1 4.5-6.9 1.2-11.9-1.4-2-3.4-2.8-5-4.4-2.4-2.3-.8-4.1-1.7-7.1-.4-1.2-1.6-1.6-2.1-2.7-.6-1.2-.4-3.1-.9-4.1-.7-1.3-2.8-4.1-3.8-5.3-2.5-3.1-7.7-6-11.1-8.5-1.9-1.4-4.6-1.4-5-4.2-.4-2.8 1.4-3.6.4-6.5-.8-2.4-2.3-3.9-1.7-6.4.6-2.3 2.8-3.4 3.5-5.8.8-2.4.3-5.1 1.1-7.4.8-2.5 3.1-4.4 5-6.1l1.1-1.3c-.3.5-.4 1.3-.6 1.8 3.9-.5 7.7-1.6 11.6-2.5.5 4.4 3.4 3.1 6 1.4 4.9-3.3 9.5-7 14.2-10.6l.5-.5c1.2-1.2 2.4-2.4 3.5-3.6l2.5.5c-.7 2.5-1.3 5.1-2 7.6l-1.5 2c2.7-1 5.4-2 8.1-3.1l4.5 4.6c3.5.7 6.1.3 9.3-2.2 3.3-2.6 8.5-2.7 12.9-3.9.2 4.4 3.7 3.3 5.5 2.4 4.1-2.2 4.6.2 5.1 3.2l-8 10.5c-.7 1.9-1.4 3.9-2.1 5.8l-2 5.6c-1.7 1.7-4.7 3.3-4.8 5.1-.6 8.4-2 16.6 2.4 25.2 2.4 4.7 1.3 11.8.1 17.5-.6 2.8-5 4.8-7.7 7.2-2.2-3.2-5.6-6.2-6.3-9.7-3.1-14.3-3.7-28.7 1.7-42.7.4-1.1-.6-2.7-.9-4-.8.8-1.7 1.6-2.5 2.6-1.6 1.8-3 3.7-4.5 5.6l-.5-1c.4-4.3 1.2-8.9 3.1-12.8 2.4-5 4.1-2.4 8.1-1.9l2.3-.7c4.5-2.5 9.1-10.5 14.8-5.8l.9-.7c1.1-.2 2.1-.5 3.2-.7l-.9 3.8c5.3 1.5 12.6 1.7 14.4 8.1 2 6.7.6 15.3-1 21.9 3.8-3.5 6.8-5.3 11.6-7.1-.4.2 4.6 16.8 4.8 18.4.5 4.1-2.9 6.8-3.2 10.7-.3 5 1.7 6.1 6.2 6.3 3.7.1 7.7-1.7 10.4-4.2 1.5-1.3 2.8-3 4.5-4 .7-.4 2.1-1.3 2.9-.8 1 .6-.5 1.9-.5 3.1z" />
                    <path id="WNC" d="M343 76.9c-.8 2.4-.3 5.1-1.1 7.4-.8 2.3-3 3.5-3.5 5.8-.6 2.5.9 4 1.7 6.4.9 2.9-.8 3.8-.4 6.5.4 2.8 3 2.8 5 4.2 3.4 2.4 8.6 5.4 11.1 8.5 1 1.2 3.1 4 3.8 5.3.5 1 .3 2.9.9 4.1.6 1.1 1.7 1.5 2.1 2.7 1 2.9-.6 4.7 1.7 7.1 1.6 1.6 3.7 2.4 5 4.4 3.4 5 3 7.7-1.2 11.9-4.7 4.7-2.2 8-3.7 14s-6 9.4-.7 15.3c1.8 2 3.5 2.6 5.5 4 2.9 2 2.5 4.2 2.6 7.5 1.6.3 4.3-1.7 5.3-1 1.6 1.2-.2 4.4-.5 5.5-1.6 5-1 5.5 3.7 7.3 1.5.6 3.2 1.2 4.2 2.5 1.4 1.8.5 2.9 1.2 4.9.8 2.7 4.4 5.7 7.3 5.2l.8-1.1c-.4-.1-.7-.1-1.1-.2.6 3.4.7 6.5-1.3 9.5-2.2 3.3-4.6 6-5.7 10l.9-3.5c-.2.7-.7.8-.7 1.6-2.1.1-3.5-3-4.4-4.6-8.8-.5-17.2 1-25.8 1-4.2 0-7.9-.6-11.8.3-4.2 1-10.1 3-14.3 1.3-.1-1.5.5-4.4-.7-5.4-.8-.6-4.6 0-5.7 0-4 0-7.7.6-11.7.7-5.8.1-10.8 1-16.4 1-5.7 0-11.2-.1-16.7.7-5.6.8-11.1 1.3-17 1-4.8-.2-12.7 1-16.9-1.1 1.3-6.6 1.1-14.7 1.1-21.7v-17.3c0-5.7 1.5-10.5 1.2-15.9-.3-6.9-5.7-6.1-11-7.2-5.3-1.1-9.8-1.9-14.9 0 2.3-19.4 1.9-39.7 3.9-59.3 1.1-11.2 1.7-22.4 1.7-33.9 0-5.6.3-11.1.3-16.6v-8.5c0-3.1 1-5 1.3-7.8l-1.7-1.5c17.3.7 34.6 1 51.9 1.1 8.2.1 16.4-.4 24.5.1 5 .3 11.6 1.5 12.5-5.3 2 .9-.8 5.1 0 0 4.2 1.1 4.2 7.1 8.2 9.1 6 3 12.9-1 17.5 4l5.6.1c2.5.5 5.4 1.2 8 1.5 5.2.5 10 .7 16 1.1v.5c0 .3-1.9 1.3-2.1 1.5-.6.5-1.4 1-2 1.6-1.2 1-2.5 2.1-3.7 3.1-2.3 2.1-4.7 4.2-7 6.3-.5.4-1.1.9-1.5 1.4-.4.5-.8 1-1.4 1.5-.7.6-1.2 1.5-1.9 2.2-.7.6-1.4 1.1-1.9 1.8-.2.3-.5.5-.7.8-.2.3-.3.6-.5.8-.6.6-1.3 1.2-1.9 1.8-1.3 1-2.4 2.4-3 4z" />
                    <path id="MTN" d="M222.1 164.6c-.4.4-.8.7-1.3.8 2.1-21.1 3.2-42.3 4.7-63.5 1.5-20.9.4-41.8 2.7-62.7l.3-1.5c-41.6-.8-82.9-7.4-123.3-16.9l-.7.4c-1.3 13.5-7.3 24.5-9.2 37.6-.4 2.7-.2 5.3.2 7.8.1.4.1.7.2 1.1.3 3.3-.7 6.3.6 9.3.1.3.1.7.2 1 .2 1 .2 2 .1 2.9-.1.3-.3.7-.5 1-1.8 3.5-5.2 6.5-6.9 10-.1.3-.3.6-.4.9-.6 2.2.3 4.3.4 6.6v1c.7 2.6-1.3 5.6-1.4 8.3-.1.4-.2.7-.4 1.1-1.5 4.3-3.2 8.5-4.2 13v5c0 1-1 3-2 3-5 1-8.9-3-12.9-4-2.6 0-4.9-.4-7.2-.9-.4-.1-.7-.2-1.1-.3-2-.6-5-2.6-7-1.6-1 2-1 5-1.5 6.9-.2.4-.4.7-.6 1.1-3.3 6.8-2.6 14.3-5.4 21-3 9-4 18 2 26.1 6 8 9.9 15 14.9 23.1 1 1 2 1 3 2 5 8 10.9 15 14.9 23.1 4 8 8.9 15 13.9 23.1.2.2.3.4.3.6.1.2.1.4.1.7-1.7 2.6 4.3 6.6-.4 8.7-.3.2-.5.5-.8.7-3 3-4 6.9-3.2 11.4-1 0-2 0-2 1l.3.9c.5 3.9-2.5 9.9 4.4 11.3.3.2.6.4 1 .6 11.2 7.5 23.1 15 35.5 19.9 7.9 3.2 16.4.7 24.4 2.8 2.9.8 5.2 2.4 8.3 1.8 2.6-.5 4.3-2.4 3.6-5.2 5.8 0 11.5 0 17.2.4l-2.9-.4c3 .4 7.5-1.9 11.1-2 4.6-.2 9.2-.1 13.8-.3 8.5-.4 16.4 1.3 24.1 2-.2-5.3.9-10.9.9-16.6 0-5.7.2-10.7.2-16.3v-35.3c0-3 .4-6.1.5-9.1 3.7-.2 9.8-1.7 13 .6.2-.1.4-.3.6-.4.2 0 .6.1.7-.1v-1c-.1-2.6-.2-5.1-.3-7.7-.1-2.6-.1-5.1-.1-7.7V204c0-2.6.1-5.1.2-7.7.1-2.6.2-5.1.4-7.7.2-2.6.3-5.1.6-7.6.5-5.5 2-12.2-4.2-14.6-6.4-2.6-14.2-2.5-20.7-.6.2-1.9.4-3.7.8-5.6" />
                    <path id="WSC" d="M406.7 337.9c-1.9-.5-3.8-.5-3.8-1.5-.9-2.6.5-5.2 1.9-7.2 0-.2.2-.7.7-.9-1.1.3-4.3 1.9-5.3.6-.7-.8-.4-1.6.2-2.2-2.3 0-3.9-2.4-3.3-5.3.7-3.5 1.2-6.8-.8-10.1-2.1-3.5-5.9-1.7-9-.8-4.3 1.3-8.6 1.4-13 1.1-.3 0-.7 0-1.2-.1.2-5.3 4.1-8.3 4.1-13.3 0-14-3-29.1 2-43.1 1-3 3-5 3-8 1-6 4-11 5.2-16.9l-.5.6c-.7.2-1.7 1.2-1.7 1.2-2-1-3-3-4-4-16.9-2-32.8 1-49.6 3-1 0-2-1-2-1v-5c-20.8 2-41.7 2-63.5 4-6.9 0-14.9 1-21.6-2.2l-.6 1.3c-3.5-2.1-8.5-1.1-12.5-1.1-2 26.1-1 52.1-2.1 77.7-.5 0-1-.1-1.4-.2-15.3-2.3-30.7-2.3-45.7.4l.3.5c8.2 4.8 15.1 11.8 20.1 18.8 5 7 6.9 14 11.9 20 1.3 1.3 2.9 2.2 4.7 3.1.3.1.6.3.9.4 5.1 3.1 7.1 5.1 9.7-.5l.6-.9c.8-1.2 1.6-2.3 2.4-3.5l.5-.5c5.8-4.6 15.4-4.2 19.6 1.6 6.7 9.3 12.9 18.9 19.2 28.4l.5.5c2 5.1 3.7 10.3 6.1 15.2 3.4 7 10.3 8.4 17.1 9.7 1.3.2 2.7.3 4 .5 1.9.3 3.7.7 5.5 1 0-2 .4-4.2-.1-6.1-2.3-9.3-3.2-18.3 4.1-26l5.5-5.6c7.7-6.4 15-13.5 23.3-19.1 6.7-4.5 14.4-7.2 23.1-4.5 3.5 1.1 7.7-.1 11.5-.3l2.5-1.5c2 1.5 4 3 6 4.6.6.4 1.1 1.5 1.5 1.4 5.1-.7 10.1-1.6 15.1-2.5l2.5-.5 8.1 3.1c1-1.4 0-3.3-1.7-4.3z" />
                </svg>
            </StyledAmericaMap>
        )
    }
}

export default AmericaMap;
/*

Naming Convention of US regions & path IDs

PAC-pacific (HI, AK inclusive)
NEC-northeast coast
MID-midatlantic coast
SAC-southatlantic coast
ESC-eastsouthcentral

ENC-eastnorthcentral

WNC-westnorthcentral

WSC-westsouthcentral

Mtn-mountain

*/