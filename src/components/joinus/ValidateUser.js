import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './validate/FirstNameChecker';
import LastNameChecker from './validate/LastNameChecker';
import EmailChecker from './validate/EmailChecker';
import ZipChecker from './validate/ZipChecker';
import USStatesChecker from './validate/USStatesChecker';

const StyledValidateUser = styled.div`
    position: absolute;
    top: 6vh;
    right 2vw;
    z-index: 4;
    color: #1c1841;
    & label {
        width: 10vw;
        height: 4.5vh;
        position: absolute;
        right: 0;
        border: 4px solid #858370;
        border-top-color: #99967b;
        border-right-color: #99967b;
        box-shadow: -2px 2px 3px 1px rgba(0,0,0,.3);
        border-radius: 2px;
        text-align: center;
        font-family: sans-serif;
        font-size: .6rem;
        color: #1d1c1c;
        line-height: 2;
        transition: all 1s ease;
    }
    & input {
        position: absolute;
        font-family: Courier, sans-serif;
        color: rgba(0,0,0,.7);
        font-weight: bold;
        box-shadow: inset -1px 1px 6px 2px rgba(0,0,0,.5);
        right: 12vw;
        height: 4vh;
        font-size: 1rem;
        background: grey;
        border: 2px solid tan;
    }
    @media screen and (max-width: 376px) {      // iPhone query
            width: 100%;
            height: 80vh;
            top: 10vh;
            right: -50vw;
            position: absolute;
            & > div > label {
                right: -3vw;
                width: 20vw;
                height: 5vh;
                margin-top: 2vh;
                & > input {
                    margin-top: 5vh;
                    // display: fixed;
                    right: -42vw;
                    height: 8vh;
                    width: 70vw;
                    font-size: 1.5rem;
                }
            }
      
    }
`

const ValidateUser = () => (
    <StyledValidateUser className="styled-valid-user">
        <FirstNameChecker id="first-name-check"/>
        <LastNameChecker />
        <EmailChecker />
        <ZipChecker />
        <USStatesChecker />
    </StyledValidateUser>
)

export default ValidateUser;