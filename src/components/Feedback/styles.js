import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const FormBox = styled.form`
  min-height: 100vh;
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
    padding: 2.4rem;
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

export const InputBlock = styled.div`
  margin-top: 2.4rem;
  position: relative;
  margin-bottom: 2rem;

  label {
    font-size: 1.4rem;
    color: var(--color-text-complement);
  }

  input,
  select,
  textarea {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;/*tira a seleção forte*/
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  textarea{
    padding: 1.2rem 1.6rem;
    height: 16rem;
    resize: vertical;
  }

  :focus-within::after {
    content: "";

    width: calc(100% - 3.2rem);
    height: 2px;
    background: var(--color-primary-light);

    position: absolute;
    left: 1.6rem;
    bottom: 0;
  }

  @media(min-width:700px){
    margin-top: 0px;
  }
`;



