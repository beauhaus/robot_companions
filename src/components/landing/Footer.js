import React from 'react';
/**Styled Component */
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledFooter = styled.footer`
background: linear-gradient(210deg, #1d3642 20%, #549cbd 100%);
background: linear-gradient(210deg, #1d3642 20%, black 100%);
font-family: "Trebuchet MS", sans-serif;

    color: #b8b8b8;
    height: 24vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 82vw 1fr;
    grid-template-rows: 1fr repeat(4, 3.5vh) 1fr;
    position: relative;

    & > #text-level-top {
     grid-column: 2/3;
     grid-row: 2;
     position: relative;
     & > img {
         height: 100%;
         filter:  hue-rotate(66deg) brightness(330%);
         box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
         border: 1px solid maroon;
         position: absolute;
         left: 0;
         top: 0;
        }
        & div {
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            display: grid;
            grid-template-colums: repeat(3, 1fr);
            grid-template-rows: 3.5vh;
        }
        & div {
            & a {
                grid-column: auto;
                grid-row: 1;
                margin-left: 1vw;
            }
        & img {
            height: 85%;
            mix-blend-mode: screen;
        }
    }
}

    &>#text-level-two {
    grid-column: 2/3;
    grid-row: 3;
    text-align: right;
    & div {
        display: inline;
    }
    & div, span, a, a:visited, a:focus {
        color: #b8b8b8;
        margin: 0 .2vw;
        font-size: calc(var(--base)* .5)
     }
     & a:hover {
        text-decoration: underline;
     }
     & #privacy {
         font-weight: bold;
         &:hover {
        text-decoration: underline;
        }
     }
    }
    &>#text-level-three{ 
        grid-column: 2/3;
        grid-row: 4;
        padding: 4px 0;
       & > div#corporate, sup {            
            text-align: right;
            font-size: calc(var(--base)* .5);
        }
    }

    & > #text-level-four {
        grid-column: 2/3;
        grid-row: 5;
     & p {
        font-size: calc(var(--base)* .5);
        text-align: right;
     }
    }

@media screen and (max-width: 768px) {   // tablet query
    &  button {
        width: 16vw;
        height: 5vh;
        margin-left: -8vw;
    }
  }

  @media screen and (max-width: 376px) {    // phone query
      width: 100%;
      text-weight: lighter;
      height: 35vh;
      grid-template-rows: 5vh repeat(3, 3.5vh) 8vh 1fr;
      grid-gap: 15px;
    & button {
        width: 30vw;
        margin-left: -15vw;
    }
    & > #text-level-top {
        position: relative;
        text-align: center;
        & #footer-left-icon {
            display: none;
        }
        & div {
            position: absolute;
            width: 40vw;
            left: 50%;
            margin-left: -20vw;
            justify-content: space-between;
            & a {
                & img {
                    height: 90%;
                }
            }
        }
    }
    & > #text-level-two {
        text-align: center;
        position: relative;
        & > span#contact-links {
                text-align: right;
                grid-row: 2;
        }
        & > #privacy {
            display: block;
            position: absolute;
            margin-left: -41vw;
            top: 5.5vh;
            left: 41vw;
            width: 82vw;
            text-align: center;
        }
    }
    & > #text-level-three {
        text-align: center;
        grid-row: 4;
        & > #corporate {
            display: inline-block;
            text-align: center;
            margin-top: 3vh;
        }
    }
    & > #text-level-four{
        & p {
            text-align: center;
            margin-top: 2vh;
        }
    }
}
`




const Footer = () => (
    <StyledFooter>       
        <div id="text-level-top">
        
            <img id="footer-left-icon" src="./img/horiz-icon.svg" alt="horizontal icon" />
            <div id="footer-icon-links">
            <a id="git-link" href="https://github.com/Beauvelop/robot_companions"><img id="git-logo" src="./img/git-logo.png" alt="git-logo" /></a>
            <a id="twitter-link" href="https://twitter.com/beau_dev"><img id="twitter-logo" src="./img/twitter-logo.jpg" alt="git-logo" /></a>
            <a id="codepen-link" href="https://codepen.io/beau_dev/"><img id="codepen-logo" src="./img/codepen-logo.png" alt="git-logo" /></a>
            </div>
        </div>
        <div id="text-level-two">
            <span id="contact-links"><a href="#">Contact Us</a>|<a href="#">Legal Notice</a>|<a href="#">Terms of Use</a>|</span>
            <div id="privacy">Privacy and information Processing Policy, etc.</div>
        </div>
        <div id="text-level-three"><div id="corporate"><sup>&copy;</sup>2018 WCGW Corporation</div></div>
        <div id="text-level-four">
            <p>RC Trademarks and Copyrights do not exist. This site is fictitous. Robots are likely no cause for concern.</p>
        </div>
        </StyledFooter>
        
    )
export default Footer;