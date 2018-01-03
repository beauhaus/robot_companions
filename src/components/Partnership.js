import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
color: black;
background: slategray;
display: grid;
`
const StyledPartnershipInnerGrid = styled.article`
margin: auto;
color: #a1a1a1;
border: 1px solid maroon;
height: 50vh;
width: 70vw;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
`


const Partnership = () => (
    <StyledPartnership className="partnership">Partnership
        <StyledPartnershipInnerGrid className="partnership-inner-grid">
            <section>
                <h1>HEADLINE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    neque error.</p>
            </section>
        </StyledPartnershipInnerGrid>
    </StyledPartnership>
)

export default Partnership;