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

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width:100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .React-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter .2s;

    &:hover {
    filter: brightness(0.7);
  }
  }
`