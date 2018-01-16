import React from 'react';
import styled from 'styled-components';

// import validator from 'validator';
/*
This Zipcode validation lifted from:
https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
*/

const StyledZipChecker = styled.div`
    height: 10vh;
    color: #1c1841;
    & input::placeholder {
        color: #c4bfad;
        font-family: "Quicksand", sans-serif;
    }
`
const ZipLabel = styled.label`
    background-color: ${props =>(props.isTrue? "green":"#7a2929")};
    @media screen and (max-width: 376px) {      // iPhone query
        top:  55vh;
        left: 0vw;
        width: 95vw;
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
                <input onChange={this.handleZip} type="text" placeholder="Zipcode"/>
            </ZipLabel>
        </StyledZipChecker>
        )
    }
}
export default ZipChecker;