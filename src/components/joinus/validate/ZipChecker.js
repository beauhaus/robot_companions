import React from 'react';
import styled from 'styled-components';

// import validator from 'validator';
/*
Zipcode validation lifted from:
https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
*/

const StyledZipChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const ZipLabel = styled.label`
        background-color: ${props =>(props.isTrue? "green":"orangered")};
        width: 10vw;
        height: 4.5vh;
        position: absolute;
        right: 0;
        border: 4px solid #858370;
        box-shadow: -3px 3px 5px 3px rgba(0,0,0,.3);
        border-radius: 2px;
        text-align: center;
        font-family: sans-serif;
        font-size: .6rem;
        color: black;
        line-height: 2;
        transition: all 1s ease;
    & input {
        height: 4vh;
        font-size: 1rem;
        position: absolute;
        right: 12vw;
        background: grey;
        border: 2px solid tan;
    }
}
`
class ZipChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleZip = this.handleZip.bind(this);
        this.state = {
            zipBool: ''
        }
    }

    handleZip(e) {
        var verifiedZip =  /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e.target.value.trim());
        this.setState({
            zipBool: verifiedZip
        });
    }
    render() {
        return (
        <StyledZipChecker className="ZipChecker">
    {console.log(`
        this.state.zipBool: ${this.state.zipBool}
    `)}
            <ZipLabel isTrue={this.state.zipBool} 
            >Zip Code 
                <input onChange={this.handleZip} type="text" />
            </ZipLabel>
        </StyledZipChecker>
        )
    }
}
export default ZipChecker;