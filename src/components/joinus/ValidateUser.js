import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './validate/FirstNameChecker';
import LastNameChecker from './validate/LastNameChecker';
import EmailChecker from './validate/EmailChecker';
import ZipChecker from './validate/ZipChecker';
import USStatesChecker from './validate/USStatesChecker';

const StyledValidateUser = styled.div`
    position: absolute;
    top: 5vh;
    right 20vw;
    z-index: 20;
    color: #1c1841;
`

const ValidateUser = () => (
    <StyledValidateUser className="profile">
        <FirstNameChecker />
        <LastNameChecker />
        <EmailChecker />
        <ZipChecker />
        <USStatesChecker />
    </StyledValidateUser>
)

export default ValidateUser;


/*
.true {
  background-color: rgb(50, 76, 97);
  color: greenyellow;
}

.false {
  background-color: #420505;
  color: #b8b8b8;
}

*/