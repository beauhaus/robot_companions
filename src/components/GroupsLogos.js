import React from 'react';
import styled from 'styled-components';
import logos from './logo.JSON';

const SingleLogo = styled.div`
position: absolute;
top: 0;
left: 0;
    height: 17vh;
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    justify-content: space-around;
@media screen and (max-width: 376px) {
    height: 75vh;
    grid-auto-columns: 50%;
    overflow: hidden;

}
`
const LogoFrame = styled.div`
    position: relative;
    grid-row: 1;
    height: 100%;
    padding: 0;
    width: auto;
    background: transparent;
    & > img {
        margin-top: 2vh;
        width: 80%;
    }
    & > p {
        font-size: .5em;
        font-family: Verdana, sans-serif;
        color: black;
        position: absolute;
        bottom: -2vh;
        width: 8vw;
        left: 50%;
        margin-left -4vw;
        font-weight: bold;
    }
// tablet query
@media screen and (max-width: 768px) {
    // border: 2px solid blue;
    & > p {
        bottom: 1vh;
        font-weight: lighter;
    }
}
// phone query
@media screen and (max-width: 376px) {
    & > p {
        top: 28vh;
        font-weight: bold;
    }
}
`
class GroupsLogos extends React.Component {
    render(props) {
        return (
            <SingleLogo id="single-logo">
                    {logos.map((logo)=> (
                    <LogoFrame id="logo-frame" key={logo.id}>
                     <img src={`./img/logo/${logo.src}`}  alt={`${logo.desc}`}/>
                     <p>{`${logo.title}`}</p>
                    </LogoFrame>
                ))
            }
            </SingleLogo>
        )
    }
}
export default GroupsLogos;