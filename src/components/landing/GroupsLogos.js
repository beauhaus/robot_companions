import React from 'react';
import styled from 'styled-components';
import logos from './logo.JSON';

const StyledGroupsLogos = styled.div`
    height: 17vh;
    width: 88vw;
    display: grid;
    grid-auto-columns: 10vw;  // caution-> influences phone query
    justify-content: space-between;
    grid-template-rows: auto;
    & .logo-frame {
        grid-template-rows: repeat(10, 1fr);
        & > img {
            width: 100%;          
        } 
        &  p {
            font-size: calc( var(--base));
        }
    }
}
`

const LogoFrame = styled.div`
        background: transparent;
        diplay: grid;
        grid-template-rows: repeat(10, 1fr);
        & > img {
            grid-row: 1/8;
        } 
        & > p {
        font-size: calc(var(--base)* .5);
        font-family: Verdana, sans-serif;
        color: black;
        font-weight: bold;
    }
`

class GroupsLogos extends React.Component {
    render(props) {
        return (
            <StyledGroupsLogos className="groups-logos">
                    {logos.map((logo)=> (
                    <LogoFrame className="logo-frame" key={logo.id}>
                     <img src={`./img/logo/${logo.src}`}  alt={`${logo.desc}`}/>
                     <p id="logo-title-text">{`${logo.title}`}</p>
                    </LogoFrame>
                ))
            }
            </StyledGroupsLogos>
        )
    }
}
export default GroupsLogos;