import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  grid-area: visualization;
  display: flex;
`;

export const DataBox = styled.div`
  background: var(--color-box-base);
  max-width: 74rem;
  margin: 0rem auto 0rem;
  padding-top: 6.4rem;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  fieldset {
    border:none;
    padding: 0 2.4rem;
  }

  fieldset >  p {
    padding: 0rem;
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
`;

export const TextBlock = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2rem;
  width: 100%;

  h3 {
    text-align: justify;
    font-weight: 600;
    font-size: 1.6rem;
    margin: 3rem 0rem 1rem 0rem;
  }

  @media(min-width:700px){
    margin-top: 0px;
  }
`;



