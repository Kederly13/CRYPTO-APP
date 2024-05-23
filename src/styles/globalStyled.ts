import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.secondaryFontColor};
    font-size: 14px;
  }

  * {
    box-sizing: border-box;
  }

  ul, li {
    display: block;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0
  }

  a {
    text-decoration: none;
    transition: .5s;
    color: inherit;
  }

  input, button {
    outline: none;
    border: none;
    font-family: inherit;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    
    :hover {
        cursor: pointer;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  #root {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    min-height: 100vh;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
}

  input[type='number'] {
    -moz-appearance: textfield; /* Remove spin buttons in Firefox */
  }
`;
