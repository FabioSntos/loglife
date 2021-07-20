import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
 --background: #f0f2f5;
 --green: #33cc95;
 --purple: #5429cc;
 --purple-light: #6933ff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    background-color:var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea,button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
`