import styled from "styled-components";

export const Wrapper = styled.div `
  
    margin: 0 auto;
    padding: 0 20px;

`;

export const Content = styled.div `
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   
    grid-gap: 5rem;
`;
