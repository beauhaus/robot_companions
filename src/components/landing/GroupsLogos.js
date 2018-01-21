import React from 'react';
import styled from 'styled-components';
import logos from './logo.JSON';

const SingleLogo = styled.div`
overflow: hidden;

    height: 17vh;
    width: 88vw;
    display: grid;
    grid-template-columns: repeat(8, 10vw);
    justify-content: space-between;
    & .logo-frame {
        grid-template-rows: repeat(10, 1fr);
        & > img {
            width: 100%;
        } 
        & > p {
        font-size: calc(var(--base)* .6);
        font-family: Verdana, sans-serif;
        font-weight: bold;
        }
    }
}

@media screen and (max-width: 376px) {   //phone query
    height: 37vh;
    width: 608vw;
    // border: 1px solid yellow;
        grid-column: 2;
        display: grid;
        grid-auto-columns: 60vw;
        grid-auto-flow: column;
        // overflow: hidden;
    & > .logo-frame {
        width: 60vw;
        height: 34vh;
        & > img {
            width: 100%;
        }
        & > p {
            // border: 2px solid red;
            // color: pink;
        }
    }
}

`


// display: grid;
// grid-auto-columns: 24.75%;
// grid-auto-flow: column;
// grid-gap: 1%;
// overflow: hidden;


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
            <SingleLogo id="single-logo">
                    {logos.map((logo)=> (
                    <LogoFrame className="logo-frame" key={logo.id}>
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