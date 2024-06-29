import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    font-size: 62.5%; /* 1rem = 10px */
    font-family: "Roboto Slab", serif;
  }

  h1, button, svg{
    color: ${({ theme }) => theme.COLORS.ROSA};
  }

  button, a{
    cursor: pointer
  }

  a{
    text-decoration: none;
  }
`
