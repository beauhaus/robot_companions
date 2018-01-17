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

@media screen and (max-width: 768px) {    // tablet query
    & div > p {
        bottom: 5vh;
        
    }
}

@media screen and (max-width: 376px) {   //phone query
    height: 35vh;
    grid-auto-columns: 60%;
    overflow: hidden;
    & > #logo-frame {
        height: 45vh;
        & > p {
            height: 5vh;
            width: 22vw;
            left: 50%;
            font-size: calc(var(--base) * .75);
            font-weight: bold;
            margin-top: 2vh;
            margin-left -10vw;
            top: 28vh;
        }
    }
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