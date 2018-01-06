import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
color: black
display: grid; /* remove? */
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
const StyledPartnershipInnerGrid = styled.article`
margin: auto;
color: #1d2535;
padding: 18vh 0.5%;
// border: 1px solid maroon;
height: 54vh;
width: 70vw;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
& > section {
    position: relative;
    & h1 {
        font-size: 2rem;
        color: #1d2535;
        & > span {
            color: #831212;
            font-size: 2rem;
        }
    }
    & p {
        margin-top: 2vh;
        line-height: 3;
        font-family: sans-serif;
        font-size: 0.7rem;
        color: black;
    }
    & img {
        position: absolute;
        width: 12vw;
        top: 0;
        left: 50%;
        margin-left: -6vw;
        box-shadow: 4px 4px 6px 1px rgba(0,0,0,0.5);

    }

} 

`

const Partnership = () => (
    <StyledPartnership className="partnership">
        <StyledPartnershipInnerGrid className="partnership-inner-grid">
            <section>
                <h1>RC <span>Partnership</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    harum .</p>
            </section>
            <section>
                <img src="./img/logo/profile-logo-sm.svg" alt="profile-logo-small" />
            </section>
        </StyledPartnershipInnerGrid>
    </StyledPartnership>
)

export default Partnership;