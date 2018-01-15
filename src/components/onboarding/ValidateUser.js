import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './validate/FirstNameChecker';
import LastNameChecker from './validate/LastNameChecker';
import EmailChecker from './validate/EmailChecker';
import ZipChecker from './validate/ZipChecker';
import USStatesChecker from './validate/USStatesChecker';

const StyledValidateUser = styled.div`
    height: 73.5vh;
    background: #cfcfcf;
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