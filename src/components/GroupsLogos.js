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
    background: wheat;
    border: 1px solid fuchsia;
`
const LogoFrame = styled.div`
    // position: relative;
    grid-row: 1;
    height: 10vh;
    width: 10vw;
    background: transparent;
    border: 1px solid black;
    & > img {
        width: 100%;
    }
    & > p {
        font-size: .9em;
        color: black;
    }
    
`
// const LogFrame = styled.section`
//     position: relative;
//     // position: absolute;
//     top: 10vh;
//     grid-row: 1;
//     height: 40%;
//     width: 100%;
//     text-align: center;
//     // border: 1px solid yellow;
//    & > img {
//        width: 100%;
//        height: 100%;
//     //    border: 1px solid red;
// } & > h3 {
//     font-size: 0.6em;
//     margin-top: 2vh;
//     color: navy;
//     z-index: 20;
// }
// & > p {
//     position: absolute;
//     bottom: -12vh;
//     font-family: sans-serif;
//     word-wrap: break-word;
//     color: #301010;
//     line-height: 1.5;
//     font-size: 0.6em;
//     z-index: 20;
// }
// `
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