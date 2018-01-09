import React from 'react';
/**Styled Component */
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #9eeed5;
    color: #181e32;
    height: 24vh;
    &  >  footer {
        // display: flex;
        
        margin: 0 auto;
        height: 100%;
        width: 84vw;
        display: grid:
        grid-template-columns: auto 60vw auto;
        grid-template-rows: repeat(6, 4vh)
        justify-content: space-between;
        border: 2px solid red;
        & span#footer-icon-links {
            width: 100%;
            border: 2px solid blue;
            &  #footer-left-icon {
                width: 4vw;
                height: 2vh;
                grid-row: 2;
                grid-column: 2;
                border: 1px solid orange;
            }
            &  img {
                height: 4vh;
                border: 4px solid yellow;
            }
        }

    }
`
const Footer = () => (
    <Wrapper>
        <footer id="footer-contaier">
                <img id="footer-left-icon" src="./img/footer-left-icon.jpg" alt="footer-left-icon" />
                <span id="footer-icon-links">
                    <a id="git-link" href="https://github.com/Beauvelop/2-page-app"><img id="git-logo" src="./img/git-logo.png" alt="git-logo" /></a>
                    <a id="twitter-link" href="https://github.com/Beauvelop/2-page-app"><img id="twitter-logo" src="./img/twitter-logo.jpg" alt="git-logo" /></a>
                </span>

        </footer>
    </Wrapper>

)
export default Footer;