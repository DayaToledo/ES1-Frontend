import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  grid-area: visualization;
  min-height:100%;
`;

export const DataBox = styled.div`
  background: var(--color-box-base);
  max-width: 74rem;
  border-radius: .8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  a {
    text-decoration: none;
  }

  fieldset {
    border:none;
    padding: 0 2.4rem;
  }

  legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    padding-top: 2.4rem;
    border-bottom: 1px solid var(--color-line-in-white)
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: .8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
    margin-top: 3.2rem;
  }

  button:hover{
    background: var(--color-secondary-dark);
  }
`;

export const TextBlock = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2rem;
  width: 100%;
  
  @media(min-width:700px){
    margin-top: 0px;
  }
`;



