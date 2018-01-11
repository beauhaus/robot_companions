import React from 'react';
import styled from 'styled-components';

// import validator from 'validator';
/*
Zipcode validation lifted from:
https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
*/

const StyledZipChecker = styled.div`
    height: 10vh;
    background: #cfcfcf;
    color: #1c1841;
`
const ZipLabel = styled.label`
    background-color: ${props =>props.isTrue? "green":"red"};
    color: wheat;
    background:#brown;
    transition:all 1s ease;
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