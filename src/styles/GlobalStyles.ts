import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
 --green: #33cc95;
 --blue: #5429cc;
 --blue-light: #6933ff;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,input,textarea,button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
`