import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
color: black;
display: grid; /* remove? */
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
const StyledPartnershipInnerGrid = styled.article`
margin: auto;
color: #a1a1a1;
padding: 0.5%;
border: 1px solid maroon;
height: 54vh;
width: 70vw;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
& > section {
    & h1 {
        font-size: 2rem;
        color: navy;
        & > span {
            color: maroon;
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

} 

`


const Partnership = () => (
    <StyledPartnership className="partnership">
        <StyledPartnershipInnerGrid className="partnership-inner-grid">
            <section>
                <h1>Robot <span>Partnership</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    harum .</p>
            </section>
        </StyledPartnershipInnerGrid>
    </StyledPartnership>
)

export default Partnership;