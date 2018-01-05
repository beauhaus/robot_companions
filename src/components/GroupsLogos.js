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
`
const LogoFrame = styled.div`
    position: relative;
    grid-row: 1;
    height: 100%;
    width: 8vw;
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
            <SingleLogo className="slider-inner-container">
                    {logos.map((logo)=> (
                    <LogoFrame key={logo.id}>
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