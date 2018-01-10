import React from 'react';
/**Styled Component */
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: linear-gradient(210deg, #1d3642 20%, #549cbd 100%);
background: linear-gradient(210deg, #1d3642 20%, black 100%);
font-family: "Trebuchet MS", sans-serif;
    color: #b8b8b8;
    height: 24vh;
    display: grid;
    grid-template-columns: 1fr 82vw 1fr;
    grid-template-rows: 1fr repeat(4, 3.5vh) 1fr;

    &>#one {/*test*/
    //  background: grey;
     grid-column: 1/-1;
     grid-row: 1;
    }

    & > #text-level-top {
    //  background: rgba(2,2,2,0.5);
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
    //  background: rgba(62,62,12,0.5);
    grid-column: 2/3;
    grid-row: 3;
    text-align: right;
    & div {
        display: inline;
    }
    & div, span, a, a:visited, a:focus {
        color: #b8b8b8;
        margin: 0 .2vw;
        font-size: .5rem;
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
       & > div#corporate, sup {
            text-align: right;
            font-size: .5rem;
        }
    }

    & > #text-level-four {
    //  background: rgba(62,32,72,0.5);
     grid-column: 2/3;
     grid-row: 5;
     & p {
        font-size: .5rem;
        text-align: right;
     }
    }

// phone query
  @media screen and (max-width: 376px) {
      text-weight: lighter;
      height: 35vh;
    grid-template-rows: 1fr repeat(3, 3.5vh) 8vh 1fr;
    grid-gap: 15px;
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
            // margin: 0 auto;
            // border: 1px solid wheat;
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
            // border: 1px solid white;
        }
        
        
    }
    & > #text-level-three {
        text-align: center;
        grid-row: 4;
        & > #corporate {
            // color: red;
            display: inline-block;
            text-align: center;
            margin-top: 3vh;
        }
    }
    & > #text-level-four{
        // position: relative;
        // border: 1px solid yellow;
        & p {
            text-align: center;
            margin-top: 2vh;
        }

    }
}
`

/*
CENTERING EXAMPLE
.ctr-example2 {
  width: 40vw;
  position: absolute;
  left: 50%;
  margin-left: -20vw;
}
*/

const Footer = () => (
    <StyledFooter>       
        <div id="text-level-top">
            <img id="footer-left-icon" src="./img/horiz-icon.svg" alt="horizontal icon" />
            <div id="footer-icon-links">
            <a id="git-link" href="https://github.com/Beauvelop/2-page-app"><img id="git-logo" src="./img/git-logo.png" alt="git-logo" /></a>
            <a id="twitter-link" href="https://github.com/Beauvelop/2-page-app"><img id="twitter-logo" src="./img/twitter-logo.jpg" alt="git-logo" /></a>
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



