import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height:70vh;
  button {
    width: 400px;
    height: 40px;
    background-color:var(--purple);
    border: none;
    border-radius:5px;
    cursor: pointer;
    font-weight:700;
    font-size:18px;
    color: #fff;

   transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

`