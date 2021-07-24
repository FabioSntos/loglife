import styled from 'styled-components'

export const Container = styled.header`
  height: 100px;
  width: 100%;
  display:flex;
  background-color:var(--purple);
  
  
  button {
    margin: 30px 0 0  30px;
    height:50px;
    width: 180px;
    border-radius: 5px;
    border: none;
    background-color:var(--green);
    color: #fff;
    font-weight:700;
    font-size:18px;
    cursor: pointer;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`